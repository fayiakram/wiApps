const express = require("express");
const router = require("./routers/router");
const path = require("path");
const app = express();
const port = 3000;




app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);


app.listen(port, () => {
    console.log(`Server Listen on Port ${port}`);
});