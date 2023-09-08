import express from "express";
const app = express()
const port = 3001
const posts = [
    {
        id: 1,
        title: "football",
        description: "mien phi",
        author: 'thanhkaka'
    },
    {
        id: 2,
        title: "volayball",
        description: "mien phi",
        author: 'tuanden'
    }
]

app.get('/posts', (req, res) => {
    console.log("api is comming")
    res.json({
        data: posts,
    })
})

// kiểm tra giúp a chỗ này nhé. sao a làm như thầy chỉ mà existingPost cứ báo undefined nhỉ!
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const existingPost = posts.find((item) => item.id === id);
    console.log('existingPost', existingPost)
    if (!existingPost) {
        return res.json({
            message: "khong co du lieu trung khop id"
        })
    }
    else {
        res.json({ data: existingPost })
    }
})














app.listen(port, () => {
    console.log(`server running ai ${port}`)
})

app.get('/', (req, res) => {
    res.send("tra du lieu ve khi suwr dungj res")
})


app.get('/bong-da', (req, res) => {
    res.send("bong da")
})
app.get('/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: "thanh"
        },
        {
            id: 2,
            name: "bac"
        }
    ])
})

// app.put('/updateput', (req, res) => {
//     res.send('đã cập nhaatj bằng put')
// })