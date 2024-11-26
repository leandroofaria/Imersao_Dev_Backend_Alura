import { getPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {

    // Chama a função getPosts para buscar os dados no banco
    const posts = await getPosts();
    // Retorna os dados como JSON com status HTTP 200 (OK)
    res.status(200).json(posts);

    }


