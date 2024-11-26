import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {

    // Adiciona o middleware para processar JSON no corpo das requisições
    app.use(express.json());

    // Rota GET para "/posts" que retorna todos os posts da coleção
    app.get("/posts", listarPosts);
}

export default routes;
