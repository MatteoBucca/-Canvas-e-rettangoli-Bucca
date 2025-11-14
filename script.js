function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75)
  ctx.fillStyle = "#00FF00";

  ctx.fillRect(0, 0, 10, 10);
  ctx.fillRect(20, 20, 10, 10);
  
  
}
function button2Function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 200,200)
  ctx.fillStyle = "#00FF00";

 for (let i = 0; i <= 100; i += 20) {
    ctx.fillRect(i, i, 10, 10);
  }

  
  for (let i = 0; i <= 100; i += 20) {
    ctx.fillRect(100 - i, i, 10, 10);
  }
}


