const express = require("express");
const envConfig = require("./config/configResolver");
const registrationRoutes = require("./routers/registration");
const sequelize = require("./util/database");
const port = envConfig.config.port || 8080
const router = express.Router();

const app = express();
app.use(express.json());

app.use('/api/register', registrationRoutes);

sequelize
    .sync()
    .then( result => {
        app.listen(port, () => {
            console.log(`Server Started at port ${port}`);
        });
    })
    .catch( error => console.log(error + " GFSFGF")
    );