import { FORMA_JO } from './../../shared/model/forma';
import { FORMA_ROSSZ_ELEJE, FORMA_ROSSZ_VEGE } from '../../shared/model/forma';
import { FbBaseService } from './../../service/fb-base.service';
import { AsdasdModel } from './../../shared/model/asdasd.model';
import { CATEGORIES } from './../../shared/model/categories.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getAsdasdForm } from 'src/app/shared/forms/asdasd.form';

@Component({
  selector: 'app-asdasd',
  templateUrl: './asdasd.component.html',
  styleUrls: ['./asdasd.component.scss']
})
export class AsdasdComponent implements OnInit {

  categories = CATEGORIES;
  asdasd?: AsdasdModel[] | null = null;
  choosable?: AsdasdModel[] | null = [];
  last: number | null = null;
  text: string[] = [];
  copyCat: string | null = null;
  fe = FORMA_ROSSZ_ELEJE;
  fv = FORMA_ROSSZ_VEGE + localStorage.getItem("user") +"\nSZTE EHÖK";
  formGood = FORMA_JO;

  form: FormGroup = new FormGroup({
    asdasd: new FormArray([])
  });

  loremIpsum: FormControl = new FormControl('');

  constructor(
    private service: FbBaseService
  ) {}

  ngOnInit(): void {
    this.service.get("asdasd").subscribe(result => {
      this.asdasd = result as AsdasdModel[];
    });
  }


  onSubmit(): void{
    console.log(this.form.value);
  }

  setLoremIpsum() {
    this.loremIpsum.setValue(this.text.join(""));
  }

  get getAsdasd(): FormArray {
    return this.form?.get('asdasd') as FormArray;
  }

  addAsdasd(): void {
    const idFormArray = this.form?.get('asdasd') as FormArray;
    idFormArray.push(getAsdasdForm());
    this.stuff();
  }

  removeAsdasd(index: number): void {
    const formArray = this.form?.get('asdasd') as FormArray;
    formArray.removeAt(index);
    this.setLoremIpsumAfterAsdasdDelete();
  }

  setLoremIpsumAfterAsdasdDelete(): void {
    this.text = [];
    for (let index = 0; index < this.getAsdasd.controls.length; index++) {
      this.text.push("- " +  this.getAsdasd.controls[index].get("text")?.value + "\n");
    }
    this.setLoremIpsum();
  }

  chooseAsdasd(index: number) {
    this.last = index;
    if (this.form.get('asdasd')?.get(this.last + "")?.get("text")?.value != undefined ||
    this.form.get('asdasd')?.get(this.last + "")?.get("text")?.value != null) {
      this.text.push("- " +  this.form.get('asdasd')?.get(this.last + "")?.get("text")?.value + "\n");
    }
    this.setLoremIpsum();
  }

  filter(key: string) {
    this.choosable = [];
    for (let index = 0; index < this.asdasd!.length; index++) {
      var x = this.asdasd![index];
      if (x.category == key) {
        this.choosable?.push(x);
      }
    }
  }

  stuff(): void {
    let x = this.getAsdasd;
    for (let index = 0; index < x.length; index++) {
      console.log(x.get(index+"")?.get('text')?.value);
    }
  }

}
