import { Sequelize } from 'sequelize';


//Cria uma instância do banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../mydb.sqlite'
});

console.log("Models:" + sequelize.models);

//Testa a conexao com o banco de dados
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  sequelize.close();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}