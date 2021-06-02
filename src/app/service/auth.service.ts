import firebase from 'firebase/app';
import auth  from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  async regiszt(email: string, password: string, name: string): Promise<any>{
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      return result.user?.updateProfile({
        displayName: name
      })
    }).catch(function(error) {
      console.log(error);
    });
  }

  login(email: string, password: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  authenticated(): boolean {
      return this.afAuth.authState !== null;
  }

  currentUserObservable(): any {
      return this.afAuth.authState;
  }

  GoogleAuth(): Promise<any> {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider);
  }
  AuthLogin(provider: any): Promise<any> {
    return this.afAuth.signInWithPopup(provider);
  }
}
