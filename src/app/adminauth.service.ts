import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username == 'admin' && password == '1234'){
      sessionStorage.setItem('username2',username);
      return true;
    }else{
      return false
    }
  }

  isUserLoggedIn(){
    console.log("user login");
    let user = sessionStorage.getItem('username2');
    return !(user == null);
  }

  logout(){
    console.log("user logged out")
    sessionStorage.removeItem('username2');
  }
}
