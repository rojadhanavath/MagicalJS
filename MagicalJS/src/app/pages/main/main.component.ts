import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  flag: any;
  constructor() { }

  ngOnInit() {
    this.flag = true;
  }

  update() {

    if (this.flag)
      this.flag = false;
    else
      this.flag = true;
  }

}
