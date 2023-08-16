import { Router } from "express";
import listarTarefas from "../repository/filmRepository";


let endpoints = Router();

endpoints.get('/filmes/listar', async (request, response) =>{
    let data = await  listarTarefas();
    response.send(data);
});


export default endpoints;