const fs = require("fs");
const environment = process.env.NODE_ENV || 'dev';
const configValue = JSON.parse(fs.readFileSync(`./config/${environment}.json`, 'utf-8'));
exports.config = configValue;