import { Component, OnInit } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const headerComponents = [HomeHeaderComponent,HomeContentComponent,HomeFooterComponent]
