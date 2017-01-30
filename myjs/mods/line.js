define([],function(){

return{
  line:function(updater = false){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      var row = [];
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
      var options = {'title':'Line Chart','width':550,'height':400,hAxis:{title: 'Task',},vAxis: {title: 'Hours Per Week'},lineWidth:5,colors:['#B22222']};
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
