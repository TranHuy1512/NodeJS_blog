const mysql = require('mysql');
async function connect(){
    try {
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'DULIEU'
        });
        await con.connect(function (err,) {
            if (err) err;
            console.log("Connection Successfull");
        });
    } catch (error) {
        console.log("Connect failue!!!")
    }
}
module.exports = { connect };
