import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'wa-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private weatherSearchForm: FormGroup;
  private weatherData: any;

  constructor(private formBuilder: FormBuilder,
              private apixuService: ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });

    // console.log(this.weatherSearchForm);
  }

  sendToAPIXU(formValues) {
    // console.log(formValues);
    this.apixuService
        .getWeather(formValues.location)
        .subscribe( data => {
          this.weatherData = data;
          console.log(this.weatherData);
        });
  }

}
