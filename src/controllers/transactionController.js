import db from '../db/mongo.js'
import dayjs from 'dayjs';

export  async function movimentacao(req, res) {

    // {descricao, valor, type}
    const movimentacao = req.body;
    movimentacao.data = dayjs().format('DD/MM');
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
        return res.sendStatus(401)
    }

    const session = await db.collection('tokens_usuarios').findOne({ token });
    if (!session) {
        return res.sendStatus(401)
    }

    const user = await db.collection('usuarios').findOne({ _id: session.userId });
    if (!user) {
        return res.sendStatus(401);
    }
    delete user.token;

    await db.collection('usuarios').updateOne({ 
        _id: user._id 
    },{ $push: { movimentacao: movimentacao } })
    
    // user.movimentacao.push(...user.movimentacao, movimentacao);

    res.send(user);
}

// export async function getuser(req, res){
//     const user = await  db.collection('usuarios').find().toArray();
    
//     res.send(user);

// }