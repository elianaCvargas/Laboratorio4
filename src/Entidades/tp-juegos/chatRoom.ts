import { Timestamp } from "rxjs";
import { Usuario } from "./usuario";

export class ChatRoom {
    codigoConversacion: String;
    usuarioSender: Usuario;
    usuarioReceiver: Usuario;
    fecha: string;
    mensajeEnvio: string;

}