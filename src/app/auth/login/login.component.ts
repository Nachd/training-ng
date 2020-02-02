import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../viewModels/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/apis/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router : Router , private authApi : AuthService , public translate : TranslateService) { }
 email ; password;
  form : FormGroup;
  rePassword;
  error;
  ngOnInit() {
    this.form = new FormGroup({
      'email' :  new FormControl([Validators.email , Validators.required]),
      'password' : new FormControl([Validators.required])
    });
  }

  login(){
    this.authApi.signin(this.email , this.password)
    .subscribe((user)=>{
      Swal.fire("success" , "" , "success")
      //test roles / permissions
      console.log(user);
      localStorage.setItem('user' , JSON.stringify(user))
      this.router.navigate(['/']);
    } , error=>{
      console.log(error)
      this.error = error.error.error
      Swal.fire("Error" , this.translate.instant(this.error) , 'error')
    })
    //localStorage.setItem('user' , JSON.stringify(this.user))
    //this.router.navigate(['/']);
  }

}
