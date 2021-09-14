const customExpress = require("./config/customExpress");

try {
    const app  = customExpress();
    app.listen(1337, ()=> console.log("sv port 1337 ok"));
} catch (e) {
    console.log(e)
}


/*
    Acesso pelo front-end:
    URL base: http://localhost:1337

    Rotas:
    Get: "/cars"
    Post: "/cars"
    Patch: "/cars/:id"
    Delete: "/cars/:id"

*/