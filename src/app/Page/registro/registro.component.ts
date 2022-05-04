import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password:string;
  mensaje:string;
  nombre:string;
  apellido:string;
  registroOk: boolean = false;
  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  registrar()
  {

      this.registroService.registroPost(this.email, this.password).then(data => {
        var result = data;
        this.registroOk =  true;
      }).catch(err => {
        console.log(err);
      });
  }



}
