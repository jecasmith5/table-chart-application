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
            td[1].value,
            parseInt(td[5].value)
          ];
          row3 = [
            td[2].value,
            parseInt(td[6].value)
          ];
          row4 = [
            td[3].value,
            parseInt(td[7].value)
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
      var options = {'title':'Pie Chart','width':550,'height':400, 'is3D':true,colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']};
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
