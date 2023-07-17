import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  
})
export class RegisterComponent implements OnInit {
  registrationform!:FormGroup

  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    this.registrationform = this.builder.group({
      // id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
      firstname: ['',[ Validators.required, Validators.name]],
     
      // name: this.builder.control('', Validators.required),
      // password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')])),
      // email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      // gender: this.builder.control('male'),
      // role: this.builder.control(''),
      // isactive: this.builder.control(false)
    });
      
  }

  proceedregistration() {
    if (this.registrationform.valid) {

      this.service.Processregister(this.registrationform.value).subscribe(res => {
        this.toastr.success('Please contact admin for enable access', 'registered successfull')
        this.router.navigate(['login']);
      console.log(this.registrationform," check the value form");

      })
    } else {
      this.toastr.warning('Please enter valid data')
    }
  }
}
