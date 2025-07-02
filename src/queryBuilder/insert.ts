import BaseQueryBuilder from './base'


export default class InsertBuilder extends BaseQueryBuilder{
    
    public tableName: string ='';
    private valueData: Record<string, any> = {};

    
    public into(tableName: string):this{
        this.tableName = tableName
        return this.setTable(tableName)
    }

    public values(data :Record<string, any>):this{
        this.valueData = data
        return this
    }

    
    public build():string{
        const columns = Object.keys(this.valueData);
        const formattedValues = Object.values(this.valueData).map(value => this.formateValue(value));
        
        console.log("🚀 ~ :17 ~ insertBuilder ~ build ~ `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${formattedValues.join(', ')})`;:", `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${formattedValues.join(', ')});`)

        return `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${formattedValues.join(', ')});`;
    }
}