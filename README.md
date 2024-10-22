Essa Biblioteca feita em Node.
Visa simplificar as bibliotecas Express. E Mysql2.

Express para a criação de APIs Simples que retornam dados.

Mysql2 para ligação e manipulação do banco de dados de forma simples.

## Exemplos

```
const Connection = Mysql.CreateConnection("localhost",3306,"root","123123","data")
Mysql.Query(Connection,`INSERT INTO dados(Nome) value ("Funcionou")`)
```

Na Primeira linha nos criamos a conexão.
E na segunda nos já inserimos os dados que nos quer dentro do mysql
de forma simples é fácil