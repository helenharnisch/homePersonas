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

  wrap= true;
  
  tabsOk:any[] = [];


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


