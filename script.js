function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75)
  ctx.fillStyle = "#00FF00";

  ctx.fillRect(0, 0, 10, 10);
  ctx.fillRect(20, 20, 10, 10);
  
  
}

function button2Function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 200,200)
  ctx.fillStyle = "#00FF00";

 for (let i = 0; i <= 180; i += 20) {
    ctx.fillRect(i, i, 10, 10);
  }

  
  for (let i = 0; i <= 180; i += 20) {
   
    ctx.fillRect(190- i, i, 10, 10);
    
  }
 
}
function button3Function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const lato = 10;   // lato quadratino
    const passo = 20;  // distanza tra quadratini

    ctx.fillStyle = "dodgerblue";

    for (let y = 20; y < canvas.height - 20; y += passo) {
        for (let x = 20; x < canvas.width - 20; x += passo) {
            ctx.fillRect(x, y, lato, lato);
        }
    }
    ctx.fillStyle = "red";
    for (let i = 0; i < canvas.height - 20; i += 20) {
   
    ctx.fillRect(190- i, i, 10, 10);
    
  }
 
}


