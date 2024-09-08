module.exports = (app) => {

    const pendidikan = require("../controllers/pendidikan.controller")
    let router = require("express").Router() 

    router.post("/create", pendidikan.create)
    router.get("/readall", pendidikan.readAll)
    router.get("/readid/:id", pendidikan.readById)
    router.put("/update/:id", pendidikan.update)
    router.delete("/delete/:id", pendidikan.delete)

    app.use("/api/pendidikan" , router)
  }