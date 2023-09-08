import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-demo-classes',
  templateUrl: './demo-classes.component.html',
  styleUrls: ['./demo-classes.component.scss'],
})
export class DemoClassesComponent {
  @Input() videoId: string | undefined;
  @Input() videoname: string | undefined;
  videoUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];


  imageObject = [
    {
      video: 'https://www.youtube.com/watch?v=wWfMZs-8lwQ&t=5s',
      title: '01- Timescale and Cross reference',
    },
    {
      video: 'https://www.youtube.com/watch?v=oC33ZCcp1sY',
      title: '02- Atmosphere',
    },
    {
      video: 'whttps://www.youtube.com/watch?v=Qc1Euw6nwY',
      title: '03- Remote Sensing',
    },
    {
      video: 'https://www.youtube.com/watch?v=VS2lAAn-JG8',
      title: '04- Crystallography and Minerology',
    },
    {
      video: 'https://www.youtube.com/watch?v=emJ6_g_-ze8',
      title: '05- Igneous Phase Rule (Binary)',
    },
    {
      video: 'https://www.youtube.com/watch?v=drydR5oMpl8',
      title: '06- Rock Cycle Introduction',
    },
    {
      video: 'https://www.youtube.com/watch?v=dM5d08O7jVo&t=8s',
      title: '07- Introduction to Metamorphism',
    },
    {
      video: 'https://www.youtube.com/watch?v=uymeFAa5Xt4',
      title: '08- Keplers Law of Planetary Motion',
    },
    {
      video: 'https://www.youtube.com/watch?v=sTvDogBLm5g&t=10s',
      title: '09- Internal Structure of the Earth',
    },
  ];

  currentIndex = 0;
  images!: HTMLImageElement[];
  carouselItems: any;
  prevBtn: any;
  nextBtn: any;
  //  ngOnInit() {
  //    this.carouselItems = document.querySelector('.carousel-items');
  //    this.prevBtn = document.getElementById('prevBtn');
  //    this.nextBtn = document.getElementById('nextBtn');
  //    this.images = Array.from(this.carouselItems.getElementsByTagName('a'));

  //    const showImage = (index: number) => {
  //      this.carouselItems.style.transform = `translateX(-${index * 100}%)`;
  //    };

  //    const prevImage = () => {
  //      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  //      showImage(this.currentIndex);
  //    };

  //    const nextImage = () => {
  //      this.currentIndex = (this.currentIndex + 1) % this.images.length;
  //      showImage(this.currentIndex);
  //    };

  //    this.prevBtn.addEventListener('click', prevImage);
  //    this.nextBtn.addEventListener('click', nextImage);
  //  }
  currentSlideIndex = 0;

  // ngOnInit(): void {
  //   this.showSlide(this.currentSlideIndex);
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 3000);
  // }

  // showSlide(index: number): void {
  //   const slideElements = document.getElementsByClassName('slide');
  //   for (let i = 0; i < slideElements.length; i++) {
  //     slideElements[i].classList.remove('active');
  //   }
  //   slideElements[index].classList.add('active');
  // }

  // nextSlide(): void {
  //   this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  //   this.showSlide(this.currentSlideIndex);
  // }

  // previousSlide(): void {
  //   this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  //   this.showSlide(this.currentSlideIndex);
  // }
}
