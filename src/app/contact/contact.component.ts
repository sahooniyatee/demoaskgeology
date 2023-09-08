import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
    ) {}

  sendEmail() {
    // const url = 'http://localhost:8000/api/send-email';
    const emailData = {
      recipient: this.selfSignup.get('emailId')?.value,
      name: this.selfSignup.get('name')?.value,
      mobile: this.selfSignup.get('mobileno')?.value,
      course:this.toppings.value
    }

    this.service.postData(emailData)
      .subscribe(
        (res:any) => {
          this.service.openDialog("Email sent successfully",true,'success')
          console.log('Email sent successfully',res);
          // Optionally, you can reset the form fields here
        },
        error => {
          console.error('Error sending email:', error);
          this.service.openDialog("Error sending email:",true,'danger')
        }
      );
  }

}
