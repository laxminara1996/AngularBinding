import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homepage:string="WELCOME TO HOMEPAGE";
  firstName:string="naga";
  lastName:string="laxmi";
  age:number=26;
  myclass:string="classB";
  status:boolean=true;
  locationOfImage:string="../assets/Acer_Wallpaper_01_5000x2814.jpg";
  countryname:String="usa";
  items:any={
    'id':102,
    'name':'laxmi',
    'salary':1200
  };

  action1():void{
  alert('action1 calling');
  this.firstName="rani";
  this.mycolor="yellow"
}
action2():void{
  alert('action2 calling');
  this.mycolor="green";
}
countries:string[] = ["country1","country2","country3"];
mycolor:String = "blue";
}
