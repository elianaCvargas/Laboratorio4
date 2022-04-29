import { Usuario } from "./usuario";

export class Login {
    usuario:Usuario;

    loggear():boolean
    {
        if(this.usuario.email == "carla" && this.usuario.password == "1234")  
        {
            alert("loggeado");  
            return true;
        }
        
        alert("No se pudo");
        return false;  
    }

}
