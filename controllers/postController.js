import prisma from './../client'

const post = async (req, res) => {
    const {  title, content, authorEmail } = req.body
    const result = await prisma.post.create({
        data: {
            title,
            content,
            author: { connect: { email: authorEmail } },
        },
    })
    res.json(result)
}

module.exports = {
    post
}