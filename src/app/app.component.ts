import { Component } from '@angular/core';
import { Login } from 'src/Entidades/login';
import { Suma } from 'src/Entidades/suma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  miTipo = 'text';
  // numero1:number = 0;
  // numero2:number = 0;
  // result:number = 0;
  miSuma:Suma;
  miLogin:Login;

  constructor(){
    this.miSuma = new Suma();
    this.miLogin = new Login();

  }

mostrarAlert()
{
  this.title = "title changed";
}

// sumar()
// {
//   this.result = this.numero1 + this.numero2;
//   return this.result;
// }

}

