import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  clickHandler() {
    this.sidenav.close();
  }

}
