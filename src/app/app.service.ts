import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient,private SnackBar: MatSnackBar) { }
  private dataSubject = new BehaviorSubject<any>(null);

  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }

  postData(data: any){
    return this.http.post(`${this.baseUrl}/api/send-email`, data);
  }


  ////////////// Mat_SnackBar_Implitation ///////////////
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openDialog(message: any, timeBoolean: boolean, className: string = 'mat-primary') {
    let snackConfig: any = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', className],
    }
    let duration = !timeBoolean ? 'Done' : '✖';
    timeBoolean ? snackConfig.duration = 3500 : '';
    this.SnackBar.open(message, duration, snackConfig);
  }
}
