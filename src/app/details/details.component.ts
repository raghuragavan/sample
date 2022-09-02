import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  title = localStorage;
  myForm2: FormGroup | any;


  constructor(private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  
    this.myForm2 = this.fb.group({
      email: [''],
      phone: ['']
  })
  }
   
  onSubmit() {
    this.route.navigate(['/result'])
    localStorage.setItem('formdata2',JSON.stringify(this.myForm2.value))
  }

}
