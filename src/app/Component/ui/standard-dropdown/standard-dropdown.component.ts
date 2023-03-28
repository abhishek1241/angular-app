import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-standard-dropdown',
  templateUrl: './standard-dropdown.component.html',
  styleUrls: ['./standard-dropdown.component.scss']
})
export class StandardDropdownComponent {
  
  public buttonText = 'Button';

  name = 'Angular 5';
  dataList: Array<any> = [];
  schedule: { branch: '' };
  

	@Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}
  
  
  constructor() {
    this.dataList = [
      { code: 1, name: "shohel" },
      { code: 2, name: "rana" },
      { code: 3, name: "shipon" }
    ]
  }

}
