const Decimal = require("../break_eternity.js")
const fs = require('fs');
var data = require('./gamedata.json')
const path = require('path');
const Discord = require('discord.js');
function save() {fs.writeFileSync(path.resolve(__dirname, './gamedata.json'), JSON.stringify(data, null, "\t"))}