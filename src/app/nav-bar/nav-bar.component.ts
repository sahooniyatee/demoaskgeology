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
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    searchInput.classList.add('active');
  }

  hideSearchInput() {
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    searchInput.classList.remove('active');
  }
  sidenav(){
    this.mat_drawer=!this.mat_drawer;
  }

}
