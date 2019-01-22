import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { DataProviderService } from './../../service/data-provider.service';


@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit, OnChanges {
  @Input() val: any;
  @ViewChild('drawer') public myNav;

  data: any;
  keys: any;
  content: any;
  selectedKey: any;
  constructor(private dp: DataProviderService) { }

  ngOnInit() {
    this.dp.getDataFirebase().subscribe((x) => {
      this.data = x;
      this.keys = Object.keys(x);

    });
  }

  display(e) {
    console.log(e.target.outerText);
    this.content = this.data[e.target.outerText];
    this.selectedKey = e.target.outerText;
  }

  ngOnChanges() {

    this.myNav.toggle();
  }

}
