define([],function(){

return{
  line:function(updater = false){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var inputData = [
        ['Hulk', 20],
        ['Captain America', 10],
        ['Iron Man', 20],
        ['Spider Man',50]
      ];
      // Define the chart to be drawn.
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
      data.addColumn('string', 'Task');
      data.addColumn('number', 'Hours');
      data.addRows([
        row1,
        row2,
        row3,
        row4
        ]);


      // Instantiate and draw the chart.
      var chart = new google.visualization.LineChart(document.getElementById('myLineChart'));
      var options = {'title':'Line Chart','width':550,'height':400};
      chart.draw(data, options);
      //allows charts to be stacked
      document.getElementById('myBarChart').style.zIndex=0;
      document.getElementById('myPieChart').style.zIndex=0;
      document.getElementById('myLineChart').style.zIndex=1;
      if(updater){
        return chart.draw(data, options);
      }
    }
    console.log('hi');
    }
  }
})
