import conectarAoBanco from "../config/dbConfig.js";

// Estabelece conexão com o banco de dados utilizando a string de conexão do .env
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para buscar os posts da coleção "posts" no banco de dados
export async function getPosts() {
    // Acessa o banco de dados "Imersao-instabytes"
    const db = conexao.db("Imersao-instabytes");
    // Acessa a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}