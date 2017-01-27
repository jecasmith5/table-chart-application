require(['pie', 'line','bar','update'],function(pie,line,bar,update){
  var inputData = [
    ['Reese', 20000],
    ['Jeremiah', 32000],
    ['John', 65000],
    ['Jacob',40000]
  ];
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
