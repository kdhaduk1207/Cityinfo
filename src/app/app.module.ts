import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityData } from './city-detail/model/city-data';

@NgModule({
  declarations: [
    AppComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(CityData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
