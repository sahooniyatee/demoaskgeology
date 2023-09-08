import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'frontend';
  // constructor(private http: HttpClient) { }
  // products: any;
  // ngOnInit() {
  //   this.fetchBackendData();
  //   this.wordflick();
  // }
  

  // myArray= [
  //   { id: 1, name: 'John' },
  //   { id: 2, name: 'Jane', age: 25 },
  //   { id: 3, name: 'Mike', city: 'New York' },
  //   // Add more objects with different properties as needed
  // ];
  // fetchBackendData() {
  //   this.http.get('http://localhost:8000/product').subscribe((response: any) => {
  //     // Process the response data here
  //     console.log(response);
  //     this.products = response;
  //   }, (error: any) => {
  //     // Handle any errors here
  //     console.error(error);
  //   });
  // }
  // deleteItem(itemId: number) {
  //   console.log(itemId);
    
  //   this.http.delete(`http://localhost:8000/deleteproduct/${itemId}`).subscribe(
  //     () => {
  //       console.log('Item deleted successfully');
  //       this.fetchBackendData();
  //       // Perform any necessary actions after successful deletion
  //     },
  //     (error: any) => {
  //       console.error('Error deleting item:', error);
  //       // Handle any errors that occurred during deletion
  //     }
  //   );
  // }
  
  // words: string[] = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'];
  // part: string="";
  // i: number = 0;
  // offset: number = 0;
  // len: number = this.words.length;
  // forwards: boolean = true;
  // skip_count: number = 0;
  // skip_delay: number = 15;
  // speed: number = 70;

  // wordflick() {
  //   setInterval(() => {
  //     if (this.forwards) {
  //       if (this.offset >= this.words[this.i].length) {
  //         ++this.skip_count;
  //         if (this.skip_count == this.skip_delay) {
  //           this.forwards = false;
  //           this.skip_count = 0;
  //         }
  //       }
  //     } else {
  //       if (this.offset == 0) {
  //         this.forwards = true;
  //         this.i++;
  //         this.offset = 0;
  //         if (this.i >= this.len) {
  //           this.i = 0;
  //         }
  //       }
  //     }
  //     this.part = this.words[this.i].substr(0, this.offset);
  //     if (this.skip_count == 0) {
  //       if (this.forwards) {
  //         this.offset++;
  //       } else {
  //         this.offset--;
  //       }
  //     }
  //   }, this.speed);
  // }
  
}
