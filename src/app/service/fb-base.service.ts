import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(
    private afs: AngularFirestore
  ) { }

  async add(collectionName: string, data: any, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  weakAdd(collectionName: string, data: any) {
    return this.afs.collection(collectionName).add(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => {
        console.log('finally');
      });
  }

  get(collectionName: string) {
    return this.afs.collection(collectionName).valueChanges();
  }

  delete(collectionName: string, id: string|null) {
    return this.afs.collection(collectionName).doc(id!).delete();
  }
}
