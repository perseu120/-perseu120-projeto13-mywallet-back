import bcrypt from 'bcrypt';
import db from "./mongo.js"

export async function  cadastroUsuario(req, res){
		// nome, email, senha
    const user = req.body;
 
    const senhaCriptografada = bcrypt.hashSync(user.senha, 10);
    console.log({ ...user, senha: senhaCriptografada});
    // await db.collection('usuarios').insertOne({ ...user, senha: senhaCriptografada}) 
    console.log(db);
    res.sendStatus(201);
}