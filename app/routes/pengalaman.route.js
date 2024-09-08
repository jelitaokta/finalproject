module.exports = (app) => {

    const pengalaman = require("../controllers/pengalaman.controller")
    let router = require("express").Router() 

    router.post("/create", pengalaman.create)
    router.get("/readall", pengalaman.readAll)
    router.get("/readid/:id", pengalaman.readById)
    router.put("/update/:id", pengalaman.update)
    router.delete("/delete/:id", pengalaman.delete)

    app.use("/api/pengalaman" , router)
  }