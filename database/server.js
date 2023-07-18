import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import multer from 'multer'
import path from 'path'


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('upload'));

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, 'public/image')
    },

    filename: (req, file, cb) =>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
});






   

//mySQL COMMAND//

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "autodeal" 
})


//LOGIN//


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE Username = ? AND Password = ?";
    
    db.query(sql, [req.body.username,
        req.body.password], (err, data) => {
        if (err) return res.json({status: "Error", error: "Error in running query"});
        if (data.length > 0){
            return res.json({status: "Succes"})
        } else{
            return res.json({status: "error", error: "Wrong Username or Password"});
        }

        
    })
})


//Customer Sales DATABASE//

app.get("/products", (req, res) =>{
    const sql = "SELECT * FROM customer";
    db.query(sql, (err, data) => {
        if (err) return res.json("err");
        return res.json(data);
        
    })  
})


app.post('/customercheckout', (req, res) =>{
    const sql = "INSERT INTO customer (`Fullname`, `Email`, `Contact`, `Address`, `Date`, `Brand`, `Model`, `Color`, `Price`, `Quantity`) VALUES (?)";
    console.log(req.body)
    const details = [
        
        req.body.fullname,
        req.body.email,
        req.body.contact,
        req.body.address,
        req.body.date,
        req.body.brand,
        req.body.model,
        req.body.color,
        req.body.price,
        req.body.quantity
       
    ]

    db.query(sql, [details], (err, result) => {
        if (err) return res.json(err)
        return res.json(result);
    })
});


//Stocks DATABASE//
app.get("/Stocks", (req, res) =>{
    const sql = "SELECT * FROM stocks";
    db.query(sql, (err, data) => {
        if (err) return res.json("err");
        return res.json(data);
        
    })  
})

//ADD Stocks DATABASE//

app.post('/addstocks',upload.single('image'), (req, res) => {
    const sql = "INSERT INTO stocks (`Brand`, `Model`, `Color`, `Year`, `Stocks`, `Price`, `Branch`, `Image`) VALUES (?)";
    const values = [
        req.body.brand,
        req.body.model,
        req.body.color,
        req.body.year,
        req.body.stocks,
        req.body.price,
        req.body.branch,
        req.file.filename

    ]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Error upload"});
            return res.json({Status: "Success"});
        })
    } )







//UPDATE Stocks DATABASE//

app.get('/edit/:carID', (req, res) => {
    const sql = "SELECT * FROM stocks WHERE carID = ?";
    const id = req.params.carID;
    db.query(sql,[id], (err, result) => {
        if (err) return res.json({Error: err});
        return res.json(result);
    })
})


app.put('/update/:carID', (req, res) =>{
    const sql = "UPDATE stocks SET `Brand` = ?, `Model` = ?,  `Color` = ?, `Year` = ?, `Stocks` = ?, `Price` = ?, `Branch` = ? WHERE carID = ?";
 
       const id = req.params.carID;

    db.query(sql,[ 
        req.body.brand,
        req.body.model,
        req.body.color,
        req.body.year,
        req.body.stocks,
        req.body.price,
        req.body.branch, id], (err, result) => {
        if (err) return res.json("error");
        return res.json({updated: true});
    })
})




//DELETE Stocks DATABASE//

app.delete('/stocks/:carID', (req, res) =>{
    const sql = "DELETE FROM stocks WHERE carID = ? ";
       const id = req.params.carID;

    db.query(sql,[id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})



//PORT//

const port = 3001

app.listen(port, ()=>{
    console.log("its running", port)
})