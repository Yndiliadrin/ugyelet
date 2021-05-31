import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duty',
  templateUrl: './duty.component.html',
  styleUrls: ['./duty.component.scss']
})
export class DutyComponent implements OnInit {

  form: FormGroup = new FormGroup ({
    date: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);

  }
}
