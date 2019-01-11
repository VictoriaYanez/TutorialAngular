import { Component, OnInit } from '@angular/core';
import {ApiService} from '../servicio'
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  constructor(private apiservice: ApiService) { }


  ngOnInit() {
  }

  fpago : Date
  nombreForm = new FormControl();
  dated= new FormControl();
  id= new FormControl();
  mensaje:'';
  dias:'';
  datos: any;
  displayedColumnsAhorros = ['Cuenta','Moneda','Cproducto','Dproducto','Estado','Grupo','Outstanding','Siglas',
  'Subsistema','Blocked','Disponible','Accounting']

  consumoRest(){
    console.log('Ingreso')
    this.fpago = new Date(this.dated.value);
    var fdesde = this.fpago.getFullYear()+"-"+(this.fpago.getMonth()+1) +"-"+this.fpago.getDate();
    let parametros = { nombre:this.nombreForm.value, fechaCum:fdesde};
    console.log(parametros);
    this.apiservice.postProvider('/servicioEjemplo','token', 
    parametros).then((data:any)=>{
      console.log(data);
      this.datos=data.array;
      this.mensaje=data.saludo;
      this.dias=data.diasCumple;
    })
  }

  consumoCuenta(){
    console.log('Ingreso Cuenta')
    let parametros = { id:this.id.value};
    console.log(parametros);
    this.apiservice.postProvider('/ServicioCuenta','token', parametros).then((data:any)=>{
      console.log(data);
    })
  }
}
