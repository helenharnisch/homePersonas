import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [NgbCarouselConfig],
})
export class TabsComponent implements OnInit {

  tabs:any;


  constructor(private servicio:DataService) {
       

  }

  ngOnInit() {

    this.tabs = this.servicio.getTabs();

    console.log(this.tabs);

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


