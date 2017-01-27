define([],function(){


return{
  bar:function(updater = false){


    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      var defaultData = [
        ['Hulk', 20],
        ['Captain America', 10],
        ['Iron Man', 20],
        ['Spider Man',50]
      ];
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
      data.addColumn({type:'string', id:'Heros'});
      data.addColumn({type:'number', id:'Fans'});
      data.addRows([
        row1,
        row2,
        row3,
        row4
      ]);
      var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
      var options = {'title':'Bar Chart','width':550,'height':400};
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
