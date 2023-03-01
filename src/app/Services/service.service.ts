import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  constructor(private http: HttpClient) { }
  
  data ={
    user: '',
    password: ''
  }


  login(user: string, password: string)  {  
      
      this.data.user = user
      this.data.password = password
      localStorage.setItem('currentUser', JSON.stringify(this.data));  
      
     
    
  }

  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  } 

  logout() {  
    localStorage.removeItem('currentUser');
  }
  getData(){
    let data = localStorage.getItem('currentUser')
    if(data == null){
      return false;
    }
    let dataObj = JSON.parse(data)
    let user = dataObj.user
    let password = dataObj.password
    if(user == "test" && password == "test" ){
      return true;
    }else{
      return false;
    }
  }
}
