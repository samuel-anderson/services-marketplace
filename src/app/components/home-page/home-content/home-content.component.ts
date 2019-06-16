import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  search(){
    alert("clicked search button");
    this.router.navigate(['/grid-list', {params: 'testing'}]);

  }

  searchField(event){
    let searchValue = event.target.value;
    alert(`keydown event: ${searchValue}`);
  }
  
}
