import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig],
})
export class BannerComponent implements OnInit {
  banners:any;
  contador:number;
  banner:any;
  constructor(private servicio:DataService) { }

  ngOnInit() {

      this.banners=  this.servicio.getBanners();
}
           
};

export class NgbdCarouselNavigation {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  wrap= true;


  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = false;
      config.showNavigationIndicators = false;
  }
}
