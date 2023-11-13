import { HttpClient } from '@angular/common/http';
import { Component,OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('consent') consent:TemplateRef<any>;
  selfSignup!:FormGroup;
  toppings = new FormControl('',Validators.required);

  toppingList: string[] = ['CSIR-NET', 'GATE', 'IIT JAM', 'UPSC-GSI'];
  ngOnInit():void{
    this.selfSignup = new FormGroup({
      name: new FormControl('', [Validators.pattern('^[a-zA-Z]+(\\s[a-zA-Z]+)*$'), Validators.required]),
      mobileno: new FormControl('', [Validators.pattern('^[6-9]\\d{9}$'), Validators.required]),
      emailId: new FormControl('', [Validators.pattern('^([\\w\\d\\.\\-]+)@([\\w\\d\\-]+)\\.([a-zA-Z]{2,20})(\\.[a-zA-Z]{2,20})?$'), Validators.required]),
    });
  }
  recipientEmail: string = '';
  emailSubject: string = '';
  emailMessage: string = '';

  constructor(private http: HttpClient,
    private service:AppService,
    private _snackBar: MatSnackBar,
    private dialog:MatDialog
    )
    {}

  sendEmail() {
    // const url = 'http://localhost:8000/api/send-email';
    const emailData = {
      mail: this.selfSignup.get('emailId')?.value,
      name: this.selfSignup.get('name')?.value,
      mobile: this.selfSignup.get('mobileno')?.value,
      course:this.toppings.value
    }

    // this.service.postData(emailData)
    //   .subscribe(
    //     (res:any) => {
    //       this.service.openDialog("Email sent successfully",true,'success')
    //       console.log('Email sent successfully',res);
    //     },
    //     error => {
    //       console.error('Error sending email:', error);
    //       this.service.openDialog("Error sending email:",true,'danger')
    //     }
    //   );

    ///// whatsapp chat ////////////

    var url ="https://wa.me/916033207601?text=I am from Ask Geology website User"+"%0a"+
    "Name: "+emailData.name+"%0a"+
    "Mobile: "+emailData.mobile+"%0a"+
    "Email: "+emailData.mail+"%0a"+
    "Course: "+emailData.course+"%0a"
    ;
    alert("Data sent Successfully to Ask Geology Admin");
    // this.service.openDialog("sent successfully",true,"success");
    // this.dialog.open(this.consent)
    window.open(url,'_blank')?.focus();
  }

}
