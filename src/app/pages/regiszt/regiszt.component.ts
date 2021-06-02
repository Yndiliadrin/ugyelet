import { AuthService } from './../../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-regiszt',
  templateUrl: './regiszt.component.html',
  styleUrls: ['./regiszt.component.scss']
})
export class RegisztComponent implements OnInit {

  form: FormGroup = new FormGroup({
    f_name: new FormControl('', Validators.required),
    s_name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
    ]),
    password: new FormControl('',  [
      Validators.required,
      Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}")
    ]),
    confirmPassword: new FormControl('',  [
      Validators.required,
      Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}")
    ])
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.regiszt();
  }

  regiszt() {
    if (this.form.valid) {
      if (this.matchingPasswords()) {
        let name = this.form.get('f_name')?.value + " " + this.form.get('s_name')?.value;
        try {
          this.authService.regiszt(this.form.get('email')?.value, this.form.get('password')?.value, name);
          this.navTo("/login");
        } catch (error) {
          this.alertMessage = "Az e-mail cím már használatban van.";
        }
      }
    }
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  navTo(url: string) {
    this.router.navigateByUrl(url);
  }


  matchingPasswords(): boolean {
    return this.form.value.password === this.form.value.confirmPassword;
  }

}
