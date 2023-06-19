import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  constructor(
    public router: Router, 
  ) { }

  ngOnInit(): void {
  }

  irHome(){
    this.router.navigate(['/'])
  }

  irempresaRegistro(){
    this.router.navigate(['/empresa-registro'])
  }

}
