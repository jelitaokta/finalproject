module.exports = (app) => {

    const skill = require("../controllers/skill.controller")
    let router = require("express").Router() 

    router.post("/create", skill.create)
    router.get("/readall", skill.readAll)
    router.get("/readid/:id", skill.readById)
    router.put("/update/:id", skill.update)
    router.delete("/delete/:id", skill.delete)

    app.use("/api/skill" , router)
  }