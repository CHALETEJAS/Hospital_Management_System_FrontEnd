import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username == "tejas" && password === "1234"){
      sessionStorage.setItem("username",username);
      return true;
    }else{
        alert("Wrong credentials!!!");
        return false;
    }
  }

  isUserLoggedIn(){
    console.log("doctor login");
    let user = sessionStorage.getItem('username');
    return !user == null;
  }
  
  logout(){
    console.log("doctor logoout");
    sessionStorage.removeItem('username');
  }
}
