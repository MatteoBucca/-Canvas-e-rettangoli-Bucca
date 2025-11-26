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

    for (let y = 0; y < canvas.height ; y += passo) {
        for (let x = 0; x < canvas.width ; x += passo) {
            ctx.fillRect(x, y, lato, lato);
        }
    }
    ctx.fillStyle = "red";
    for (let i = 0; i < canvas.height; i += 20) {
   
    ctx.fillRect(190- i, i, 10, 10);
    
  }

 
}
function button4Function(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const cellSize = 10;
  const step = 20; 

  const rows = canvas.height / step;
  const cols = canvas.width / step;


  ctx.fillStyle = "#00ff37ff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  ctx.fillStyle = "#2600ffff";

  for (let r = 0; r < 200; r+=20) {
    for (let c = 0; c < 200; c+=20) {

      
      if (r + c >= 200 - 1) continue;

      ctx.fillRect(c , r , cellSize, cellSize);
    }
  }

  // ---- DIAGONALE GIALLA ----
  ctx.fillStyle = "#e1ff00ff";
  for (let i = 0; i < 200;  i += 20) {
    ctx.fillRect(190- i, i, 10, 10);
  }
  ctx.fillStyle = "#0011ffff";
  for (let i = 0; i < 200;  i += 20) {
    ctx.fillRect(200- i, i, 10, 10);
  }
  ctx.fillStyle = "#e1ff00ff";
  for (let i = 0; i <= 80; i += 20) {
    ctx.fillRect(i, i, 10, 10);
  }

}
