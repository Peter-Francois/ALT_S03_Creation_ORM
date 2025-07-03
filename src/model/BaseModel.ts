import { MySQLConnection } from '../connection/mysql-connection';
import InsertBuilder from '../queryBuilder/insert';
import { IConnectionConfig } from '../types/IDatabaseConnection';
import Imodel from '../types/Imodel'
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export default abstract class BaseModele implements Imodel{
    static tableName: string = 'table1';
    static columns: Record<string, any> = {};
    static connection: MySQLConnection;

    static getConnection(){
        const connectionConfig: IConnectionConfig= {
            host: process.env.HOST || 'localhost',
            port: parseInt(process.env.PORT ?? '3306', 10),
            user: process.env.USER|| 'root',
            password: process.env.PASSWORD|| 'ABC',
            database: process.env.DATABASE|| 'DB',
        }
        this.connection= new MySQLConnection(connectionConfig)
        this.connection.connect()
        return this
    }

    static execute<T>(query: string, params: any[] =[]): Promise<T> {
        return this.connection.execute(query, params)
    }

    static async create<T>(data: Partial<T>): Promise<T>{
        const query = new InsertBuilder()
            .into(this.tableName)
            .values(data)
            .build();

        return await this.getConnection().execute<T>(query, []);
    }

    /*
    
    static select():Promise<T>{

    }

    update(): Promise<T>{

    }

    save(): Promise<any>{
        
    };

    delete(): Promise<any>{

    };

    refresh(): Promise<any>{

    };
    
    */
}
