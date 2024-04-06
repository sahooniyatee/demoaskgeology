import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthComponent } from './auth/auth.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  admin: boolean;
  roleType:any=sessionStorage.getItem('roleType');;
  user: boolean=true;
  constructor(private router: Router,public dialog: MatDialog,private service:AppService) { }
  @ViewChild('sidenav') sidenav!: MatSidenav;
  clickHandler() {
    this.sidenav.close();
  }
  ngOnInit(){
    
    console.log("blog");
   this.checkRegisterInfo();
  }
  checkRegisterInfo(){
    console.log("blog enter");
    if(sessionStorage.getItem('roleType')){
      console.log("enter2");
      
      if(this.roleType === 'USER'){
        console.log("enter3");
        
        this.admin=false;
        this.user=true;
      }else if(this.roleType === 'ADMIN'){
        console.log("admin log");
        
        this.admin=true;
        this.user=false;
      }
    }
    else{
      console.log("register not done");
      
      setTimeout(() => {
        console.log("blogauth");
        // this.router.navigate(['blog/auth']);
        this.dialog.open(AuthComponent,{
          disableClose:true
        })
       
      }, 3000);
    }
    // this.service.registrationStatus.subscribe((res:any)=>{
    //   console.log(res,"blogres");
      
    //   if(res == 'registerDone'){
    //     console.log("register done");
    //     this.admin=false;
        
    //   }
    // })
  }
}
