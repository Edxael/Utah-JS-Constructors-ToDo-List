console.log("Hello from code.js, here we go...")


var data = []; // data will be save on runtime memory.

function taskConstructor(text){
  this.task = text;
  this.done = false;
}


function add(){
  var newTask = document.getElementById("data-1").value;
  document.getElementById("data-1").value = "";

  if(newTask !== ""){
    var taskToPush = new taskConstructor(newTask);  // using constructor to create new object.
    data.push( taskToPush );

    display();
  }

}



function del(){
  for(x = 0; x < data.length; x++){
    if(data[x].done === true){
      delete data[x];
    }
  }

  data = data.filter((x) => x !== undefined);

  display();
}




function display(){
  var taskHolder = document.getElementById("task-holder");
  document.getElementById("task-holder").innerHTML = "";

  for(x in data){
    var newDiv = document.createElement("div");

    newDiv.className = "task-not-done";
    newDiv.appendChild(createCheckBox(x));
    newDiv.appendChild(createParagraph(data[x]["task"]));

    taskHolder.insertBefore(newDiv, taskHolder.childNodes[0]);

  }

}



function createParagraph(text){
  var par1 = document.createElement("p");
  par1.innerText = text;
  par1.className = "gral-para";
  return par1;
}



function createCheckBox(x){
  var chekBox = document.createElement("input");
  chekBox.type = "checkbox";
  chekBox.className = "check-Box";
  chekBox.setAttribute('onClick', "acomplishTask("+ x +")");
  return chekBox;
}



function acomplishTask(posx) {

  for(x = 0; x < data.length; x++){
    if(x === posx){
      data[x].done = true;
    }
  }

}
