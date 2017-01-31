require(['pie','line','bar'],function(pie,line,bar){
  bar.bar();
  var myTable=document.getElementById('table');
  var td=document.getElementsByTagName('input');
  if(isNaN(td[4].value || td[5].value || td[6].value || td[7].value )){
    console.log('You must enter a number');
  }
  buttons.addEventListener('click', function(e){
    if(e.target.id == 'line'){
      var myTable = document.getElementById('table');
          myTable.addEventListener('input',function(e){
                line.line(true);
                })
      line.line();
    }
    if(e.target.id == 'bar'){
      var myTable = document.getElementById('table');
          myTable.addEventListener('input',function(e){
            bar.bar(true);
            })
      bar.bar();
    }
    if(e.target.id == 'pie'){
      var myTable = document.getElementById('table');
          myTable.addEventListener('input',function(e){
            pie.pie(true);
            })
      pie.pie();

    }
  })
})
