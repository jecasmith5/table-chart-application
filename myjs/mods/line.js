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
        parseInt(td[1].value),
        parseInt(td[2].value),
        parseInt(td[3].value),
        parseInt(td[4].value)

      ];
      row2 = [
        td[5].value,
        parseInt(td[6].value),
        parseInt(td[7].value),
        parseInt(td[8].value),
        parseInt(td[9].value)
      ];
      row3 = [
        td[10].value,
        parseInt(td[11].value),
        parseInt(td[12].value),
        parseInt(td[13].value),
        parseInt(td[14].value)
      ];
      row4 = [
        td[15].value,
        parseInt(td[16].value),
        parseInt(td[17].value),
        parseInt(td[18].value),
        parseInt(td[19].value)

      ];
      data.addColumn('string', 'Name');
      data.addColumn('number', 'ItemsSold');
      data.addColumn('number', '$ earned');
      data.addColumn('number', 'Unit Cost');
      data.addColumn('number', 'Prediction');
      data.addRows([
        row1,
        row2,
        row3,
        row4
        ]);
      // Instantiate and draw the chart.
      var chart = new google.visualization.LineChart(document.getElementById('myLineChart'));
      var options = {'title':'Line Chart','width':550,'height':400,hAxis:{title: 'Sales',},vAxis: {title: 'Employee'},lineWidth:5,colors:['#000000','#D2691E','#A9A9A9','#1E90FF']};
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
