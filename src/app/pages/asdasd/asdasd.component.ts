import { FORMA_JO } from './../../shared/model/forma';
import { FORMA_ROSSZ_ELEJE, FORMA_ROSSZ_VEGE } from '../../shared/model/forma';
import { FbBaseService } from './../../service/fb-base.service';
import { AsdasdModel } from './../../shared/model/asdasd.model';
import { CATEGORIES } from './../../shared/model/categories.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { getAsdasdForm } from 'src/app/shared/forms/asdasd.form';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-asdasd',
  templateUrl: './asdasd.component.html',
  styleUrls: ['./asdasd.component.scss']
})
export class AsdasdComponent implements OnInit, OnDestroy {

  categories = CATEGORIES;
  asdasd?: AsdasdModel[] | null = null;
  choosable?: AsdasdModel[] | null = [];
  last: number | null = null;
  text: string[] = [];
  copyCat: string | null = null;
  fe = FORMA_ROSSZ_ELEJE;
  fv = FORMA_ROSSZ_VEGE + localStorage.getItem("user") +"\nSZTE EHÖK";
  formGood = FORMA_JO + localStorage.getItem("user") +"\nSZTE EHÖK";

  form: FormGroup = new FormGroup({
    asdasd: new FormArray([])
  });

  loremIpsum: FormControl = new FormControl('');

  public asdasdFilterCtrl: FormControl = new FormControl();
  public filteredChoosable: ReplaySubject<AsdasdModel[]> = new ReplaySubject<AsdasdModel[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect?: MatSelect;
  protected _onDestroy = new Subject<void>();

  constructor(
    private service: FbBaseService
  ) {}

  ngOnInit(): void {
    this.service.get("asdasd").subscribe(result => {
      this.asdasd = result as AsdasdModel[];
    });
    this.asdasdFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterChoosabble();
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
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
    this.filterChoosabble();
  }

  protected filterChoosabble() {
    if (!this.choosable) {
      return;
    }
    let search = this.asdasdFilterCtrl.value;
    if (!search) {
      this.filteredChoosable.next(this.choosable.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredChoosable.next(
      this.choosable.filter(result => result.text.toLowerCase().indexOf(search) > -1)
    );
  }

}
