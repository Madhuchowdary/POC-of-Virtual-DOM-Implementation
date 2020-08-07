function createList(inputjson){
  var container = document.getElementById('listContainer1') ;
  // create list and append to container div Normal way
  var ulTag = document.createElement('ul');
  container.append(ulTag);
  ulTag.setAttribute('id', "List");
  for (var i=0;i<inputjson.length;i++){
        var liTag = document.createElement('li');
        ulTag.append(liTag)
        liTag.setAttribute('id', inputjson[i].id);
        liTag.classList.add(inputjson[i].class);
        liTag.innerHTML = inputjson[i].name;
  }
        
       	ulTag.classList.add("Submenu");
        container.append(ulTag);
}

function createOptimizedList(inputjson){
  var container = document.getElementById('listContainer2') ;
  // create list and append to container div in optimized way
  var ulTag = document.createElement('ul');
  for (var i=0;i<inputjson.length;i++){
        var liTag = document.createElement('li');        
        liTag.setAttribute('id', inputjson[i].id);
        liTag.classList.add(inputjson[i].class);
        liTag.innerHTML = inputjson[i].name;
        ulTag.append(liTag);
  }
       	ulTag.classList.add("Submenu");
        container.append(ulTag);
}
var json =[{ name: "ListItem1",
             id : "lItem1",
             class : "listItem"
  
          },
          { name: "ListItem2",
             id : "iItem2",
             class : "listItem"
  
          },
          { name: "ListItem3",
             id : "lItem3",
             class : "listItem"
  
          },
          { name: "ListItem4",
             id : "lItem4",
             class : "listItem"
  
          },
           { name: "ListItem5",
             id : "lItem5",
             class : "listItem"
  
          },
          { name: "ListItem6",
             id : "lItem6",
             class : "listItem"
  
          },
          { name: "ListItem7",
             id : "lItem7",
             class : "listItem"
  
          },
          { name: "ListItem8",
             id : "lItem8",
             class : "listItem"
  
          },
          { name: "ListItem9",
             id : "lItem9",
             class : "listItem"
  
          },
          { name: "ListItem10",
             id : "lItem10",
             class : "listItem"
  
          }]
var t0 = performance.now()
createList(json)
var t1 = performance.now()
console.log("Call createList took " + (t1 - t0) + " milliseconds.");
var t2 = performance.now()
createOptimizedList(json)
var t3 = performance.now()
console.log("Call to createOptimizedList took " + (t3 - t2) + " milliseconds.");
