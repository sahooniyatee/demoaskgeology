import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  showComponent: boolean=false;
  ngOnInit(): void {
    console.log("hi i m admin page")
  }
  addPost(){
    this.showComponent=true;
  }

}
