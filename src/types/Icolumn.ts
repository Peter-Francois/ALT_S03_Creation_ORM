import EcolumnType from './eColumn'


export default interface Icolumn{
    type: EcolumnType,
    primaryKey?: Boolean,
    required?: Boolean,
    unique?: Boolean,
    
}