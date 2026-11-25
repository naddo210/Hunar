const mongoose = require('mongoose');

const uri = 'mongodb+srv://nadex0210_db_user:rRGmeKKvwCyHYGps@hunar.fga6k3e.mongodb.net/?retryWrites=true&w=majority';

async function run() {
  console.log('Connecting to MongoDB Atlas with dbName: hunar_studio...');
  await mongoose.connect(uri, {
    dbName: 'hunar_studio',
    serverSelectionTimeoutMS: 15000,
  });
  console.log('Connected to:', mongoose.connection.name);

  // Require model AFTER connection
  const AdminUser = require('../server/models/AdminUser');

  const email = 'admin@hunarstudio.com';
  const password = 'HunarStudio2026!Admin';

  console.log('Searching for existing admin user...');
  let existing = await AdminUser.findOne({ email });
  const passwordHash = await AdminUser.hashPassword(password);

  if (existing) {
    existing.passwordHash = passwordHash;
    existing.isActive = true;
    await existing.save();
    console.log('✓ Successfully updated existing admin on Atlas:', email);
  } else {
    await AdminUser.create({
      fullName: 'HUNAR Studio Director',
      email,
      passwordHash,
      role: 'super_admin',
      isActive: true,
    });
    console.log('✓ Successfully created super admin on Atlas:', email);
  }

  // Also verify password comparison
  const u = await AdminUser.findOne({ email }).select('+passwordHash');
  const matchOfficial = await u.comparePassword('HunarStudio2026!Admin');
  console.log('Password verification check:', matchOfficial ? 'PASS' : 'FAIL');

  await mongoose.disconnect();
  console.log('Atlas seeding complete!');
  process.exit(0);
}

run().catch((err) => {
  console.error('Atlas seed failed:', err);
  process.exit(1);
});
