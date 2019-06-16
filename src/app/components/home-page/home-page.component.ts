import { Component, OnInit } from '@angular/core';
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
  login(){
    alert("clicked login button");
  }
  signup(){
    alert("clicked signup button");
  }

}

export const headerComponents = [HomeContentComponent,HomeFooterComponent]
