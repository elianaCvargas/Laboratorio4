export class Login {
    usuario:string = "";
    password:string = "";
    result:number = 0;
    loggear():boolean
    {
        if(this.usuario == "carla" && this.password == "1234")  
        {
            alert("loggeado");  
            return true;
        }
        
        alert("No se pudo");
        return false;  
    }
}
