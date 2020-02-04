import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "expenseTracker.db";
const database_version = "1.0";
const database_displayName = "Expense Tracker";
const database_size = "200000";

export default class Database{
    initDB(){
        let db;
        return new Promise((resolve)=>{
            console.log("Integrity checking...");
            SQLite.echoTest().then(
                ()=>{
                    console.log("Integrity Checked");
                    console.log("Opening Database...");
                    SQLite.openDatabase(database_name, database_version, database_displayName, database_size).then(
                        DB =>{
                            db = DB;
                            console.log("Database Opened");
                            db.executeSql("SELECT 1 FROM Category LIMIT 1").then(
                                ()=> console.log("Database is ready... waiting for query")
                            ).catch(
                                (error)=> {
                                    console.log("Database is not yet ready");
                                    console.log(error);
                                    db.transaction(tx => {
                                        //CREATING TABLE
                                        tx.executeSql("CREATE TABLE IF NOT EXISTS Category (catId INTEGER PRIMARY KEY AUTOINCREMENT, catName, isExpense)")
                                            .then(
                                                () => console.log("Table created successfully")
                                            ).catch(
                                                (error) => console.log("ERROR: " + error)
                                            )
                                    });
                                    db.transaction(tx =>{
                                        tx.executeSql("CREATE TABLE IF NOT EXISTS Expense (exId INTEGER PRIMARY KEY AUTOINCREMENT, catId, exName, value)")
                                            .then(
                                                () => console.log("Table created successfully")
                                            ).catch(
                                                (error) => console.log("ERROR: " + error)
                                            )
                                    });
                                    db.transaction(tx =>{
                                        tx.executeSql("CREATE TABLE IF NOT EXISTS Income (inId INTEGER PRIMARY KEY AUTOINCREMENT, catId, inName, value)")
                                            .then(
                                                () => console.log("Table created successfully")
                                            ).catch(
                                                (error) => console.log("ERROR: " + error)
                                            )
                                    });
                                    db.transaction(tx =>{
                                        tx.executeSql("CREATE TABLE IF NOT EXISTS Record (recId INTEGER PRIMARY KEY AUTOINCREMENT, itemId, isExpense, timestamp, amount, currentValue)")
                                            .then(
                                                () => console.log("Table created successfully")
                                            ).catch(
                                                (error) => console.log("ERROR: " + error)
                                            )
                                    });
                                    db.transaction(tx =>{
                                        //INSERT CATEGORY DATA
                                        data = [
                                            { name: "Utilities", isExpense: 1},
                                            { name: "General", isExpense: 1},
                                            { name: "Foods", isExpense: 1},
                                            { name: "Others", isExpense: 1},
                                            { name: "Work", isExpense: 0},
                                            { name: "Investment Profit", isExpense: 0},
                                            { name: "Others", isExpense: 0}
                                        ]
                                        data.map(({name, isExpense})=>{
                                            tx.executeSql("INSERT INTO Category(catName, isExpense) VALUES(?, ?)", [name, isExpense])
                                            .then(
                                                () => console.log("Category Data inserted")
                                            ).catch(
                                                (error) => console.log("ERROR: " + error)
                                            )
                                        });
                                    });
                                }
                            );
                            resolve(db);
                        }
                    ).catch(
                        (error)=>{
                            console.log(error);
                        }
                    );
                }
            ).catch(
                (error) => console.log("echoTest Failed")
            );
        });
    }

    listExpenseCategory(){
        return new Promise((resolve)=>{
            const data = [];
            this.initDB().then(db=>{
                db.transaction(tx=>{
                    //TODO: adjust query to match SUM of value for each category
                    tx.executeSql("SELECT catId, catName FROM Category WHERE isExpense = 1").then(([tx, results]) => {
                        console.log("List expense completed");
                        let len = results.rows.length;
                        for(var i = 0; i < results.rows.length; i++){
                            let row = results.rows.item(i);
                            db.transaction(tx=>{
                                tx.executeSql(`SELECT SUM(value) as total FROM Expense WHERE catId = ${row.catId} GROUP BY catId`).then(([tx, results]) => {
                                    if(results.rows.item(0)){
                                        row.total = results.rows.item(0)["total"];
                                    }else{
                                        row.total = 0;
                                    }
                                    data.push(row);
                                    if(data.length == len){
                                        resolve(data);
                                    }
                                }).catch(error => console.log("ERROR: " + error));
                            });
                            
                        }

                    }).catch(
                        error=>console.log("ERROR: "+ error)
                    );
                });
            });
        });
    }
    dropTable(){
        return new Promise((resolve)=>{
            const data = [{ key: "Empty", section: true, label: 'Category' }];
            this.initDB().then(db=>{
                db.transaction(tx=>{
                    tx.executeSql("DELETE FROM Expense").then(() => {
                        console.log("Query completed");
                    });
                });
            });
        });
    }
    testData(){
        return new Promise((resolve)=>{
            const data = [];
            this.initDB().then(db=>{
                db.transaction(tx=>{
                    //TODO: adjust query to match SUM of value for each category
                    tx.executeSql("SELECT catId, catName FROM Category WHERE isExpense = 1").then(([tx, results]) => {
                        console.log("Query completed");
                        for(var i = 0; i < results.rows.length; i++){
                            
                            let row = results.rows.item(i);
                            db.transaction(tx=>{
                                tx.executeSql(`SELECT SUM(value) as total FROM Expense WHERE catId = ${row.catId} GROUP BY catId`).then(([tx, results]) => {
                                    if(results.rows.item(0)){
                                        row.total = results.rows.item(0)["total"];
                                    }else{
                                        row.total = 0;
                                    }
                                    data.push(row);
                                }).catch(error => console.log("ERROR: " + error));
                            });
                        }
                        
                        console.log(data);
                    }).catch(
                        error=>console.log("ERROR: "+ error)
                    );
                });
            });
        });
    }
    insertExpense(){
        //INSERT Expense DATA
        
        return new Promise((resolve)=>{
            this.initDB().then(db=>{
                db.transaction(tx=>{
                    const data = [
                        { name: "Telecommunication Bill", value: "340"},
                        { name: "Internet Bill", value: "300"},
                        { name: "Electrical Bill", value: "180"},
                        { name: "Insurance", value: "1200"}
                    ]
                    data.map(({name, value})=>{
                        tx.executeSql("INSERT INTO Expense(catId, exName, value) VALUES(1, ?, ?)", [name, value])
                        .then(
                            () => console.log("Expense Data inserted")
                        ).catch(
                            (error) => console.log("ERROR: " + error)
                        )
                    });
                });
            });
        });
    }

    listIncomeCategory(){
        return new Promise((resolve)=>{
            const data = [{ key: "Empty", section: true, label: 'Category' }];
            this.initDB().then(db=>{
                db.transaction(tx=>{
                    tx.executeSql("SELECT * FROM Category WHERE isExpense = 0").then(([tx, results]) => {
                        console.log("Query completed");
                        for(var i = 0; i < results.rows.length; i++){
                            let row = results.rows.item(i);
                            console.log(`ID: ${row.catId}, Name: ${row.catName}`);
                            const {catId, catName} = row;
                            data.push({
                                key: catId, label: catName
                            });
                        }
                        console.log(data);
                        resolve(data);
                    }).catch(
                        error=>console.log("ERROR: "+ error)
                    );
                });
            });
        });
    }

    listExpense(catId){

    }

    listIncome(catId){

    }

    closeDB(){
        if(db){
            console.log("Closing database");
            db.close().then(
                status => console.log("Database is closed")
            ).catch(
                error => this.errorCB(error)
            );
        }else{
            console.log("Database is not opened");
        }
    }
}
