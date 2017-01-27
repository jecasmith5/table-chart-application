define([],function(){

return{
  pie:function(){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Salary');
      data.addRows([
        ['Reese', 20000],
        ['Jeremiah', 32000],
        ['John', 65000],
        ['Jacob',40000]
      ]);
      var csv = google.visualization.dataTableToCsv(data);
          console.log(csv);
      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
      var options = {'title':'Pie Chart','width':550,'height':400};

      chart.draw(data, options);
    }
    console.log('hi');
    }
  }
})
