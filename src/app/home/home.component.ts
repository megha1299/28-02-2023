import { Component } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 constructor(private service: ServiceService, private route: Router){}

 logout() {  
  this.service.logout();  
  this.route.navigate(['']);  
} 
}
