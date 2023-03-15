import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from './citydetail.service';
import { CityDto } from './model/citydetail';

@Component({
  selector: 'ci-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit   {
 
  cityInfoForm : FormGroup;
  showDetails : boolean = true;
  cityDtl: CityDto;
  
  constructor(private formBuilder:FormBuilder,private cityService : CityService)
  {
    this.cityDtl = new CityDto();
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

    const cityCreate = { ...this.cityDtl, ...this.cityInfoForm.value };
   
    this.cityService.createCity(cityCreate).subscribe(
      {
        next: () => { this.cityInfoForm.reset(); },
        error: err => console.log(err)
      }
    );


      console.log(this.cityInfoForm);
  }

  clearValidation()
  {
     const nameControl = this.cityInfoForm.get('name');
     nameControl?.clearValidators();
  }

}
