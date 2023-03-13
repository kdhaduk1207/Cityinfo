import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ci-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit   {
 
  cityInfoForm : FormGroup;
  
  constructor(private formBuilder:FormBuilder)
  {
    this.cityInfoForm = this.formBuilder.group(
      {
        name:'',
        description:''
      }
    )  
  } 
 
  ngOnInit(): void {
    
  }

}
