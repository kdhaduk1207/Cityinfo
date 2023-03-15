import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ci-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit   {
 
  cityInfoForm : FormGroup;
  showDetails : boolean = true;
  
  constructor(private formBuilder:FormBuilder)
  {
    this.cityInfoForm = this.formBuilder.group(
      {
        name:['',[Validators.required,Validators.maxLength(50)]],
        description:['',[Validators.maxLength(255)]]
      }
    )  
  } 
 
  ngOnInit(): void {
    
  }

  save()
  {
      console.log(this.cityInfoForm);
  }

  clearValidation()
  {
     const nameControl = this.cityInfoForm.get('name');
     nameControl?.clearValidators();
  }

}
