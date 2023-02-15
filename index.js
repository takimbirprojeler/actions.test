

const { connect, PasswordAuthenticator } = require("couchbase")


    ; (async () => {
        
        const cluster = await connect("couchbase://127.0.0.1:8091", new PasswordAuthenticator("administrator", "administrator"))
 

        console.log("cluster" ,cluster)
    })() 