var rowCount =27;
var colCount =27;
var selectedRowID=10000;
var arr = [{value: 1},{value: 2}];

//import {fromEvent} from 'rxjs';



//textField.setAttribute("value", "Hello World!");
var k=0;
document.body.onload = function(){dynamicTable()};
    
    function dynamicTable(){
    
    
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id","addrow")
    var txtbtnrow = document.createTextNode("Add Row");
    document.body.appendChild(btn);
    document.addEventListener("click",click);
    btn.appendChild(txtbtnrow); 
   

    var btncol = document.createElement("BUTTON");
    btncol.setAttribute("id","addcol")
    var txtbtncol = document.createTextNode("Add Column");
    document.body.appendChild(btncol);
    //document.getElementById("addcol").addEventListener("click",AddColumn);
    btncol.appendChild(txtbtncol); 

    var btndelrow = document.createElement("BUTTON");
    btndelrow.setAttribute("id","deleterow")
    var txtbtndelrow = document.createTextNode("Delete Row");
    document.body.appendChild(btndelrow);
    document.addEventListener("click",click);
    btndelrow.appendChild(txtbtndelrow); 

    var btndelcol = document.createElement("BUTTON");
    btndelcol.setAttribute("id","deletecol")
    var txtbtndelcol = document.createTextNode("Delete Column");
    document.body.appendChild(btndelcol);
    document.addEventListener("click",click);
    btndelcol.appendChild(txtbtndelcol); 

    var calctextbox = document.createElement('INPUT');
    calctextbox.setAttribute("type", "text");
    calctextbox.setAttribute("id","mytextbox");
    document.body.appendChild(calctextbox);

    var btncalculate = document.createElement("BUTTON");
    btncalculate.setAttribute("id","calculate")
    var txtbtncalculate = document.createTextNode("Calculate");
    document.body.appendChild(btncalculate);
    document.addEventListener("click",calculation);
    btncalculate.appendChild(txtbtncalculate); 

    var btncsv = document.createElement("BUTTON");
    btncsv.setAttribute("id","downloadcsv")
    var txtbtncsv = document.createTextNode("Download");
    document.body.appendChild(btncsv);
    document.addEventListener("click",click);
    btncsv.appendChild(txtbtncsv); 

    var ImportCSV = document.createElement("INPUT", type="file");
    ImportCSV.setAttribute("type", "file");
    ImportCSV.setAttribute("id", "fileImport");
    ImportCSV.setAttribute("onChange", "handleFiles(this.files)");
    ImportCSV.setAttribute("multiple", true);
    ImportCSV.addEventListener("change", handleFiles, false);
    document.body.appendChild(ImportCSV);
    //const selectedFile = document.getElementById('fileImport').files[0];
    
    var anstextbox = document.createElement('INPUT');
    anstextbox.setAttribute("type", "text");
    anstextbox.setAttribute("id","anstextbox");
    document.body.appendChild(anstextbox);
    

     var x = document.createElement("TABLE");
     //var br = document.createElement("BR");
     //var k;
     x.setAttribute("id", "myTable");
     document.body.appendChild(x);
     for(let i=0;i<27;i++)
     {
         var row = x.insertRow(i);
         row.setAttribute("id",i);
         for(let j=0;j<27;j++)
         {
             var cell = row.insertCell(j);
             var letter = String.fromCharCode(j+65);
             id = cell.setAttribute("id",""+letter+" "+i);
             var selectedRow = event.target;
            // var textField = document.createElement("INPUT");
            // textField.setAttribute("type", "text");
            // cell.appendChild(textField);
            //textField.setAttribute("id",k);
             //cell.appendChild(textField);
             //console.log(parseInt(id));
             if(i==0)
               {
               cell.innerHTML = String.fromCharCode(j+65);
               }
               if(i>0&&j==0)
               {
               cell.innerHTML = j+i;
               }
               //console.log(k);
               k=k+1;
            
        }
     }
    }

     function click (event){
        console.log(event.target);
        var reqdTable = document.getElementById("myTable");
        if(event.target.tagName == 'BUTTON')
        {
            let buttonID = event.target.getAttribute("id");
            if(buttonID == "addrow")
            {
                if(selectedRowID!=10000)
                {
                console.log("here");
               for(let i=0;i<reqdTable.rows.length;i++)
               {
                //console.log("here1");
                //console.log(reqdTable.rows[i].getAttribute("id"));
                console.log(selectedRowID[1]);
                console.log(reqdTable.rows[i].getAttribute("id"));
                   if(reqdTable.rows[i].getAttribute("id")==selectedRowID[1])
                   {
                    //console.log(reqdTable.rows[i].getAttribute("id"));
                    var newRow = reqdTable.insertRow(i);
                    console.log("here1");
                    for(let j=0;j<colCount;j++)
                    {
                        console.log("here2");
                        var newtd = document.createElement('td');
                        newtd = newRow.insertCell(j);
                        // var textField = document.createElement("INPUT");
                        // textField.setAttribute("type", "text");
                        // newtd.appendChild(textField);
                        i = reqdTable.rows.length;
                    }
                   }
               }
               selectedRowID = 10000;
               }
                   else
                   {
                     var newRow = reqdTable.insertRow(reqdTable.rows.length);
                     for(let j=0;j<colCount;j++)
                    {
                        var newtd = document.createElement('td');
                        newtd = newRow.insertCell(j);
                        // var textField = document.createElement("INPUT");
                        // textField.setAttribute("type", "text");
                        // newtd.appendChild(textField);
                    }
                     
                   }
                   rowCount++;
                   for(let i=0;i<reqdTable.rows.length;i++)
                   {
                     let hereRow = reqdTable.rows[i];
                     hereRow.setAttribute("id",i);
                     for(let j =0;j<colCount;j++)
                     {
                         let hereCell = hereRow.cells[j];
                         var letter = String.fromCharCode(j+65);
                         hereCell.setAttribute("id",""+letter+" "+i);
                         if(i==0)
                            {
                                hereCell.innerHTML = String.fromCharCode(j+65);
                            }
                            if(i>0&&j==0)
                            {
                                hereCell.innerHTML = j+i;
                            }
                     }
                   }
            }
            if(buttonID=="addcol")
            {
                if(selectedRowID!=10000)
                {
                for(let i=0;i<rowCount;i++)
                {
                    var currentRow = reqdTable.rows[i];
                    for(let j=0;j<colCount;j++)
                    {
                        var selectedcell = currentRow.cells[j].getAttribute("id")
                        var selectedcellarray = selectedcell.split(' ');
                        if(selectedcellarray[0]==selectedRowID[0])
                        {
                            var colcell = currentRow.insertCell(j+1);
                            // var textField = document.createElement("INPUT");
                            // textField.setAttribute("type", "text");
                            // colcell.appendChild(textField);
                            j = colCount;
                        }
                    }
                }
                selectedRowID = 10000;
                }  
                else
                {
                    
                    for(var i=0,row;row=reqdTable.rows[i];i++)
                    {
                        var colcell = row.insertCell(row.length);
                        // var textField = document.createElement("INPUT");
                        // textField.setAttribute("type", "text");
                        // colcell.appendChild(textField);
                        
                    }
       
                }
                colCount++;
                for(let i=0;i<reqdTable.rows.length;i++)
                   {
                     let hereRow = reqdTable.rows[i];
                     hereRow.setAttribute("id",i);
                     for(let j =0;j<colCount;j++)
                     {
                         let hereCell = hereRow.cells[j];
                         var letter = String.fromCharCode(j+65);
                         hereCell.setAttribute("id",""+letter+" "+i);
                         if(i==0)
                            {
                                
                                hereCell.innerHTML = String.fromCharCode(j+65);
                            }
                            if(i>0&&j==0)
                            {
                                hereCell.innerHTML = j+i;
                            }
                     }
                   }
            }
            if(buttonID=="deleterow")
            {
                if(selectedRowID!=10000)
                {
                    console.log("here");
                    for(let i=0;i<reqdTable.rows.length;i++)
                    {
                     //console.log("here1");
                     //console.log(reqdTable.rows[i].getAttribute("id"));
                     console.log(selectedRowID[1]);
                     console.log(reqdTable.rows[i].getAttribute("id"));
                        if(reqdTable.rows[i].getAttribute("id")==selectedRowID[1])
                        {
                         //console.log(reqdTable.rows[i].getAttribute("id"));
                         reqdTable.deleteRow(i);
                        }
                    }
                    selectedRowID = 10000; 
                    rowCount--;
                }
                else
                {
                    alert("No row selected!");
                }
                for(let i=0;i<reqdTable.rows.length;i++)
                   {
                     let hereRow = reqdTable.rows[i];
                     hereRow.setAttribute("id",i);
                     for(let j =0;j<colCount;j++)
                     {
                        var letter = String.fromCharCode(j+65);
                         let hereCell = hereRow.cells[j];
                         hereCell.setAttribute("id",""+letter+" "+i);
                         if(i==0)
                            {
                                hereCell.innerHTML = j;
                            }
                            if(i>0&&j==0)
                            {
                                hereCell.innerHTML = j+i;
                            }
                            //console.log(k);
                           
                         
                     }
                   }

            }
            if(buttonID=="deletecol")
            {
                if(selectedRowID!=10000)
                {
                for(let i=0;i<rowCount;i++)
                {
                    var currentRow = reqdTable.rows[i];
                    for(let j=0;j<colCount;j++)
                    {
                        var selectedcell = currentRow.cells[j].getAttribute("id")
                        var selectedcellarray = selectedcell.split(' ');
                        if(selectedcellarray[0]==selectedRowID[0])
                        {
                            currentRow.deleteCell(j);
                            j = colCount;
                        }
                    }
                }
                selectedRowID = 10000;
                }  
                else
                {
                    alert("No column selected!");
                }
                colCount--;
                for(let i=0;i<reqdTable.rows.length;i++)
                   {
                     let hereRow = reqdTable.rows[i];
                     hereRow.setAttribute("id",i);
                     for(let j =0;j<colCount;j++)
                     {
                         let hereCell = hereRow.cells[j];
                         var letter = String.fromCharCode(j+65);
                         hereCell.setAttribute("id",""+letter+" "+i);
                         if(i==0)
                            {
                                hereCell.innerHTML = String.fromCharCode(j+65);
                            }
                            if(i>0&&j==0)
                            {
                                hereCell.innerHTML = j+i;
                            }
                     }
                   }
            }
            if(buttonID=="downloadcsv")
            {
                var csv = [];
                var rows = document.querySelectorAll("table tr");
                
                for (var i = 0; i < rows.length; i++) {
                    var row = [], cols = rows[i].querySelectorAll("td");
                    
                    for (var j = 0; j < cols.length; j++) 
                    {
                        //debugger
                        row.push(cols[j].innerText);
                    }
                    csv.push(row); 
                    csv.push("\n");
                        
                }
                var csvFile = new Blob([csv], {type: "text/csv"});
                downloadLink = document.createElement("a");
                downloadLink.download = "Assignment6";
                downloadLink.href = window.URL.createObjectURL(csvFile);
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }

        }
        if(event.target.tagName == "TD")
        {
            
            
            selectedRowID = event.target.getAttribute("id").split(' ');
            console.log(selectedRowID[1]);
            var textField = document.createElement("INPUT");
            textField.setAttribute("type", "text");
            event.target.appendChild(textField);
            
        }
        if(event.target.tagName == "INPUT")
        {
            //console.log(event.target.parentNode.tagName);
            event.target.addEventListener("keyup",function(e){
                    if(e.keyCode == 13)
                    {
                    var userinput = event.target.value;
                    // if(userinput)
                    // {
                    //     //arr.push(userinput);
                    // }
                    event.target.parentNode.innerHTML = userinput;
                    
                    }
            }
            )
        }

         
    
    }

    
    var start;
    var startrow;
    var startcol;
    var end;
    var endrow;
    var endcol;
    var res2;
    var start2;
    var end2;
    function calculation()
    {
        var str = document.getElementById("mytextbox").value;
        

        
        var rows = [];
        
        if(str.includes(':'))
        {
            var res = str.split("(");
            var operation = res[0];
            console.log(operation);
            var arr = res[1].split(":");
            start = arr[0];
            startrow = start.split("")[1];
            startcol = start.split("")[0];
            end = arr[1].split(")")[0];
            endrow = end.split("")[1];
            endcol = end.split("")[0];
            console.log(start);
            console.log(startrow);
            console.log(startcol);
            console.log(end);
            console.log(endrow);
            console.log(endcol);
         console.log("here");
        //let calctable = document.getElementById("myTable");
        //let allcells = document.querySelectorAll("table tr td");
        if(operation=="SUM")
        {
        Rx.Observable.from(document.querySelectorAll("table tr td"))   // <1>
          .filter(cell => getReqdCells(cell))
          .map(cell => cell.childNodes[0].value - '0')
          .reduce((sum,cell) => sum+cell,0)
          .subscribe(sum => document.getElementById("anstextbox").value=sum,
          err => console.log(err),
          () => console.log("streaming is over")
          ); // <2>
          
         
        console.log("This is the last line of the script");
        }
        if(operation=="MUL")
        {
        Rx.Observable.from(document.querySelectorAll("table tr td"))   // <1>
          .filter(cell => getReqdCells(cell))
          .map(cell => cell.childNodes[0].value - '0')
          .reduce((prod,cell) => prod*cell,1)
          .subscribe(sum => console.log(sum),
          err => console.log(err),
          () => console.log("streaming is over")
          ); // <2>
          
         
        console.log("This is the last line of the script");
        }
       }
       else if(str.includes('+'))
       {
         res2 = str.split("+");
         start2 = res2[0].split("");
         end2 = res2[1].split("");
        console.log("str"+str);
        console.log(res2);
        
        Rx.Observable.from(document.querySelectorAll("table tr td"))   // <1>
        .filter(cell => getReqdCells2(cell))
        .map(cell => cell.childNodes[0].value - '0')
        .reduce((sum,cell) => sum+cell,0)
        .subscribe(sum => document.getElementById("anstextbox").value=sum,
        err => console.log(err),
        () => console.log("streaming is over")
        ); // <2>
        

        
       
        console.log("This is the last line of the script");
       }
        

        
        
    //     // const { fromEvent } = Rx.Observable;
    //     // const move$ = fromEvent(document, 'mousemove');
    //     // const log = x => console.log(x);
    //     // move$.subscribe(log);
    //     const { from } = Rx.Observable;
    //     const { sum } = Rx.Observable;
    //     let source = from(arr)
    // });

    //     let subscription = source.subscribe(
    //     function (x) {
    //     console.log('Next: ' + x);
    //     },
    //     function (err) {
    //         console.log('Error: ' + err);
    //     },
    //     function () {
    //         console.log('Completed');
    //     });

    }
    function getReqdCells(cell)
    {
        var cellID = cell.getAttribute("id").split(' ');
        //console.log("cellID : " + cellID[1]);
        if(cellID[0]==startcol)
        {
            if(((cellID[1] - '0' ) >=startrow) && ((cellID[1] - '0') <=endrow))
            {
                //console.log("startrow" + startrow);
                console.log("cellvalue : " + cell.childNodes[0].value);
                return cell;
                
            }
        }
    }

    function getReqdCells2(cell)
    {
        var cellID = cell.getAttribute("id").split(' ');
        //console.log("start2 : " + start2);
        //console.log("cellid : " + cellID);
        if((start2[0]==cellID[0]&&start2[1]==cellID[1])||(end2[0]==cellID[0]&&end2[1]==cellID[1]))
        {
                //console.log("startrow" + startrow);
                console.log("cellvalue : " + cell.childNodes[0].value);
                return cell;
                
        }
    }

    function handleFiles() {
        var importcsvtable = document.getElementById("myTable");
        console.log(importcsvtable)
        const selectedFile = document.getElementById('fileImport').files[0];
        var reader= new FileReader()
        reader.readAsText(selectedFile)
       // console.log(fileList)
        reader.onload = function(e){
           // console.log(e.target.result)
            let table = document.getElementById('tableID');

            let rows = e.target.result.split("\n");
            for (let i = 0; i < rows.length; i++) {
                let cells = rows[i].split(",");
                    for (let j = 0; j < cells.length; j++) {
                        importcsvtable.rows[i+1].cells[j+1].innerHTML = cells[j];
                    }

            }
        }

    }
