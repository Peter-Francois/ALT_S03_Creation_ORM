import ImodelDefinition from "../../types/ImodelDefinition";
import BaseModele from "../BaseModel";



export default class User extends BaseModele implements ImodelDefinition{

    tableName: string= '';
    columns: Record<string, any> = {};

    static post(tableName: string, data:Record<string, any>):void{
        this.columns = data;
        super.tableName= tableName;
        super.create(data);
    }

}