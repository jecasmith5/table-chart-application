define([],function(){

return{
  pie:function(updater = false){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.

      var data = new google.visualization.DataTable();
      var myTable=document.getElementById('table');
        var td=document.getElementsByTagName('input');

          row1 = [
            td[0].value,
            parseInt(td[4].value)
          ];
          row2 = [
            td[5].value,
            parseInt(td[9].value)
          ];
          row3 = [
            td[10].value,
            parseInt(td[14].value)
          ];
          row4 = [
            td[15].value,
            parseInt(td[19].value)
          ];
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Fans');
      data.addRows([
        row1,
        row2,
        row3,
        row4
        ]);

      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
      var options = {'title':'Amount Predicted','width':550,'height':400, 'is3D':true,colors: ['black', 'purple', 'silver', 'blue', '#f6c7b6']};
      document.getElementById('myBarChart').style.zIndex=0;
      document.getElementById('myPieChart').style.zIndex=1;
      document.getElementById('myLineChart').style.zIndex=0;
      chart.draw(data, options);
      if(updater){
        return chart.draw(data, options);
      }
    }
    console.log('hi');
    }
  }
})
