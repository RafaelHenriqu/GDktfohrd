const App = require("express")()

function Start(Port=5000){

    if (Port > 65536 || Port < 0){
        console.log("Sorry, the port only supports numbers above 0 and below 65536")
        return;
    }else{
        App.listen(Port,()=>{
            console.log(`Server Started on Port: ${Port}`)
        })
    }
}

function Create_Page(Type="get",Path="/Home",Send=["Infos"]){
    if (Type == "get"){
        App.get(Path,(req,res)=>{
            res.send(Send)
        })
    }

    if (Type != "get"){
        console.log("Sorry currently we only have Get mode.")
        return;
    }

}



module.exports = {
    Start,
    Create_Page
    
}