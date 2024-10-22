const Mysql = require("mysql2")

function CreateConnection(Host="localhost",Port=3306,User="root",Password="123456",Database="Users"){

    const Connect = Mysql.createConnection({
        host:Host,
        port:Port,
        user:User,
        password:Password,
        database:Database
    })
    Connect.connect(err=>{
        if (err){console.log("Something went wrong")}
    })
    return Connect
}

function Query(Connection,MySql_Command,Type="Insert"){
    switch(Type){
        case "Insert":
            return Connection.query(MySql_Command)    
        case "Select":
            const Items = Connection.query(MySql_Command,function(err,results,fields){
                return results
            })
            return Items._rows
        break
        default:
            console.log("We only accept the Insert and Select types")
        

        }
}

module.exports ={
    CreateConnection,
    Query
}