import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Gato fazendo yoga",
        imagem: "https://placekitten.com/400/300"
    },
    {
        id: 2,
        descricao: "Gatinho dormindo",
        imagem: "https://placekitten.com/200/200"
    },
    {
        id: 3,
        descricao: "Gato explorando a caixa",
        imagem: "https://placekitten.com/300/200"
    },
    {
        id: 4,
        descricao: "Gato com um brinquedo",
        imagem: "https://placekitten.com/400/300"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://placekitten.com/350/250"
    },
    {
        id: 6,
        descricao: "Gatinho brincando com uma bola",
        imagem: "https://placekitten.com/450/300"
    }
]

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...")
});


app.get("/posts", (req,res) => {
    res.status(200).json(posts)
});


function buscarPostPorID(id) {
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req,res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index])
});