//INPORT
import  express  from "express";

//CREATE APP
const app=express();

//app.use();
const port =3001;

app.listen(port, function(){
    console.log(`Server is running via port ${port}`);
})
