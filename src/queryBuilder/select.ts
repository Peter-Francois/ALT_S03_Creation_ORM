import BaseQueryBuilder from './base'
import eOperator from '../types/eOperator'


export default class SelecttBuilder extends BaseQueryBuilder{
    
    public tableName: string ='';
    public columns: string[]= [];
    public filter: string = '';
    public is_all_columns_requested: boolean = true

    
    public from(tableName: string):this{
        this.tableName = tableName
        return this
    }

    public select(columns: string[]):this{
        this.columns = columns
        if(columns[0] == '*') return this
        if (columns.length >= 1) this.is_all_columns_requested = false;
        return this
    }
    public where(arg1: any, arg2: any, operator: eOperator): this{

        let result: string =  `${arg1} ${operator} ${arg2}`;

        this.filter = result;

        return this

    }

    
    public build():string{



        console.log("🚀 ~ :42 ~ SelecttBuilder ~ build ~ `SELECT ${this.columns.join(', ')} FROM ${this.tableName} WHERE ${this.filter}`:", `SELECT ${this.columns.join(', ')} FROM ${this.tableName} WHERE ${this.filter};`)
        
        return `SELECT ${this.columns.join(', ')} FROM ${this.tableName} WHERE ${this.filter};`;
    }
}