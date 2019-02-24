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
      {headerName: 'Make', field: 'make', sortable: true, filter: true, editable: true, resizable: true, pinned: "left", rowDrag: true},
      {headerName: 'Model', field: 'model', sortable: true, filter: true, editable: true, resizable: true, pinned: "left", rowDrag: true},
      {headerName: 'Govind', field: 'chari', sortable: true, filter: true, editable: true, resizable: true, pinned: "left", rowDrag: true},
      {headerName: 'Price', field: 'price', sortable: true, filter: true, editable: true, resizable: true, pinned: "left", rowDrag: true}
  ];
    
    rowData = [
        { make: 'Toyota', model: 'Celica', chari: 'Hi', price: 35000 },
        { make: 'Ford', model: 'Mondeo',chari: 'Bye', price: 32000 },
        { make: 'Black', model: 'Darajan',chari: 'Guy', price: 31000 },
        { make: 'Porsche', model: 'Boxter',chari: 'Tie', price: 72000 }
    ];

    //rowData : any;
    //constructor(private http: HttpClient) {}

    //ngOnInit() {
        //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    //}
}
