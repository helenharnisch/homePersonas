import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calugas',
  templateUrl: './calugas.component.html',
  styleUrls: ['./calugas.component.css'],
  providers: [DataService],
})
export class CalugasComponent implements OnInit {
  calugas:any;

  calugasOk:any[] = [];

  constructor(private servicio:DataService,
              private router:Router
    ) {
       

  }

  ngOnInit() {

    this.calugas=  this.servicio.getData();

    this.calugasOk = this.calugas.filter((e:any) => {
      if(e.tipo === 'caluga'){
        return e;
      }
    })

  }


  verLanding( idx:number){
    this.router.navigate( ['/landing', idx] );
    console.log(idx);

  }



}
