//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is JobenPogi

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userAuth = false;


app.use(bodyParser.urlencoded ({extended : true}));

function pwdCheck(req, res, next){
    const pwd = req.body["password"];
    if (pwd === "JobenPogi") {
        userAuth = true
    }
    next();
}

app.use(pwdCheck);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) =>{
    if (userAuth === true) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html")
    }
});

app.listen(port , () => {
    console.log(`Running on port${port}`);
})