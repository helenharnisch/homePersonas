import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [DataService,NgbCarouselConfig],
})
export class TabsComponent implements OnInit {

  tabs:any;

  soloelcero:number = 0;

  wrap= true;
  
  tabsOk:any[] = [];

  categorias:string[] = [
    'WORK/CAFÉ SANTANDER',
    'APPLE',
    'SANTANDER WEEK',
    'SANTANDER LIFE',
    'EDUCACIÓN',
    'EDUCACIÓN'
  ]


  constructor(private servicio:DataService, private router:Router) {
       

  }

  ngOnInit() {

    this.tabs=  this.servicio.getData();

    this.tabsOk = this.tabs.filter((e:any) => {
      if(e.tipo === 'tab'){
        return e;
      }
    })

    }


  verLanding( idx:number){
    this.router.navigate( ['/landing', idx] );
    console.log(idx);

  }
  

  active(i){
    if(i == 0){
      return {'active':true}
    }
  }

  
    
};



export class NgbdCarouselNavigation {
  showNavigationArrows = false;
  showNavigationIndicators = true;
  wrap= true;


  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = false;
      config.showNavigationIndicators = true;
  }
}


