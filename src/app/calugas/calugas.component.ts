import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calugas',
  templateUrl: './calugas.component.html',
  styleUrls: ['./calugas.component.css'],
  providers: [DataService],
})
export class CalugasComponent implements OnInit {
  calugas:any;

  constructor(private servicio:DataService) {
       

  }

  ngOnInit() {

    this.calugas = this.servicio.getCalugas();

    console.log(this.calugas);
  }


 


//   if(aparecer){
//     aparecer=== true;
//   }

//   items=[
//     "enero",
//     "febrero",
//     "marzo",
//     "abril",

// ]

}
