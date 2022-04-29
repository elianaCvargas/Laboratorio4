export class Login {
    usuario:string = "";
    password:string = "";
    result:number = 0;
    loggear():boolean
    {
        if(this.usuario == "carla" && this.password == "1234")  
        {
            return true;
        }
        
        return false;  
    }
}
