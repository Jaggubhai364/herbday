import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from "path";

const app = express();
const port = 3000;

const viewsPath = path.join(__dirname, 'views');
console.log(`Views directory: ${viewsPath}`);

app.set('view engine','ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:true }));
app.use(express.static("public"));

app.get("/" , (req , res) => {
    res.render("index");
});

app.get("/birthday",(req,res) =>{
    res.render("birthday");
});


app.listen(port, () =>{
    console.log(`port running on localhost:${port}`);
});

// *Vj_$bR7U7?8tiU

