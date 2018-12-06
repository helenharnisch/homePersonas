import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  landing:any = {};


  constructor( private activatedRoute:ActivatedRoute,
               private dataService:DataService
    ) { 
      this.activatedRoute.params.subscribe( params =>   {
      //console.log( params ['id']);
      this.landing = this.dataService.getLanding( params ['id']);

     

      
});
}


}
