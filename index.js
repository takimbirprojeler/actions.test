

const { connect, PasswordAuthenticator } = require("couchbase")


    ; (async () => {
        
        const cluster = await connect("couchbase://localhost", new PasswordAuthenticator("administrator", "administrator"))
 

        console.log("cluster" ,cluster)
    })()  