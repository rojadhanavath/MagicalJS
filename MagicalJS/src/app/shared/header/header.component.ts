import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  toggleSideNav() {
    //should go to stage component
    console.log(1);
    this.open.emit(1);

  }

}
