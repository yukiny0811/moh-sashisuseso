

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var bubbleImg = new Image();
bubbleImg.src = "img/bubble.png";

// context.drawImage(bubbleImg, 0, 0, canvas.width, canvas.height);

context.textAlign = "center";

// context.font = "32px serif";R
context.font = "52px 'Impact'";
context.fillStyle="rgb(33, 33, 33)";
context.fillText("さすが！", 125, 138);



// context.beginPath();
// context.fillStyle="red";
// context.rect(0, 0, 200, 200);
// context.closePath();
// context.fill();


// var type = 'image/png';
// var dataurl = canvas.toDataURL(type);
// var bin = atob(dataurl.split(',')[1]);
// var buffer = new Uint8Array(bin.length);
// for (var i = 0; i < bin.length; i++) {
//   buffer[i] = bin.charCodeAt(i);
// }
// var blob = new Blob([buffer.buffer], {type: type});

/* ajaxで送信 */
// var fd=new FormData();
// fd.append("file", blob,"test.png");
// var type = 'image/png';
// var xhr = new window.XMLHttpRequest();
// xhr.open("post","/send_created_image");
// xhr.responseType = 'blob';
// xhr.send(fd);


function sendData() {
  // let data = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // let data = canvas.toDataURL("image/png");
  let data = canvas.toDataURL("image/png").replace(/^.*,/, '');
  // $("#fileform").val(data);
  // let data = canvas.toDataURL("image/png").replace("image/png", "").replace("data:;base64,", "");
  
  
  // var type = 'image/png';
  // var dataurl = canvas.toDataURL(type);
  // var bin = atob(dataurl.split(',')[1]);
  // var buffer = new Uint8Array(bin.length);
  // for (var i = 0; i < bin.length; i++) {
  //   buffer[i] = bin.charCodeAt(i);
  // }
  // var blob = new Blob([buffer.buffer], {type: type});


  // var base64 = canvas.toDataURL('image/png'),
  //     bin = atob(base64.replace(/^.*,/, '')),
  //     buffer = new Uint8Array(bin.length);
  // 
  // for (var i = 0; i < bin.length; i++) {
  //     buffer[i] = bin.charCodeAt(i);
  // }

  let name = $("#gayaName").val();
  var formData = new FormData();
  
  formData.append("file", data);
  formData.append("name", name);
  var xhr = new XMLHttpRequest();
  xhr.open( "POST", "/send_created_image" , true);
  
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
  
  
  // function toBinary(canvas) {
  //     var base64 = canvas.toDataURL('image/png'),
  //         bin = atob(base64.replace(/^.*,/, '')),
  //         buffer = new Uint8Array(bin.length);
  //     for (var i = 0; i < bin.length; i++) {
  //         buffer[i] = bin.charCodeAt(i);
  //     }
  //     return buffer;
  // }
  // 
  // // Binaryデータを作成
  // var buf = toBinary(canvas);
  // var request = {
  //     url: '/send_created_image',
  //     method: 'POST',
  //     xhr2: true,
  //     // rawData: buf.buffer,
  //     data: {
  //       file: buf.buffer
  //     },
  //     success: function (response) {
  //         console.log(response.responseText);
  //     }
  // };
  // $.ajax(request);
  
  
  
}



function drawGaya() {
  var bubbleImg = new Image();
  bubbleImg.src = "img/bubble.png";
  
  context.clearRect(0, 0, canvas.width, canvas.height);

  // context.drawImage(bubbleImg, 0, 0, canvas.width, canvas.height);
  
  let text = $("#gayaText").val();

  context.textAlign = "center";

  context.font = "52px 'Impact'";
  context.fillStyle="rgb(33, 33, 33)";
  context.fillText(text, 125, 138);
}