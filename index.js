

const { connect, PasswordAuthenticator } = require("couchbase")


    ; (async () => {
        
       try {
         const cluster = await connect("couchbase://localhost", new PasswordAuthenticator("administrator", "administrator"))
       } catch (error) {
            console.log("error")
       }
 

      
    })()  