import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item: string|undefined;

  @Output() onCancel= new EventEmitter()
  @Output() onDelete= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
   
  
  }
//   cancel(){
//     this.onCancel.emit()
//   }
//   delete(){
// this.onDelete.emit(this.item)
//   }


}
