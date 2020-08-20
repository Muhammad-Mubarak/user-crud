import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  formData: UserDetail
  readonly rootURL = 'https://localhost:44314/api';
  list: UserDetail[];
  constructor(private http: HttpClient) { }

  postUserDetail() {
    return this.http.post(this.rootURL + '/UserDetails', this.formData);
  }
  putUserDetails() {
    return this.http.put(this.rootURL + '/UserDetails/' + this.formData.UID, this.formData);
  }

  deleteUserDetail(id) {
    return this.http.delete(this.rootURL + '/UserDetails/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/UserDetails')
      .toPromise()
      .then(res => this.list = res as UserDetail[]);
  }
}
