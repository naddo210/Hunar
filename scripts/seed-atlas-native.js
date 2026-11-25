const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://nadex0210_db_user:rRGmeKKvwCyHYGps@hunar.fga6k3e.mongodb.net/?retryWrites=true&w=majority';

async function seed() {
  console.log('Connecting to MongoDB Atlas...');
  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to Atlas!');

  const db = client.db('hunar_studio');
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash('HunarStudio2026!Admin', salt);

  const res = await db.collection('adminusers').updateOne(
    { email: 'admin@hunarstudio.com' },
    {
      $set: {
        fullName: 'HUNAR Studio Director',
        email: 'admin@hunarstudio.com',
        passwordHash,
        role: 'super_admin',
        isActive: true,
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  console.log('✓ Upserted admin user into Atlas successfully!');
  const user = await db.collection('adminusers').findOne({ email: 'admin@hunarstudio.com' });
  console.log('✓ Verified user in Atlas database:', user.email, 'Role:', user.role);

  // Test password verification
  const isMatch = await bcrypt.compare('HunarStudio2026!Admin', user.passwordHash);
  console.log('✓ Password match check:', isMatch ? 'PASSED (MATCH)' : 'FAILED');

  await client.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Atlas seed error:', err);
  process.exit(1);
});
