import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  
  patients:Patient[]=[];

  constructor(private pratientService:PatientService, private router:Router, private docauth:DocauthService){}

  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.pratientService.getPatientList().subscribe(data=>{
    this.patients=data;
    })
  }

  update(id:number){
      
    this.router.navigate(['update-patient',id]);

  }

  delete(id:number){
    this.pratientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    });
  }

  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.docauth.logout();
    this.router.navigate(['home']);
  }

}
