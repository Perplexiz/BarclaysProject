agGrid.initialiseAgGridWithAngular1(angular);
agGrid.LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_25_April_2019__MTU1NjE0NjgwMDAwMA==5095db85700c871b2d29d9537cd451b3");
var module = angular.module('example', ['agGrid']);

module.controller('exampleCtrl', function($scope, $http) {

    var columnDefs = [
        //rowGroup: true
          {headerName: "Lender",field: "lender", rowGroup:false},
          {headerName: "Rule Type",field: "ruleType"},
          {headerName: "Raw Units",field: "rawUnit"},
          {headerName: "Raw Units $",field: "rawUnit$"},
          {headerName: "Available Units",field: "availUnit"}
          //{headerName: "Available Units $",field: "availUnit$"},
          //{headerName: "Load Date",field: "loadDate"}
    ];

    var rowData = [
        { lender: 'Lender 1', ruleType: 'Moderate', rawUnit: 22617500, rawUnit$: 3160117100, availUnit: 22617500, availUnit$: 3160117100, loadDate: '2/27/19 3:28'},
        { lender: 'Lender 2', ruleType: 'Moderate', rawUnit: 19628000, rawUnit$: 2742424160, availUnit: 18646600, availUnit$: 2605302952, loadDate: '2/26/19 5:30'},
        { lender: 'Lender 3', ruleType: 'Moderate', rawUnit: 16264597, rawUnit$: 2272489493, availUnit: 16264597, availUnit$: 2272489493, loadDate: '2/27/19 4:06'},
        { lender: 'Lender 4', ruleType: 'Moderate', rawUnit: 16056094, rawUnit$: 2243357454, availUnit: 15253289, availUnit$: 2131189581, loadDate: '2/27/19 12:17'},
        { lender: 'Lender 5', ruleType: 'Moderate', rawUnit: 13853807, rawUnit$: 1935653914, availUnit: 11083046, availUnit$: 1548523131, loadDate: '2/27/19 4:12'},
        { lender: 'Lender 6', ruleType: 'Moderate', rawUnit: 7056646, rawUnit$: 985954579, availUnit: 7056646, availUnit$: 985954579, loadDate: '2/27/19 3:42'},
        { lender: 'Lender 7', ruleType: 'Moderate', rawUnit: 4806836, rawUnit$: 671611126, availUnit: 4806836, availUnit$: 671611126, loadDate: '2/27/19 5:17'},
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


    $scope.gridOptions = {
        angularCompileRows: true,
        defaultColDef: {
            resizable: true, sortable: true, editable: true, filter: true, width: 150, enableValue: true, enableRowGroup: true, enablePivot: true
        },
        columnDefs: columnDefs,
        rowData: rowData,
        enableRangeSelection: true,
        rowSelection: 'multiple',
        onCellValueChanged: onCellValueChanged,
        onPasteStart: onPasteStart,
        onPasteEnd: onPasteEnd,
        pagination: true,
        paginationPageSize: 10,

        sideBar: {
            toolPanels: [
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                }
            ],
            defaultToolPanel: 'columns'
        }
    };
    
    function onCellValueChanged(params) {
        console.log("Callback onCellValueChanged:", params);
    }
    
    function onPasteStart(params) {
        console.log('Callback onPasteStart:' ,params);
    }
    
    function onPasteEnd(params) {
        console.log('Callback onPasteEnd:' ,params);
    }



    
    document.getElementById("export").addEventListener("click", function() {
        var params = {
            fileName: document.querySelector('#fileName').value,
            sheetName: document.querySelector('#sheetName').value
        };
        $scope.gridOptions.api.exportDataAsExcel(params);
    });


    

    document.getElementById("addCol").addEventListener("click", function() {
        var colName=document.getElementById('input1').value;
        columnDefs.push({ field: colName, headerName: colName, editable: true, resizable: true, sortable: true});
        $scope.gridOptions.api.setColumnDefs(columnDefs);
    });

    document.getElementById("addRow").addEventListener("click", function() {
        rowData.push({});
        $scope.gridOptions.api.setRowData(rowData);
    });

    document.getElementById("clearGrid").addEventListener("click", function() {
        for(var i = 0; i<columnDefs.length;i++){
            columnDefs[i]={headerName: "",field: ""};
            $scope.gridOptions.api.setColumnDefs(columnDefs);
        }
    });
    
    
    document.getElementById("import").addEventListener("change",function(changeEvent){
        var reader = new FileReader();
        
        reader.onload = function(evt){
            var data = evt.target.result;
            var workbook = XLSX.read(data,{type:'binary'});
            var headerNamesImport = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]],{header: 1})[0];
            var importData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            console.log(importData);
            if(columnDefs.length<headerNamesImport.length){
                var lengther = headerNamesImport.length-columnDefs.length;
                for(var i = 0; i < lengther; i++){
                    columnDefs.push({ field: null, headerName: null, valueGetter: function dateValueGettter(params) {
                        var date = $filter("date")(params.getValue("issueDate"), 'yyyy-MM-dd');
                        return date;
                      },editable: true, resizable: true, sortable: true});
                    $scope.gridOptions.api.setColumnDefs(columnDefs);
                }
            }
        
            for(var i = 0; i<columnDefs.length;i++){
                /**/
                columnDefs[i]={headerName: headerNamesImport[i],field: headerNamesImport[i]};
                $scope.gridOptions.api.setColumnDefs(columnDefs);
            }
            for(var i =0;i<importData.length;i++){
                rowData[i]=importData[i];
                $scope.gridOptions.api.setRowData(rowData);
            }
            
        }

        reader.readAsBinaryString(changeEvent.target.files[0]);
    });

});