 import { Component, OnInit, Input } from '@angular/core';
 import { Http, Response} from '@angular/http';
 import 'rxjs/add/operator/map';
 import {ListService} from '../services/list.service'; 
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  providers: [ListService]
})



export class ChannelComponent {
@Input('names')  names:any ;

constructor(private listservice: ListService) {}
  

dataa:any={};

addfavourites(dataa){
      console.log(dataa)
      this.dataa={"author":dataa.author,
      "title":dataa.title,
      "descrption":dataa.description,
      "url":dataa.url,
      "urlToImage":dataa.urlToImage,
      };
      this.listservice.addfavourites(this.dataa).subscribe((dataa:any)=>{
console.log(dataa);
      alert("Favourite added")
      })
  }

}


          





/*import { Component, OnInit } from '@angular/core';
 import { Http, ressponse} from '@angular/http';
 import 'rxjs/add/operator/map';
 import {ListService} from '../services/list.service'; 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]

})
export class ListComponent implements OnInit {
	ress:any=[];

constructor(private listservice: ListService) { }

  getDataa(): void {
    this.listservice.getDataa().subscribe((dataa:any)=>{
    	this.ress=dataa.sources;
    console.log(dataa);	
    });
  }

  ngOnInit() {
    this.getDataa();
  }*/