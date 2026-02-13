import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { username: 'admin' },
  })

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10)

    await prisma.user.create({
      data: {
        id: 'default-admin-user',
        username: 'admin',
        password: hashedPassword,
        name: 'Administrator',
        email: null,
      },
    })

    console.log('✅ Admin user created')
    console.log('   Username: admin')
    console.log('   Password: admin123')
    console.log('   ⚠️ Change password after first login!')
  } else {
    console.log('ℹ️ Admin user already exists – skipping creation')
  }

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
