const express = require("express");
const envConfig = require("./config/configResolver");
const app = express();
const port = envConfig.config.port || 8080

app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})