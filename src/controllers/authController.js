import bcrypt from 'bcrypt';
import db from '../db/mongo.js'
import joi from 'joi';
import { v4 as uuid } from 'uuid';

export async function login(req, res){
    const usuario = req.body;
  
    const usuarioSchema = joi.object({
      email: joi.string().email().required(),
      senha: joi.string().required()
    });
  
    const { error } = usuarioSchema.validate(usuario);
  
    if (error) {
        console.log("erro de validação")
      return res.sendStatus(422);
    }
  
    const user = await db.collection('usuarios').findOne({ email: usuario.email });
  
    if (user && bcrypt.compareSync(usuario.senha, user.senha)) {
      const token = uuid();
  
      await db.collection('tokens_usuarios').insertOne({
        token,
        userId: user._id
      });
  
      return res.status(201).send({ token });
    } else {
      return res.status(401).send('Senha ou email incorretos!');
    }
}

export async function  cadastroUsuario(req, res){
  // nome, email, senha
  const user = req.body;

  const isEmail = await db.collection('usuarios').findOne({ email: user.email });
      if (isEmail) {
          res.status(409).send("Endereço de email já Existe!");
          return;
      }

  const senhaCriptografada = bcrypt.hashSync(user.senha, 10);
  await db.collection('usuarios').insertOne({ ...user, senha: senhaCriptografada}) 
  res.sendStatus(201);
}