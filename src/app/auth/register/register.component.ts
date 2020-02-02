import { Component, OnInit } from '@angular/core';
import { User } from '../../viewModels/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/apis/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router , private authApi : AuthService , public translate : TranslateService) { }
  user : User = new User();
  form : FormGroup;
  rePassword;
  error;
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
    this.authApi.signup(this.user)
    .subscribe((user)=>{
      Swal.fire("success" , "" , "success")
    } , error=>{
      console.log(error)
      this.error = error.error.error
      Swal.fire("Error" , this.translate.instant(this.error) , 'error')
    })
    //localStorage.setItem('user' , JSON.stringify(this.user))
    //this.router.navigate(['/']);
  }
}
