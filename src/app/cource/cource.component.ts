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
      name:'GATE NET GSI ',
      price:9999,
      course:'NET (Dec-2024), GATE, GSI Prelims 2025',
      description:'Prepare for the CSIR-NET exam with our comprehensive courses designed specifically for aspiring candidates like you. Our expert-developed curriculum covers all the key subjects and provides in-depth study material, practice questions....................',
      img:'../../assets/csir_img.webp'
    },
    {
      id:"2",
      name:'GATE NET',
      price:8499,
      course:'NET (Dec-2024), GATE 2025',
      description:'Join our community of motivated learners, access our top-quality resources, and pave your path to success in the GATE exam, opening doors to exciting postgraduate opportunities and promising career prospects. Start your GATE journey with us ..................',
      img:'../../assets/gate_img.webp'
    },
    {
      id:"3",
      name:'IIT-JAM',
      price:7500,
      course:'IIT-JAM/BHU/DU 2024-25',
      description:'The IIT-JAM (Joint Admission Test for M.Sc.) is a national-level entrance examination conducted by the Indian Institutes of Technology (IITs) for admission to various postgraduate programs in Science. It serves as a gateway for aspiring students to pursue Masters  ..........',
      img:'../../assets/iitjam.png'
    },
    {
      id:"4",
      name:'TEST SERIES',
      price:9000,
      course:'Get The Competitive Edege with our Geology Prep Course',
      img:'../../assets/upsc.jpg'
    },
  ]
  knowmore(e:any){
    const dialogRef= this.dialog.open(KnowmorwContentComponent,{
      height:'450px',
      width:'800px'
    });
    console.log(dialogRef);
    this.service.sendData({itemId:e});


  }

}
