import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private toastr:ToastrService) { }

  title = 'ECommerceClient';

  ngOnInit(): void {
    this.toastr.success("Atakan","Baslik");
  }

}
