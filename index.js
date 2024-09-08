const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models")

db.sequelize.sync()

// routes

app.get("/test", (req, res) => {
    res.json({ message: "App started" });

});

// secured routes

require("./app/routes/user.route")(app)
require("./app/routes/skill.route")(app)
require("./app/routes/pendidikan.route")(app)
require("./app/routes/pengalaman.route")(app)
require("./app/routes/contact.route")(app)
require("./app/routes/admin.route")(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});