import mysql from 'mysql'

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rest-api-photo-gallery-mern"
});

dbConnection.connect((err) => {
    if (!err) {
        console.log("DB is connected")
    } else {
        console.error(err)
    }
});

export default dbConnection;