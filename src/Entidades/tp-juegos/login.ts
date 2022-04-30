import { Usuario } from "./usuario";

export class Login {
    email:string;
    password:string;
    fecha:string;

    loggear():boolean
    {
        if(this.email == "carla" && this.password == "1234")  
        {
            return true;
        }
        
        return false;  
    }

}
