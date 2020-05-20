const fs = require('fs')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Tour = require('../../models/tourModel')
dotenv.config({ path: "./config.env" });


//conect to database
const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASWORD
);
mongoose
    .connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Sa conectat la Database Wai");
    });

//Read file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

//Import data function
const importdata = async () => {
    try {
        await Tour.create(tours)
        console.log('Data a fost loaded cu success');

    }
    catch (err) {
        console.log(err)
    }
    process.exit()
}

//Delete all data from Database

const deleteData = async () => {

    try {
        await Tour.deleteMany()
        console.log('Data a fost stearsa');

    }
    catch (err) {
        console.log(err)
    }
    process.exit()
}

if (process.argv[2] === "--import") {
    importdata()
} else if (process.argv[2] === "--delete") {
    deleteData()
}


console.log(process.argv);
