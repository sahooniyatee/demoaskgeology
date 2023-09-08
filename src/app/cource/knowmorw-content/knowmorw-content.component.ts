import { Component,OnInit  } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-knowmorw-content',
  templateUrl: './knowmorw-content.component.html',
  styleUrls: ['./knowmorw-content.component.scss']
})
export class KnowmorwContentComponent {
  itemId: any;
  constructor(private service:AppService){}
  ngOnInit(){
    this.service.getData().subscribe((data:any)=>{
      this.itemId=data.itemId;
      console.log("Data", this.itemId);
    });
  }

}
