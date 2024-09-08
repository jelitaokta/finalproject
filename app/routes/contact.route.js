module.exports = (app) => {

    const contact = require("../controllers/contact.controller")
    let router = require("express").Router() 

    router.post("/create", contact.create)
    router.get("/readall", contact.readAll)
    router.get("/readid/:id", contact.readById)
    router.put("/update/:id", contact.update)
    router.delete("/delete/:id", contact.delete)

    app.use("/api/contact" , router)
  }