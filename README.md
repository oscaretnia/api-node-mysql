# API Node.js - MySQL - JWT

Base de datos: [link](https://github.com/oscaretnia/api-node-mysql/blob/master/api_node_mysql.sql)

### Installation

Instalar dependencias y correr el servidor.

```sh
$ npm install
$ npm run serve
```


API con autenticación de usuarios mediante token y gestion de productos, para el desarrollo se empleo:

  - Express
  - MySQL
  - TypeORM
  - JSON Web Token (JWT)

### Authentication

| **Name** | **Type** | **URL** |
| ------ | ------ | ------ |
| Login | POST | `BASE_URL`/api/auth/login |
| Logout | GET | `BASE_URL`/api/auth/logout **(session required)** |

### Headers

Note that you have to add a space between `JWT` and your auth token like the example below.

| **key** | **value** |
| ------ | ------ |
| x-access-token | `token` |

### Endpoints products

| **Name** | **Type** | **URL** |
| ------ | ------ | ------ |
| Save | POST | `BASE_URL`/api/product **(session required)** |
| Get one  | GET | `BASE_URL`/api/product/:id **(session required)** |
| Get all  | GET | `BASE_URL`/api/product **(session required)** |
| Edit | PATCH | `BASE_URL`/api/product/:id **(session required)** |
| Delete | DELETE | `BASE_URL`/api/product/:id **(session required)** |

### Endpoints users

| **Name** | **Type** | **URL** |
| ------ | ------ | ------ |
| Save | POST | `BASE_URL`/api/user **(session required)** |
| Get one  | GET | `BASE_URL`/api/user/:id **(session required)** |
| Get all  | GET | `BASE_URL`/api/user **(session required)** |
| Edit | PATCH | `BASE_URL`/api/user/:id **(session required)** |
| Delete | DELETE | `BASE_URL`/api/user/:id **(session required)** |