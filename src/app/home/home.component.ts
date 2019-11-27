import {Component, OnInit} from '@angular/core';

const {dialog} = require('electron').remote;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  show() {
    const result = dialog.showOpenDialog({properties: ['openFile']}, function (file) {
      console.log(file);
    });
    console.log(result);
  }

}
