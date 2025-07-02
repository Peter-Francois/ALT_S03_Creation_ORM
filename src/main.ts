import InsertBuilder from "./queryBuilder/insert"

const insert = new InsertBuilder()
    .into('table1')
    .values({'id': 1})
    .build();
