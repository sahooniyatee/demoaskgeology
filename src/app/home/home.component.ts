import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('banner') banner!: TemplateRef<any>;
  currentIndex = 0;
  constructor(private dialog:MatDialog){

  }
  ngOnInit(): void {
    // this.banner1()
    this.startSlideshow();
       setTimeout(() => {
      this.dialog.open(BannerComponent,{
        // height:'400px',
        // width:'600px',
        disableClose:true
      })
    }, 3000);
  }

  banner1(){
    this.dialog.open(this.banner,{
      height:'300px',
      width:'600px'
    })
  }
  clients=[
    {
      title:'Ask Geology has been a game-changer for me. The affordability of their courses combined with the in-depth knowledge imparted by the instructors has been invaluable." - John, a geology enthusiast.',
      img:'../../assets/person1.jpg'
    },
    {
      title:"The test series offered by Ask Geology helped me identify my weak areas and gave me the confidence to excel in my entrance exams. Grateful for their meticulous preparation materials. - Sarah, a NET/GATE aspirant.",
      img:'../../assets/person2.PNG'
    },
    {
      title:"Ask Geology deliver comprehensive test series and notes to supplement your learning. Our test series help you assess your knowledge, identify areas of improvement, and refine your exam preparation strategies.",
      img:'../../assets/person3.jpg'
    },
    {
      title:"Ask Geology course modules cover diverse topics including mineralogy, petrology, structural geology, sedimentology, and more. Through interactive lectures, practical demonstrations, and hands-on exercises, our courses facilitate a deep understanding of geology's core principles and their real-world applications.",
      img:'../../assets/person4.jpg'
    }
   ]

   startSlideshow(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.clients.length;
    }, 5000); // Switch to the next slide every 3 seconds (3000 milliseconds)
  }

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
