import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clients=[
    {
      title:'New Batch Start From',
    }
   ]

  //  swiperConfig: SwiperOptions = {
  //   spaceBetween: 50,
  //   slidesPerView: 1,
  //   grabCursor: true,
  //   pagination: {
  //     clickable: true
  //   },
  //   on: {
  //     slideChange: () => console.log('slide change')
  //   }
  // };
   
   

}
