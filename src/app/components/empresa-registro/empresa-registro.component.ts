import { Component, OnInit } from '@angular/core';
import { MyRestService } from '../services/my-rest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Popover } from "bootstrap";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-registro',
  templateUrl: './empresa-registro.component.html',
  styleUrls: ['./empresa-registro.component.scss']
})
export class EmpresaRegistroComponent implements OnInit {

  ListaDepartamento_input: any;
  listPais: any;
  listaDep: any;
  listDistrito: any;
  listaSector: any;
  listaCantTrabajadores: any;

  showDistritos: boolean = false;

  registroGroup: FormGroup;


  selectedValue: any = 2;
  fieldTextType: boolean = false;

  initFormGroup(){
    // return new FormGroup({
    //   nombre: new FormControl(''),
    //   telefono: new FormControl('')
    // })

    //usando formbuilder
    return this.fb.group({
      nombre: [ '', [Validators.required] ],
      telefono: [ '', [Validators.required] ],
      email: [ '', [Validators.required] ],
      contrasena: [ '', [Validators.required, Validators.minLength(4), Validators.maxLength(50)] ],
      nombre_comercial: [ '', [Validators.required] ],
      razon_social: [ '', [Validators.required] ],

      direccion: [ '', [Validators.required] ],
      sector: [ '', [Validators.required] ],
      cant_trabajadores: [ '', [Validators.required] ],
      descripcion: [ '', [Validators.required, Validators.maxLength(2000)] ],
      ruc: [ '', [Validators.required] ],
      pais_input: [ 1, [Validators.required] ],
      departamento: [ '', [Validators.required] ],
      distrito: [ '', [Validators.required] ]
    })
  }

  constructor(
    private myRestApiService: MyRestService,
    private fb: FormBuilder,
    private router: Router

  ) {
    this.registroGroup = this.initFormGroup();
   }

   get f(){
    return this.registroGroup.controls;
  }
  
  onPaisChange(data: any) {
    this.listaDep = [];
    this.listDistrito = [];

    this.myRestApiService.ObtenerDepartamentoList(data.value).subscribe(
      response => {
        if(response.exito){
          this.listaDep = response.lista;
        }
    });
  }

  onDepChange(data: any) {
    this.myRestApiService.ObtenerDistritoList(data.value).subscribe(
      response => {
        if(response.exito){
          this.listDistrito = response.lista;
          this.showDistritos = true;
        }
    });
  }

  ngOnInit(): void {

    var list = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );

    list.map(function (el: Element) {
      return Popover.getOrCreateInstance(el);
    });

    this.myRestApiService.ObtenerPaisList().subscribe(
      response => {
        if(response.exito){
          this.listPais = response.lista;

          //llamando servicio departamento
          this.myRestApiService.ObtenerDepartamentoList(1).subscribe(
            response => {
              if(response.exito){
                this.listaDep = response.lista;

                //llamando servicio distrito
                this.myRestApiService.ObtenerDistritoList(1).subscribe(
                  response => {
                    if(response.exito){
                      this.listDistrito = response.lista;
                    }
                });
              }
          });
        }
    });

    this.myRestApiService.ObtenerSectorList().subscribe(
      response => {
        if(response.exito){
          this.listaSector = response.lista;
        }
    });

    this.myRestApiService.ObtenerCantTrabajadoresList().subscribe(
      response => {
        if(response.exito){
          this.listaCantTrabajadores = response.lista;
        }
    });

    
  }

  showPassword(){
    this.fieldTextType = !this.fieldTextType;
  }

  onResetForm(){
    this.registroGroup.reset();
  }

  registrarEmpresa(){
    if (!this.registroGroup.valid) {
      console.log("es invalido :c");
      this.registroGroup.markAllAsTouched();
      return;
    }else{
      console.log("valido c:");

      const data = {
        nombres : this.registroGroup.controls.nombre.value,
        apellidos : this.registroGroup.controls.nombre.value,
        telefono : this.registroGroup.controls.telefono.value,
        email : this.registroGroup.controls.email.value,
        clave : this.registroGroup.controls.contrasena.value,
        nombreComercial : this.registroGroup.controls.nombre_comercial.value,
        razonSocial : this.registroGroup.controls.razon_social.value,
        idPais : parseInt(this.registroGroup.controls.pais_input.value),
        ruc : this.registroGroup.controls.ruc.value,
        idDepartamento : parseInt(this.registroGroup.controls.departamento.value),
        idDistrito : parseInt(this.registroGroup.controls.distrito.value),
        direccion : this.registroGroup.controls.direccion.value,
        idSector : parseInt(this.registroGroup.controls.sector.value),
        idCantidadTrabajador : parseInt(this.registroGroup.controls.cant_trabajadores.value),
        descripcion : this.registroGroup.controls.descripcion.value
      }

      //console.log("enviando...✅", data);

      this.myRestApiService.EmpresaIns(data).subscribe(
        response => {
          console.log("respuesta registro...✅", response);
          if(response.exito){
            this.router.navigate(['/dashboard-configuration-empresa']);
          }
          
      });

    }
    //console.log("guardado...", this.registroGroup.value);
  }



}
