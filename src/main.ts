import SelecttBuilder from "./queryBuilder/select"
import eOperator from "./types/eOperator";


const select = new SelecttBuilder()
    .from('table1')
    .select(['id', 'nb'])
    .where(4, 10, eOperator.Egual)
    .build();

