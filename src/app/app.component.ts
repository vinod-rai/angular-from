import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'angular-form';

  user: User = {
    email: "vinod12345@gmail.com",
    password: "123456",
    checkme: true
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
