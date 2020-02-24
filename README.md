# NodeJS - REST API com ExpressJS e MySQL

  - CRUD de Produtos e Categorias
  - Metodos disponiveis [GET, POST, PUT, DELETE]

![N|Solid](https://raw.githubusercontent.com/mfabiodias/node-js-mysql-rest-api/master/img/layout/database-model.png)

### DB Category
Field  | Type  | Null  | Key  | Default  | Extra
------------- | ------------- | ------------- | ------------- | ------------- | -------------
id_category | int(11) | NO | PRI | NULL | auto_increment
name | varchar(50) | NO |  | NULL | 
url | varchar(50) | NO | UNI | NULL | 
createdAt | datetime | NO |  | CURRENT_TIMESTAMP |   
updatedAt | datetime | NO |  | CURRENT_TIMESTAMP |  
                    
### DB Product
Field  | Type  | Null  | Key  | Default  | Extra
------------- | ------------- | ------------- | ------------- | ------------- | -------------
id_product | int(11) | NO | PRI | NULL | auto_increment
id_category | int(11) | NO | MUL | NULL | 
name | varchar(50) | NO |  | NULL | 
description | varchar(255) | YES |  | NULL | 
price | decimal(8,2) | NO |  | NULL | 
url | varchar(50) | NO | UNI | NULL | 
createdAt | datetime | NO |  | CURRENT_TIMESTAMP | 
updatedAt | datetime | NO |  | CURRENT_TIMESTAMP | 

### REST API Category
Method  | Path 
------------- | -------------
GET | /category 
GET | /category/:id 
POST | /category 
PUT | /category/:id 
DELETE | /category/:id 

### REST API Product
Method  | Path 
------------- | -------------
GET | /product 
GET | /product/:id 
POST | /product 
PUT | /product/:id 
DELETE | /product/:id 


### Domínios
Produção: [https://node-js-mysql-rest-api.herokuapp.com](https://node-js-mysql-rest-api.herokuapp.com)<br>
Local: [http://localhost:3000](http://localhost:3000)<br><br>

### Exemplo de chamadas locais
GET > http://localhost:3000/category > Busca todos as categorias<br>
GET > http://localhost:3000/category/1 > Busca categoria com ID 1<br>
POST > http://localhost:3000/category > Insere categoria (Com POST DATA)<br>
PUT > http://localhost:3000/category/1 > Atualiza categoria com ID  (Com PUT DATA)<br>
DELETE > http://localhost:3000/category/1 > Exclui categoria com ID 1<br><br>

### Exemplo de chamadas em produção para testes
GET > https://node-js-mysql-rest-api.herokuapp.com/category > Busca todos as categorias<br>
GET > https://node-js-mysql-rest-api.herokuapp.com/category/1 > Busca categoria com ID 1<br>
POST > https://node-js-mysql-rest-api.herokuapp.com/category > Insere categoria (Com POST DATA)<br>
PUT > https://node-js-mysql-rest-api.herokuapp.com/category/1 > Atualiza categoria com ID  (Com PUT DATA)<br>
DELETE > https://node-js-mysql-rest-api.herokuapp.com/category/1 > Exclui categoria com ID 1<br><br>

### Recomendações:
  - Utilizar o [POSTMAN](https://www.postman.com/) para testes<br>
  - E/Ou criar um APP para consumir a REST na linguagem desejada.<br><br>

### MySQL Database:
Segue a estrutura do banco de dados no arquivo [db.sql](https://github.com/mfabiodias/node-js-mysql-rest-api/blob/master/db.sql) caso deseje clonar o repositório e testar localmente.
<br /><br>

Email: [mfabiodias@gmail.com](mailto:mfabiodias@gmail.com)<br>
WhatsApp Web [(11) 93145-4949](https://web.whatsapp.com/send?phone=5511931454949)<br>
WhatsApp Mobile [(11) 93145-4949](https://api.whatsapp.com/send?phone=5511931454949)<br /><br>

License
----
MIT
 
