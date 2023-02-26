import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }

  title = 'ECommerceClient';

  ngOnInit(): void {
    //this.toastr.success("Atakan", "Baslik");
    /** spinner starts on init */
    this.spinner.show("s2");

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide("s2");
    }, 5000);
  }

}
