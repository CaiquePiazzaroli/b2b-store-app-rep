import { Sequelize } from 'sequelize';
import User from '../database/models/user.js'

//Cria uma instância do banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/db.sqlite'
});

//Instancia o model passando a conexao do banco e o DataTypes
const UserModel = User(sequelize, Sequelize.DataTypes);
console.log("Modellooo" + UserModel);

async function createUser() {
  try {
    //Tenta se autenticar
    await sequelize.authenticate();

    //Exibe uma mensagem de sucesso
    console.log('Connection has been established successfully.');

    //Criando e inserindo um novo usuário no banco 
    const newUser = await UserModel.create({
        legal_name: "OLIVEIRA IMPORTAÇÃO E EXPORTAÇÃO",
        trade_name: "Oliveira Comex",
        cnpj: "45678912345678",
        username: "oliveiracomex",
        password: "Oliveira!2025",
        email: "oliveira@comex.com.br"
    });

    console.log("Usuario inserido com sucesso!" + newUser.toJSON());
  
  } catch(err) {
    console.error('Unable to connect to the database:', err);
  } finally {
    //Fecha a conexão com o banco
    sequelize.close();
  }
}

//Executa a função que salva no banco
createUser();

