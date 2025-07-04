import { MySQLConnection } from '../connection/mysql-connection';
import InsertBuilder from '../queryBuilder/insert';
import { IConnectionConfig, IDatabaseConnection } from '../types/IDatabaseConnection';
import Imodel from '../types/Imodel'


export default abstract class BaseModele implements Imodel{
    static tableName: string = '';
    static columns: Record<string, any> = {};
    static connection: MySQLConnection;

    static getConnection(){
        return this
    }

    static setConnection(connection: IDatabaseConnection, connectionConfig: IConnectionConfig): void{
        connection = new MySQLConnection(connectionConfig);
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
