
function getDataTable(){

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Favorite Cities');
      data.addColumn('number', 'Rating');	  
      data.addRows([
        ['Baltimore', 10],
        ['Atlanta', 9],
        ['Washington, D.C.', 8], 
        ['New York', 7],
        ['Dallas', 8]
      ]);
	  	  	  	  
	  return data;

}
