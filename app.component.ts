import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import "ag-grid-enterprise";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
//implements OnInit 
export class AppComponent {
    private gridApi;
    private gridColumnApi;
  
    private columnDefs;
    private defaultColDef;
    private defaultRowDef;
    private rowData;
  
    constructor(private http: HttpClient) {
      this.columnDefs = [
        {
          headerName: "Lender",
          field: "lender",
          width: 120,
          rowGroup: true
        },
        {
          headerName: "Rule Type",
          field: "ruleType",
          width: 90,
          rowGroup: true
        },
        {
          headerName: "Raw Units",
          field: "rawUnit",
          width: 110
        },
        {
          headerName: "Raw Units $",
          field: "rawUnit$",
          width: 200
        },
        {
          headerName: "Available Units",
          field: "availUnit",
          width: 100
        },
        {
          headerName: "Available Units $",
          field: "availUnit$",
          width: 100
        },
        {
          headerName: "Load Date",
          field: "loadDate",
          width: 100
        }
      ];
      this.defaultColDef = {
        sortable: true,
        filter: true,
        editable: true,
        resizable: true,
        pinned: null
      };

      this.rowData = [
        { lender: 'Lender 1', ruleType: 'Moderate', rawUnit: 22617500, rawUnit$: 3160117100, availUnit: 22617500, availUnit$: 3160117100, loadDate: '2/27/19 3:28'},
        { lender: 'Lender 2', ruleType: 'Moderate', rawUnit: 19628000, rawUnit$: 2742424160, availUnit: 18646600, availUnit$: 2605302952, loadDate: '2/26/19 5:30'},
        { lender: 'Lender 1', ruleType: 'Moderate', rawUnit: 16264597, rawUnit$: 2272489493, availUnit: 16264597, availUnit$: 2272489493, loadDate: '2/27/19 4:06'},
        { lender: 'Lender 4', ruleType: 'Moderate', rawUnit: 16056094, rawUnit$: 2243357454, availUnit: 15253289, availUnit$: 2131189581, loadDate: '2/27/19 12:17'},
        { lender: 'Lender 1', ruleType: 'Moderate', rawUnit: 13853807, rawUnit$: 1935653914, availUnit: 11083046, availUnit$: 1548523131, loadDate: '2/27/19 4:12'},
        { lender: 'Lender 6', ruleType: 'Moderate', rawUnit: 7056646, rawUnit$: 985954579, availUnit: 7056646, availUnit$: 985954579, loadDate: '2/27/19 3:42'},
        { lender: 'Lender 1', ruleType: 'Moderate', rawUnit: 4806836, rawUnit$: 671611126, availUnit: 4806836, availUnit$: 671611126, loadDate: '2/27/19 5:17'},
        { lender: 'Lender 8', ruleType: 'Moderate', rawUnit: 22617500, rawUnit$: 3160117100, availUnit: 22617500, availUnit$: 3160117100, loadDate: '2/27/19 3:28'},
        { lender: 'Lender 9', ruleType: 'Moderate', rawUnit: 19628000, rawUnit$: 2742424160, availUnit: 18646600, availUnit$: 2605302952, loadDate: '2/26/19 5:30'},
        { lender: 'Lender 10', ruleType: 'Moderate', rawUnit: 16264597, rawUnit$: 2272489493, availUnit: 16264597, availUnit$: 2272489493, loadDate: '2/27/19 4:06'},
        { lender: 'Lender 11', ruleType: 'Moderate', rawUnit: 16056094, rawUnit$: 2243357454, availUnit: 15253289, availUnit$: 2131189581, loadDate: '2/27/19 12:17'},
        { lender: 'Lender 12', ruleType: 'Moderate', rawUnit: 13853807, rawUnit$: 1935653914, availUnit: 11083046, availUnit$: 1548523131, loadDate: '2/27/19 4:12'},
        { lender: 'Lender 13', ruleType: 'Moderate', rawUnit: 7056646, rawUnit$: 985954579, availUnit: 7056646, availUnit$: 985954579, loadDate: '2/27/19 3:42'},
        { lender: 'Lender 14', ruleType: 'Moderate', rawUnit: 4806836, rawUnit$: 671611126, availUnit: 4806836, availUnit$: 671611126, loadDate: '2/27/19 5:17'},
        { lender: 'Lender 15', ruleType: 'Moderate', rawUnit: 22617500, rawUnit$: 3160117100, availUnit: 22617500, availUnit$: 3160117100, loadDate: '2/27/19 3:28'},
        { lender: 'Lender 16', ruleType: 'Moderate', rawUnit: 19628000, rawUnit$: 2742424160, availUnit: 18646600, availUnit$: 2605302952, loadDate: '2/26/19 5:30'},
        { lender: 'Lender 17', ruleType: 'Moderate', rawUnit: 16264597, rawUnit$: 2272489493, availUnit: 16264597, availUnit$: 2272489493, loadDate: '2/27/19 4:06'},
        { lender: 'Lender 18', ruleType: 'Moderate', rawUnit: 16056094, rawUnit$: 2243357454, availUnit: 15253289, availUnit$: 2131189581, loadDate: '2/27/19 12:17'},
        { lender: 'Lender 19', ruleType: 'Moderate', rawUnit: 13853807, rawUnit$: 1935653914, availUnit: 11083046, availUnit$: 1548523131, loadDate: '2/27/19 4:12'},
        { lender: 'Lender 20', ruleType: 'Moderate', rawUnit: 7056646, rawUnit$: 985954579, availUnit: 7056646, availUnit$: 985954579, loadDate: '2/27/19 3:42'},
        { lender: 'Lender 21', ruleType: 'Moderate', rawUnit: 4806836, rawUnit$: 671611126, availUnit: 4806836, availUnit$: 671611126, loadDate: '2/27/19 5:17'}
  ];    



    }

    onGridReady(params){
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
  
    /*onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
  
      this.http
        .get(
          "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
        )
        .subscribe(data => {
          this.rowData = data;
        });
    }*/
  }
