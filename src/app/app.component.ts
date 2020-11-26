import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jsonData: any;
  checkedobj: any;
  arrayofEmails = [];
  selectedemails = [];
  data;
  count = 0;
  checkedobj1: any;
  optionData: any;
  countryjsondata: any;
  checkedobj2: any;
  state: any;
  constructor(private ser: ServicesService) { }
  ngOnInit() {
    this.data1();
    this.getcountrys();
  }

  data1() {
    this.ser.getData().subscribe(res => {
      this.jsonData = res;
      this.data = this.jsonData;
    });
  }

  selectAll(event) {
    const checked = event.target.checked;
    this.checkedobj = checked;
    for (let i = 0; i < this.data.length; i++) {
      if (i <= this.data.length) {
        this.data[i].flag = checked;
      }
    }
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].flag === true) {
        this.arrayofEmails.push(this.data[i]);
      }
    }
  }

  singleSelect(event, obj) {
    const checked = event.target.checked;
    this.checkedobj1 = checked;
    this.arrayofEmails.push(obj);
  }

  savedmails() {
    this.selectedemails = [];
    this.count = 0;
    for (let i = 0; i < this.arrayofEmails.length; i++) {
      if (this.count <= 9) {
        this.selectedemails.push(this.arrayofEmails[i]);
        this.count++;
      } else {
        alert('Select minimim 10 not more than 10');
        this.selectedemails = [];
        break;
      }
    }
  }

  // dropdownData(){
  //   this.ser.getDropdownData().subscribe(res =>{
  //     this.optionData=res;
  //   })
  // }
  getcountrys() {
    this.ser.getDropdownData().subscribe(resp => {
      this.countryjsondata = resp;
    });
  }
  selectedCountry(event) {
    this.checkedobj2 = event;
    for (let i = 0; i <= this.countryjsondata.length; i++) {
      if (this.countryjsondata[i].id == event) {
        this.state = this.countryjsondata[i].statedata;
        break;
      }
    }
  }
}
