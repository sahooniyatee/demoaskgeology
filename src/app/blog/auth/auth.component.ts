import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {allApis} from '../../auth.api';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  @ViewChild('loginPopup') loginPopup: TemplateRef<any>;
  login: FormGroup;
  registerForm:FormGroup;
  cardName:string="loginPage";
  showpass: boolean=true;
  passwordType: string='password';
  registerUrl: string;
  loginUrl: string;
  tokendata: any;
  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private notifi:AppService,
    private loader:NgxUiLoaderService,
    private router:Router
    ) {}
  ngOnInit(): void {
    console.log("auth blog");
    this.router.navigate(['blog/auth'])
    this.login = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(4),
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$'
        ),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+@\S+\.\S+$/),
      ]),
    });
    this.registerForm = new FormGroup({
      name:new FormControl('',[
        Validators.required
      ]),
      number:new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(4),
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$'
        ),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+@\S+\.\S+$/),
      ]),
    });
  }
  loginUser(){
    this.loader.start();
    this.loginUrl=allApis.url.login;
    const req_body={
      email:this.login.get('email')?.value,
      password:this.login.get('password')?.value
    }
    if(allApis.url.login){
      console.log("enter");
      
      this.http.post(this.loginUrl,req_body).subscribe((res:any)=>{
        
          this.notifi.openDialog(res.message,true,'success');
          
          console.log(res,"register respoonse");
          if(this.login.valid && res.status == 0){
            this.login.reset();
            this.dialog.closeAll();
            this.tokendata =jwtDecode(res.token);
            console.log(this.tokendata.roleType);
            
            sessionStorage.setItem('roleType',this.tokendata.roleType)
            this.router.navigate(['/blog']);
          }
    
          this.loader.stop();
      },(err:any)=>{
        this.loader.stop();
        console.log(err.error.message);
        if(err.error.status == -1){
          this.cardName='loginPage'
        }
        this.notifi.openDialog(err.error.message,false,'danger');
      }
      )
    }
    // console.log("fghjkl",this.subUser);
    
  }
  RegisterUser(){
    this.loader.start();
    console.log(allApis.url.register);
    this.registerUrl=allApis.url.register;
    const req_body={
      name:this.registerForm.get('name')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value,
      mobile:this.registerForm.get('number')?.value,
    }
    if(allApis.url.register){
      console.log("enter");
      
      this.http.post(this.registerUrl,req_body).subscribe((res:any)=>{
        this.loader.stop();
          this.notifi.openDialog(res.message,true,'success');
          
          console.log(res,"register respoonse");
          if(this.registerForm.valid){
            this.registerForm.reset();
          }
          if(res.data.roleType == 'USER'){
            console.log("behavioursubject hit");
            sessionStorage.setItem('roleType',res.data.roleType);
            this.notifi.registrationStatus.next('registerDone');
            this.dialog.closeAll();
            this.router.navigate(['/blog'])
          }else{
            sessionStorage.setItem('roleType',res.data.roleType);
            this.cardName='loginPage';
          }
      },(err:any)=>{
        this.loader.stop();
        console.log(err.error.message);
        if(err.error.status == -1){
          this.cardName='loginPage'
        }
        this.notifi.openDialog(err.error.message,false,'danger');
      }
      )
    }
    
  }
 async register(){
    console.log("dfgh");
    this.cardName="registerPage"
    // if(location.href.includes('register')){
    //   this.dialog.open(RegisterComponent,{
    //     disableClose:true
    //    });
    // }
  }
  async loginCard(){
    console.log("dfgh");
    this.cardName="loginPage"
    // if(location.href.includes('register')){
    //   this.dialog.open(RegisterComponent,{
    //     disableClose:true
    //    });
    // }
  }

  changePassType(type: string) {
    if (type === 'password') {
      this.showpass = !this.showpass;
      this.showpass
        ? (this.passwordType = 'password')
        : (this.passwordType = 'text');
    }
  }
  closebtn(){console.log("close");
  
    this.dialog.closeAll()
  }
}
