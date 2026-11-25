/**
 * HUNAR Creative Studio - Administrative Password Reset Utility
 * 
 * Usage:
 *   node scripts/reset-admin-password.js <newPassword> [adminEmail]
 * 
 * Example:
 *   node scripts/reset-admin-password.js "HunarSecure2026!"
 *   npm run reset:password -- "MyNewPassword123"
 */

require('dotenv').config({ path: require('path').join(__dirname, '../server/.env') });
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hunar_studio';
const newPassword = process.argv[2] || 'HunarStudio2026!Admin';
const targetEmail = (process.argv[3] || 'admin@hunarstudio.com').trim().toLowerCase();

async function resetPassword() {
  console.log('====================================================');
  console.log(' HUNAR Creative Studio — Admin Password Reset');
  console.log('====================================================\n');

  if (newPassword.length < 6) {
    console.error('Error: New password must be at least 6 characters long.');
    process.exit(1);
  }

  console.log(`Connecting to MongoDB...`);
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log(`Connected to database successfully.`);

    const db = client.db('hunar_studio');
    const adminCollection = db.collection('adminusers');

    console.log(`Generating secure bcrypt hash with 12 salt rounds...`);
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(newPassword, salt);

    const result = await adminCollection.updateOne(
      { email: targetEmail },
      {
        $set: {
          fullName: 'HUNAR Studio Director',
          email: targetEmail,
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

    console.log(`\n[SUCCESS] Password updated in database for: ${targetEmail}`);

    // Verify
    const updatedUser = await adminCollection.findOne({ email: targetEmail });
    const isMatch = await bcrypt.compare(newPassword, updatedUser.passwordHash);
    console.log(`[VERIFIED] Password hash validation: ${isMatch ? 'PASSED (MATCH)' : 'FAILED'}`);

    console.log('\n--- Active Sign-In Credentials ---');
    console.log(`Portal URL:  https://hunar-omega.vercel.app/admin/login`);
    console.log(`Email:       ${targetEmail}`);
    console.log(`Password:    ${newPassword}`);
    console.log('-----------------------------------\n');

  } catch (err) {
    console.error('\n[FAILED] Could not reset admin password:', err.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log('Database connection closed.');
  }
}

resetPassword();
