import express from 'express'

const app = express();

// function checkRoute(req, res, next){
//     console.log("user is acessing : " +req.url+ "page");
//     next();
// }

app.use((req, res, next) => {
    console.log("user is acessing : " +req.url+ " page");
    next();
});

app.get("/",(req, res)=>{
    res.send("Home Page")
})

app.get("/users",(req, res)=>{
    res.send("users Page")
})

app.get("/products",(req, res)=>{
    res.send("products Page")
})



app.listen(5100);