import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
//implements OnInit 
export class AppComponent {
    title = 'app';

    columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true, editable: true},
      {headerName: 'Model', field: 'model', sortable: true, filter: true, editable: true},
      {headerName: 'Price', field: 'price', sortable: true, filter: true, editable: true}
  ];
  
    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    //rowData : any;
    //constructor(private http: HttpClient) {}

    //ngOnInit() {
        //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    //}
}