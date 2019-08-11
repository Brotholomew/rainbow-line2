import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-details-mobile',
  templateUrl: './details-mobile.component.html',
  styleUrls: ['./details-mobile.component.css']
})
export class DetailsMobileComponent implements OnInit {

  constructor(
    public deviceDetector: DeviceDetectorService,
  ) { }

  ngOnInit() {
    if (this.deviceDetector.isMobile() === true)
    {
      let elements = document.querySelectorAll('p');
      for (let element = 0; element < elements.length; element++) {
        elements[element].style.fontSize = "20px";
      }
      elements =  document.querySelectorAll('h2');
      for (let element = 0; element < elements.length; element++) {
        elements[element].style.fontSize = "40px";
      }
      document.querySelector('h3').style.fontSize = "60px";
    }
  }

}
