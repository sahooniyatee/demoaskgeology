import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  openbar:boolean=false;
  divOpen:any;
  divValue:number = 0
  // ngOninIt(){
  //   this.divValue=0;
  // }
  openPara(){
    this.openbar = ! this.openbar;
    console.log(this.openbar);
    
  }
}


