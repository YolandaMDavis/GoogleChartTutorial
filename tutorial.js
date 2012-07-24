
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
function getXYDataTable(){

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Favorite Cities');
      data.addColumn('number', 'Yolanda\'s Ranking');	
	  data.addColumn('number', 'State Media Income');	
	 data.addColumn('number', 'Population');		  
      data.addRows([
        ['Baltimore', 10,64025,619493],
        ['Atlanta', 9,44108,432427],
        ['Washington, D.C.', 8,55528,617996], 
        ['New York', 7,49826,8244900],
        ['Dallas', 8,47464,1223200]
      ]);
	  	  	  	  
	  return data;

}

function getAverageDataTable(){

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Favorite Cities');
      data.addColumn('number', 'Yolanda\'s Ranking');	
	  data.addColumn('number', 'Average Ranking');		  
      data.addRows([
        ['Baltimore', 10,8.4],
        ['Atlanta', 9,8.4],
        ['Washington, D.C.', 8,8.4], 
        ['New York', 7,8.4],
        ['Dallas', 8,8.4]
      ]);
	  	  	  	  
	  return data;
}

//creating a namespace
var ymd = {};

ymd.HighColumnChart = function(container) {
  this.containerElement = container;
}
    
ymd.HighColumnChart.prototype.draw = function(data, options) {

   var seriesArray = convertSeriesColumnToArray(data,['column'],null);
   var chart = new Highcharts.Chart({
        chart: {
            renderTo: this.containerElement.id,
			type: 'column'
        },
		title: {
			text: options.title			
		},
    
        xAxis: {
            categories: convertCategoryColumnToArray(data)           
        },
    
        series: seriesArray
       
    }); 
    
};

ymd.HighPieChart = function(container) {
  this.containerElement = container;
}

ymd.HighPieChart.prototype.draw = function(data, options) {
   var seriesArray =  convertSeriesColumnToArray(data,['pie'],null);
   var chart = new Highcharts.Chart({

        chart: {
            renderTo: this.containerElement.id,
			type: 'column'
        },
		title: {
			text: options.title			
		},  
		xAxis: {
            categories: convertCategoryColumnToArray(data)           
        },		
        series: seriesArray

    }); 
    
};

ymd.HighComboChart = function(container) {
  this.containerElement = container;
}

ymd.HighComboChart.prototype.draw = function(data, options) {

   var chart = new Highcharts.Chart({

        chart: {
            renderTo: this.containerElement.id,			
        },
		title: {
			text: options.title			
		},
		xAxis:{
			categories: convertCategoryColumnToArray(data)
		},
		series: convertSeriesColumnToArray(data,['column','spline'],null)	
    }); 
    
};

function convertTableToArray(data){
	var tableArray = new Array();
    var seriesArray;
	
    for (i = 0; i < data.getNumberOfRows(); i++){		
		seriesArray = new Array();
		for(j = 0; j < data.getNumberOfColumns(); j++){
			seriesArray.push(data.getValue(i,j));   
		}
		tableArray.push(seriesArray);
    }      	
	
    return tableArray;                          
}

function convertCategoryColumnToArray(data){
    var dataArray = new Array();	
    for (i = 0; i < data.getNumberOfRows(); i++){			  	     	
		dataArray.push(data.getValue(i,0));                		 
    }                       	
	return dataArray;
}

function convertSeriesColumnToArray(data,type,colIndex){
	var max = -1;
	if(colIndex == null){
		max = data.getNumberOfColumns();
	}
	else{
		max = colIndex
	}
	var seriesArray = new Array();		
    for (i = 1; i < max; i++){	
		var dataArray = new Array();		
		var type = type;
		var name = data.getColumnLabel(i);
				
		for(j = 0; j < data.getNumberOfRows(); j++){		
		  	dataArray.push(data.getValue(j,i));                		 
		}
		
		var chartObject = {'type':type[i-1],'name':name,'data':dataArray};				
		seriesArray.push(chartObject);
		
    }                       
		
    return seriesArray;                           
}

