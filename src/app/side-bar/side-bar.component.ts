import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

openNav():void {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("was here");
    
}

closeNav():void {
    document.getElementById("mySidenav").style.width = "0";
    console.log("was here");
}


}
