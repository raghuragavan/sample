import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  form1: any;
  form2: any;

  constructor() { }

  ngOnInit(): void {
    this.form1 = JSON.parse(localStorage.getItem('formdata1') as any)
    this.form2 = JSON.parse(localStorage.getItem('formdata2') as any)
  }

}
