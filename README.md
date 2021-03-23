# OrcList
Desenvolvimento do projeto final do Processo Trainee (2020/2)


# Executar

Para executar o projeto é necessário dar `yarn install` dentro da pasta `backend`. E então executar o seguinte comando na pasta raiz:
```bash
sudo docker-compose up --build
```

Será executado então o backend em conjunto com o banco de dados (MongoDB).


# Rotas

Todas as rotas podem ser testadas no Postman ou no Insomnia

## Criar usuarios

* URL: http://localhost:5050/register
* TIPO: `POST`

* BODY: 
```json
{
	"email": "teste2@teste.com",
	"name": "Teste",
	"password": "12345678"
}
```

* RETORNO:
    * 201 - Created
    * 400 - Bad Request
    * 500 - Internal Server Error


## Autenticar usuarios

* URL: http://localhost:5050/login
* TIPO: `POST`

* BODY:
```json
{
	"email": "teste@teste.com",
	"password": "12345678"
}
```

* RETORNO:
    * 200 - Success
    * 400 - Bad Request
    * 403 - Wrong password
    * 500 - Internal server error

## Listar usuarios

* URL: http://localhost:5050/users
* TIPO: `GET`

* BODY: `NULL`

* RETURNO:
    * 200 - Success
    * 500 - Internal server error

