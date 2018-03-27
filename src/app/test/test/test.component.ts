import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private _test: string;

  @Input()
  set test(value: string) {
    console.log(value);
    this._test = value;
  }

  constructor() {
    console.log('constructor@TestComponent');
  }

  ngOnInit() {
    console.log('ngOnInit@TestComponent');
  }

}
