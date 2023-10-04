import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  search:boolean=false;
  mat_drawer:boolean=false;
  showSearchInput() {
    this.search=!this.search;
    console.log(this.search,"search");
  }
  sidenav(){
    this.mat_drawer=!this.mat_drawer;
  }

  scrollToTop() {
    console.log('clicked');
    
    window.scrollTo(0,3488 - 72)
  }

}
