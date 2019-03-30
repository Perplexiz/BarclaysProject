agGrid.initialiseAgGridWithAngular1(angular);
agGrid.LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_25_April_2019__MTU1NjE0NjgwMDAwMA==5095db85700c871b2d29d9537cd451b3");
var module = angular.module('example', ['agGrid']);

module.controller('exampleCtrl', function($scope, $http) {

    var columnDefs = [
        //rowGroup: true
          {headerName: "Lender",field: "lender"},
          {headerName: "Rule Type",field: "ruleType"},
          {headerName: "Raw Units",field: "rawUnit"},
          {headerName: "Raw Units $",field: "rawUnit$"},
          {headerName: "Available Units",field: "availUnit"}
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
        { lender: 'Lender 10', ruleType: 'Moderate', rawUnit: 16264597, rawUnit$: 2272489493, availUnit: 16264597, availUnit$: 2272489493, loadDate: '2/27/19 4:06'}
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
        paginationPageSize: 20,

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



    
    document.getElementById("exporter").addEventListener("click", function() {
        var fileNamer = prompt("File Name:");
        var sheetNamer = prompt("Sheet Name:");
        var params = {
            fileName: fileNamer,
            sheetName: sheetNamer
        };
        $scope.gridOptions.api.exportDataAsExcel(params);
    });
    document.getElementById("exportCSV").addEventListener("click", function() {
        var fileNamer = prompt("File Name:");
        var sheetNamer = prompt("Sheet Name:");
        var params = {
            fileName: fileNamer,
            sheetName: sheetNamer
        };
        $scope.gridOptions.api.exportDataAsCsv(params);
    });

    

    document.getElementById("addCol").addEventListener("click", function() {
        //var colName=document.getElementById('input1').value;
        var colName = prompt("Column Name:");
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
        columnDefs = [];
        rowData = [];
        $scope.gridOptions.api.setColumnDefs(columnDefs);
        $scope.gridOptions.api.setRowData(rowData);
    });
    
    
    document.getElementById("import").addEventListener("change",function(changeEvent){
        columnDefs = [];
        rowData = [];
        $scope.gridOptions.api.setColumnDefs(columnDefs);
        $scope.gridOptions.api.setRowData(rowData);
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
                    columnDefs.push({ field: null, headerName: null, editable: true, resizable: true, sortable: true});
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