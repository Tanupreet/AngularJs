import { Component, OnInit,Output,EventEmitter } from '@angular/core';
 import { Http, Response} from '@angular/http';
 import 'rxjs/add/operator/map';
 import {ListService} from '../services/list.service'; 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]

})
export class ListComponent implements OnInit {
	res:any=[];
	id:any=[];
	data:any=[];
  newData:any=[];

@Output() receive=new EventEmitter<string>()
constructor(private listservice: ListService) { }

  

  

  ngOnInit() {
   this.listservice.getData().subscribe((newData:any)=>{
    	this.newData=newData.sources;
        });
  }


searchData(name){
this.listservice.search(name).subscribe((data:any)=>{
    	this.data=data.articles;
      this.receive.emit(this.data);
/*console.log(this.id);	*/
}
)

}}
