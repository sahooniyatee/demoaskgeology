import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { KnowmorwContentComponent } from './knowmorw-content/knowmorw-content.component';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss']
})
export class CourceComponent {
  constructor(private service:AppService,private dialog:MatDialog){

  }
  courseArray=[
    {
      id:"1",
      name:'CSIR-NET',
      price:7500,
      course:'NET:- National Eligibility Test',
      description:'Prepare for the CSIR-NET exam with our comprehensive courses designed specifically for aspiring candidates like you. Our expert-developed curriculum covers all the key subjects and provides in-depth study material, practice questions....................',
      img:'../../assets/csir_img.webp'
    },
    {
      id:"2",
      name:'GATE',
      price:6500,
      course:'GATE: Graduate Aptitude Test in Engineering',
      description:'Join our community of motivated learners, access our top-quality resources, and pave your path to success in the GATE exam, opening doors to exciting postgraduate opportunities and promising career prospects. Start your GATE journey with us ..................',
      img:'../../assets/gate_img.webp'
    },
    {
      id:"3",
      name:'UPSC-GSI',
      price:9000,
      course:'UPSC/GSI: Union Public Service Commission/Geological Survey of India',
      description:'The GSI is a renowned government organization responsible for geological mapping, mineral exploration, and research across the country. By successfully clearing the UPSC-GSI examination, candidates can secure prestigious roles such as ............',
      img:'../../assets/upsc.jpg'
    },
    {
      id:"4",
      name:'IIT-JAM',
      price:5500,
      course:'IIT-JAM: Joint Admission Test',
      description:'The IIT-JAM (Joint Admission Test for M.Sc.) is a national-level entrance examination conducted by the Indian Institutes of Technology (IITs) for admission to various postgraduate programs in Science. It serves as a gateway for aspiring students to pursue Masters  ..........',
      img:'../../assets/iitjam.png'
    }
  ]
  knowmore(e:any){
    const dialogRef= this.dialog.open(KnowmorwContentComponent);
    console.log(dialogRef);
    this.service.sendData({itemId:e});
    
    
  }

}
