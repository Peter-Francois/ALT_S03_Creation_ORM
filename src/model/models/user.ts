import ImodelDefinition from "../../types/ImodelDefinition";
import BaseModele from "../BaseModel";



export default class User extends BaseModele implements ImodelDefinition{

    tableName: string= '';
    columns: Record<string, any> = {};

    static post( data:Record<string, any>):void{
        this.columns = data;
        this.tableName = "user"
        super.tableName= this.tableName;
        super.create(data);
    }

}