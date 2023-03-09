import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date = '';
  money : number = 0;
  height : number = 0;
  mile : number = 0;

  

  onMileChange(value : string)
  {
    this.mile = parseFloat(value);
  }

  onNameChange(value : string)
  {
    this.name = value;
  }
  onDateChange(value : string)
  {
    this.date = value;
  }
  onMoneyChange(value : string)
  {
    this.money=parseFloat(value);
  }
  onHeightChange(value :string)
  {
    this.height = parseFloat(value);
  }



}
