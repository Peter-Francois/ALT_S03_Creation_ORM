import BaseQueryBuilder from './base'


export default class InsertBuilder extends BaseQueryBuilder{
    
    public tableName: string ='';
    private data: Record<string, any> = {};

    
    public into(tableName: string):this{
        this.tableName = tableName
        return this.setTable(tableName)
    }

    public values(data :Record<string, any>):this{  //faire un custom type pour remplacer le any
        this.data = data
        return this
    }

    
    public build():string{
        const columns = Object.keys(this.data);
        const formattedValues = Object.values(this.data).map(value => this.formateValue(value));
        
        console.log("🚀 ~ :17 ~ insertBuilder ~ build ~ `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${formattedValues.join(', ')})`;:", `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${formattedValues.join(', ')});`)

        return `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${formattedValues.join(', ')});`;
    }
}