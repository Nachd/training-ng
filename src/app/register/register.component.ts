import { Component, OnInit } from '@angular/core';
import { User } from '../viewModels/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router) { }
  user : User = new User();
  form : FormGroup;
  rePassword;
  ngOnInit() {
    this.form = new FormGroup({
      'firstName' : new FormControl(),
      'lastName': new FormControl(),
      'email' :  new FormControl([Validators.email , Validators.required]),
      'password' : new FormControl([Validators.required]),
      're-password': new FormControl()
    });
  }

  register(){
    localStorage.setItem('user' , JSON.stringify(this.user))
    this.router.navigate(['/']);
  }
}
