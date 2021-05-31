import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CATEGORIES } from 'src/app/shared/model/categories.model';

@Component({
  selector: 'app-asdasd-form',
  templateUrl: './asdasd-form.component.html',
  styleUrls: ['./asdasd-form.component.scss']
})
export class AsdasdFormComponent implements OnInit {

  categories = CATEGORIES;
  aktualities = ["őszi","tavaszi"];

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    category: new FormControl('', Validators.required),
    aktuality: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    active: new FormControl(false)
  });

  constructor(public dialogRef: MatDialogRef<AsdasdFormComponent>) { }

  ngOnInit(): void {
  }
}
