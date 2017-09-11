import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
 import 'rxjs/add/operator/map';
 import {FavouritesService} from '../services/favourites.service'; 

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  providers: [FavouritesService]
})

export class FavouritesComponent implements OnInit {

data:any;
  news:any={};
  constructor(private add: FavouritesService) { }

  show() {
  
  }

/*   edit(dataa:any) {
    this.add.editdataa(dataa,data)
    .subscribe(res=>{
      this.data=res
console.log(this.data)
    })
  }*/

  delete(dataa:any) {
    this.add.deletedata(dataa)
    .subscribe(res=>{

      var index= this.data.indexOf(dataa)
      this.data.splice(index,1)
      alert("Deleted")
     /* this.data=res
console.log(this.data)*/
    })
}
 ngOnInit() {
  this.add.showData()
    .subscribe(res=>{
      this.data=res
console.log(this.data)
    })
  }  
}
