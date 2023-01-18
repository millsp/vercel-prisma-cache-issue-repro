const { PrismaClient, Prisma } = require('@prisma/client')
const client = new PrismaClient()

export default async (req, res) => {
  try {
    await client.user.deleteMany({})

    await client.user.create({
      data: {
        id: '1234567890',
        email: 'alice@prisma.io',
        nick: 'al',
        // name: 'Alice',
      },
    })  
  } catch (e) {
    console.log(e.message)

    return res.status(500).json({ error: e.message })
  }

  return res.status(200).json({ ok: true })
}
