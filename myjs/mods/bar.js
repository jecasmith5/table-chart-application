
define([],function(){


return{
  bar:function(updater = false){


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
      data.addColumn({type:'string', id:'Heros'});
      data.addColumn({type:'number', id:'Fans'});
      data.addRows([
        row1,
        row2,
        row3,
        row4
      ]);
      var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
      var options = {'title':'Bar Chart','width':550,'height':400,hAxis:{title: 'Hours Per Week',},vAxis: {title: 'Task'},colors:['#B22222','#D2691E']};
      chart.draw(data, options);
      document.getElementById('myBarChart').style.zIndex=1;
      document.getElementById('myPieChart').style.zIndex=0;
      document.getElementById('myLineChart').style.zIndex=0;
      if(updater){
        return chart.draw(data, options);
      }

          }
        }
      }
    })
