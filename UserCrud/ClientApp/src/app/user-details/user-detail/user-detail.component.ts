import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../shared/user-details.service';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  //styleUrls: ['./user-detail.component.css']
  styles: []
})
export class UserDetailComponent implements OnInit {

  constructor(private service: UserDetailsService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      UID: 0,
      Name: '',
      Password: '',
      Email: ''
    };
  }
  
  //console.log("i am working");

  onSubmit(form: NgForm) {
    
   
    if (this.service.formData.UID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
 

  insertRecord(form: NgForm) {
    this.service.postUserDetail().subscribe(
      res => {
        //debugger;
        this.resetForm(form);
        //this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        //debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putUserDetails().subscribe(
      res => {
        this.resetForm(form);
        //this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }


}
