import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  hide = true;

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.login();
  }


  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  login(): void {

    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password).then(
      result => {
        localStorage.setItem("user", result.user.displayName);
        this.navTo('/home');
      },
      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }

  loginWithGoogle() {
    this.authService.GoogleAuth().then(
      result => {
        localStorage.setItem("user", result.user.displayName);
        this.navTo("/home");
    }, (error) => {
        this.alertMessage = "Hálózati hiba történt";
    });
  }

}
