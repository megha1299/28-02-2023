import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formlog!: FormGroup;

user: string = '';
password: string = '';

  constructor(private fb:FormBuilder, private service: ServiceService, private route: Router){}



ngOnInit(){
  this.formlog= this.fb.group({
    user: ['', Validators.compose([Validators.required, Validators.pattern('^([^0-9]*)$')])],
    password: ['', Validators.required]
  })
   
}  

login(form: FormGroup) {
  this.user = form.value.user
  this.password = form.value.password
      this.service.login(this.user, this.password)
      this.route.navigate(['/home']);  
      
    

    

  }
}


 


