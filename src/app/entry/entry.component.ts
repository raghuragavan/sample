import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  title = localStorage;
  myForm1: FormGroup | any;
  user:any

  constructor(private route:Router, private Fb:FormBuilder) { }

  ngOnInit(): void {
   
    this.myForm1= this.Fb.group({
      firstName: [''],
      lastName: ['']
  })
  }
   
  onSubmit(): void {
    console.log(this.myForm1.value);
    this.route.navigate(['/details'])
    localStorage.setItem('formdata1',JSON.stringify(this.myForm1.value))
  }

}


