# Project Car Shop

Neste projeto o objetivo foi desenvolver uma API CRUD para gerenciar uma concessionária de veículos, feita em **typescript** seguindo os princípios da Programação Orientada a Objetos **(POO)** e os princípios **SOLID**, seguindo o padrão MSC (Model-Service-Controller) ou MVC, e utilizando o banco de dados **MongoDB** e o **ODM Mongoose** para realizar a conexão do banco de dados com o **Node.js**, além de fazer testes unitários para cada uma das camadas com Mocha, Chai e Sinon.

---

# Tecnologias Utilizadas

Node.js, Typescript, Express, MongoDB, Mongoose, Mocha, Chai, Sinon, Docker, docker-compose.

---

# Como utilizar a aplicação

- independente do modo escolhido abaixo a API irá utilizar a porta **3001** do localhost.

<details>
  <summary>
    <strong>Rodando localmente</strong>
  </summary><br>

  - Após clonar o repositório acesse sua raiz e utilize o comando: `npm install` para instalar as dependências.
  - Configure a URI do MongoDB e Coloque a mesma no arquivo `./src/models/connection.ts` na constante `MONGO_DB_URL`.
  - Para iniciar a API basta utilizar o comando: `npm run dev`.

</details>

<details>
  <summary>
    <strong>Utilizando o docker</strong>
  </summary><br>

  - Dentro da raiz do projeto, utilize o comando `docker-compose up -d`. Ele é o responsável por subir os containers da API do Node.js e o do banco de dados MongoDB.
  - Acesse o terminal do container com o comando: `docker exec -it car_shop bash`.
  - Após acessado o terminal instale as dependências do projeto com o comando: `npm install`.
  - Ainda no terminal do container para iniciar a API basta usar o comando: `npm run dev`.

</details>

---

# Funcionalidades do projeto.

## EndPoints

### Cars

| Método | Função | URL |
|---|---|---|
| `GET` |  Lista todos os carros.  | http://localhost:3001/cars |
| `GET` |  Lista um carro específico.  | http://localhost:3001/cars/:id |
| `POST` | Adiciona um carro.  | http://localhost:3001/cars |
| `PUT` |  Atualiza os dados do carro.  | http://localhost:3001/cars/:id |
| `DELETE` |  Deleta um carro. | http://localhost:3001/cars/:id |

#### Particularidades dos objetos que os endpoints POST e PUT esperam.

- Modelo e Valores.

```json
{
  "model": "Ferrari", 
  "year": 2020, 
  "color": "Vermelha",
  "buyValue": 2800000,
  "status": true,
  "seatsQty": 2,
  "doorsQty": 2
}
```

- Verificações de cada chave:

```json
{
  "model": "String com pelo menos 3 caracteres",
  "year": "Número maior ou igual 1900 e menor ou igual 2022",
  "color": "String com pelo menos 3 caracteres",
  "buyValue": "Número inteiro",
  "status": "Propriedade opcional, indica se o carro pode ou não ser comprado (boolean)",
  "seatsQty": "Número maior ou igual 2 e menor ou igual 7",
  "doorsQty": "Número maior ou igual 2 e menor ou igual 4",
}
```
---

### Motorcycles

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` |  Lista todas as motocicletas  | http://localhost:3001/motorcycles |
| `GET` |  Lista uma motocicleta específica. | http://localhost:3001/motorcycles/:id |
| `POST` | Adiciona uma motocicleta.  | http://localhost:3001/motorcycles
| `PUT` |  Atualiza dados de uma motocicleta. | http://localhost:3001/motorcycles/:id |
| `DELETE` |  Deleta uma motocicleta. | http://localhost:3001/motorcycles/:id |

#### Particularidades dos objetos que os endpoints POST e PUT esperam.

```json
{
  "model": "Honda XRE 300",
  "year": 2022,
  "color": "Azul",
  "buyValue": 20000,
  "status": false,
  "category": "Custom",
  "engineCapacity": 300
}
```

- Verificações de cada chave:

```json
{
  "model": "String com pelo menos 3 caracteres",
  "year": "Número maior ou igual 1900 e menor ou igual 2022",
  "color": "String com pelo menos 3 caracteres",
  "buyValue": "Número inteiro",
  "status": "Propriedade opcional, indica se a motocicleta pode ou não ser comprada (boolean)",
  "category": "String que só aceita os valores Street, Custom ou Trail",
  "engineCapacity": "Número maior que 0 e menor ou igual 2500",
}
```

---

# Testes unitários

- Os testes foram feitos por mim e estão localizados na pasta `./src/tests`, para rodar todos os testes utilize o comando `npm run test:dev` e caso queira verificar a cobertura dos testes utilize o comando `npm run test:coverage`.

---

- Desenvolvido por [Matheus Marinho](https://www.linkedin.com/in/matheus-marinhodsp/).