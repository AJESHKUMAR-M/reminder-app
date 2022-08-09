import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any
  lDate:any
  currentUserid:any;
  // currentUserid=""
eventForm=this.fb.group({
  date:['',[Validators.required]],
  event:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
})
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=localStorage.getItem('currentUser')
    this.lDate=new Date
    console.log(this.user);
    

  
  }

  

  ngOnInit(): void {
    if(!localStorage.getItem("currentUserid"))
    {
      alert("pls login")
      this.router.navigateByUrl("")
    }
  }
  addEvent(){
    var date=this.eventForm.value.date
    var event=this.eventForm.value.event
  
    console.log(date);
    console.log(event);

    if(this.eventForm.valid){
    this.ds.addEvent(date,event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('event')
      }
    },
    result=>{
      alert(result.error.message)
    })
  }
  else{
    alert("please fill the form")
  }
   }

   logOut() {
    localStorage.removeItem("currentUserid")
    localStorage.removeItem("currentUsername")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
  // deleteAcc(){
    // this.currentUserid =JSON.parse(localStorage.getItem("currentUserid")||"")
    
    
    //   }
    //   cancel(){
    //     this.currentUserid =""
    //   }

    //   onDelete(event:any){
    //     // alert("from parent:"+ event)
    //     this.ds.deleteAcc(event)
    //     .subscribe((result:any)=>{
    //       if(result){
    //         alert(result.message)
    //         localStorage.removeItem("curentUser")
    //         localStorage.removeItem("curentAcno")
    //         localStorage.removeItem("token")
    //         this.router.navigateByUrl("")
    //       }
    //     },result=>{
    //       alert(result.error.message)
    //     })
        // }


}
