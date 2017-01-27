define([],function(){

return{
  bar:function(){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      rows = [];
      var inputData = [
        ['Reese', 20000],
        ['Jeremiah', 32000],
        ['John', 65000],
        ['Jacob',40000]
      ];
      data.addColumn({type: 'string', id: 'Name'});
      data.addColumn({type:'number', id:'Salary'});
      data.addRows(inputData);
      console.log(inputData);

      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
      var options = {'title':'Bar Chart','width':550,'height':400};
      chart.draw(data, options);
    }
    console.log('hi');
    }
  }
})
