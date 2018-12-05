import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [DataService, NgbCarouselConfig],
})
export class BannerComponent implements OnInit {
  banners:any;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  wrap= true;

  bannersOk:any[] = [];

  constructor(private servicio:DataService, private router: Router,config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
   }

  ngOnInit() {

    this.banners=  this.servicio.getData();

    this.bannersOk = this.banners.filter((e:any) => {
      if(e.tipo === 'banner'){
        return e;
      }
    })

  }



  verLanding( idx:number){
    this.router.navigate( ['/landing', idx] );
    console.log(idx);

  }
   

  }
      