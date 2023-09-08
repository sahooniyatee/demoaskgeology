import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  NameFormControl = new FormControl('', [Validators.required,]);
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log("file",file);
    
    // Perform additional operations with the selected file
  }
}
