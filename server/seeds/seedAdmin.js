require('dotenv').config();
const mongoose = require('mongoose');
const AdminUser = require('../models/AdminUser');
const connectDB = require('../config/db');

const seedAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = (process.env.ADMIN_DEFAULT_EMAIL || 'admin@hunarstudio.com').toLowerCase().trim();
    const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'HunarStudio2026!Admin';
    const adminFullName = 'HUNAR Studio Director';

    const existingAdmin = await AdminUser.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log(`[Seed] Admin user already exists for ${adminEmail}. Updating password...`);
      existingAdmin.passwordHash = await AdminUser.hashPassword(adminPassword);
      existingAdmin.isActive = true;
      await existingAdmin.save();
      console.log(`[Seed] Successfully updated admin password for ${adminEmail}`);
    } else {
      const passwordHash = await AdminUser.hashPassword(adminPassword);
      await AdminUser.create({
        fullName: adminFullName,
        email: adminEmail,
        passwordHash,
        role: 'super_admin',
        isActive: true,
      });
      console.log(`[Seed] Successfully created default Super Admin user: ${adminEmail}`);
    }

    console.log(`[Seed] Admin Credentials:`);
    console.log(`       Email: ${adminEmail}`);
    console.log(`       Password: ${adminPassword}`);
    process.exit(0);
  } catch (error) {
    console.error(`[Seed Error]: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
