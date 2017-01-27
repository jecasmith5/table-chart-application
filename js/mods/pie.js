define([],function(){

return{
  pie:function(updater = false){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var inputData = [
        ['Hulk', 20],
        ['Captain America', 10],
        ['Iron Man', 20],
        ['Spider Man',50]
      ];
      var data = new google.visualization.DataTable();
      var row = [];
      var myTable=document.getElementById('table');
        var td=document.getElementsByTagName('td');
          row1 = [
            td[0].innerText,
            parseInt(td[4].innerText)
          ];
          row2 = [
            td[1].innerText,
            parseInt(td[5].innerText)
          ];
          row3 = [
            td[2].innerText,
            parseInt(td[6].innerText)
          ];
          row4 = [
            td[3].innerText,
            parseInt(td[7].innerText)
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
      var options = {'title':'Pie Chart','width':550,'height':400, 'is3D':true};
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
