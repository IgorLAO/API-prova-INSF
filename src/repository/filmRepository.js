import config from "./connection.js"

export default async function listarTarefas(){

    let comando = `select * from TB_TAREFA`

    let response = await config.query(comando)

    let data = response[0]

}
