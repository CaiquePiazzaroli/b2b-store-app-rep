# 📘 Instruções para rodar a API e configurar o banco de dados

Este projeto utiliza **Node.js**, **Express** e **Sequelize** com **SQLite** como banco de dados. Abaixo estão os passos para executar a aplicação localmente e configurar o banco de dados.

# Instale as dependencias
Na pasta STORE-API:
```bash
npm install 
```

# Iniciando a api 
```bash
npm run startserver
```
Acesse http://localhost:3001/users para ver se funcionou!

# Setando o banco de dados
Entre na pasta database com:
```bash
cd database
```
Execute o comando de criação e seed:
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Um arquivo chamado mydb.sqlite será criado dentro da pasta database.