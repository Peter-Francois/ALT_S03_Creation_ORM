import { IConnectionConfig } from "./types/IDatabaseConnection";
import { MySQLConnection } from "./connection/mysql-connection";
import InsertBuilder from "./queryBuilder/insert";
import SelecttBuilder from "./queryBuilder/select"
import eOperator from "./types/eOperator";
import BaseModele from "./model/BaseModel";
import { create } from "domain";
import User from "./model/models/user";


/*const insert = new InsertBuilder()
    .into('table1')
    .values({id: 1})
    .build();*/

// process.env.PORT

/*const connectionConfig: IConnectionConfig= {
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT ?? '3306', 10),
    user: process.env.USER|| 'root',
    password: process.env.PASSWORD|| 'ABC',
    database: process.env.DATABASE|| 'DB',
}

const connection: MySQLConnection = new MySQLConnection(connectionConfig)
connection.connect()
*/

User.post('user',
    {   username: '"Peter"',
        email: '"fur@hotmail.fr"',
        password: '"hola"'
    }
)