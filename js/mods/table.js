require(['pie', 'line','bar'],function(pie,line,bar){

  //update.updateTable();
  var myTable = document.getElementById('table');
      myTable.addEventListener('input',function(e){
        bar.bar(true);
        line.line(true);
        pie.pie(true);
        })



  buttons.addEventListener('click', function(e){
    if(e.target.id == 'line'){
      line.line();
    }
    if(e.target.id == 'bar'){
      bar.bar();
    }
    if(e.target.id == 'pie'){
      pie.pie();

    }
  })
})
