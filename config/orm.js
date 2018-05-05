const connection = require("./connection")

const queryDB=(statement, options)=>{
    return new Promise((resolve, reject)=>{
      connection.query(statement, options,(err, queryResults)=>{
        if(err)reject(err)
        resolve(queryResults)
      })
    })
}

module.exports={
    selectAll:(tableName)=>{
      const statement=`select * from ??`;
      const options = [tableName];
      return queryDB(statement, options)
},
    updateOne:()=>"",
    insertOne:()=>""
}