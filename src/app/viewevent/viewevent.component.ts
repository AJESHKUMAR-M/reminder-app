import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
events:any
currentUserid=localStorage.getItem('currentUserid')
  constructor(private ds:DataService) {
    this.ds.getEvent(this.currentUserid).subscribe((result:any)=>{
      this.events=result.event
    },result=>{
      alert(result.error.message)
    })
   }

  ngOnInit(): void {
  }
deleteEvent(k:any){
this.ds.deleteEvent(k).subscribe((result:any)=>{
  if(result){
    window.location.reload();
  }
},result=>{
  alert(result.error.message)
})
}
}
