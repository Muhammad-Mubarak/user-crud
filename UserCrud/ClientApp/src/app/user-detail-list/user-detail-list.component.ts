import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/user-details.service';
import { UserDetail } from '../shared/user-detail.model';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  //styleUrls: ['./user-detail-list.component.css']
  styles: []
})
export class UserDetailListComponent implements OnInit {

  constructor(private service: UserDetailsService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  
  populateForm(ud: UserDetail) {
    
    this.service.formData = Object.assign({}, ud);
  }

  onDelete(ud) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteUserDetail(ud)
        .subscribe(res => {
         
          this.service.refreshList();
          //this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            console.log(err);
          })
    }
  }

}
