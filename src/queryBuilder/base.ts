import iQueryBuilder from '../types/iQueryBuilder'


export default abstract class BaseQueryBuilder implements iQueryBuilder{

    protected tableName: string = '';
    protected tables: string[] = [];

    protected setTable(tableName: string){
        console.log("🚀 ~ :14 ~ BaseQueryBuilder ~ setTable ~ this.tables:", this.tables)
        if (this.tables.includes(tableName)) return this
        this.tables.push(tableName)
        console.log("🚀 ~ :14 ~ BaseQueryBuilder ~ setTable ~ this.tables:", this.tables)
        return this
    };
        
    
    protected formateValue(value: any): string{
        return `'${value}'`
    }

    abstract build(): string;

    


}