
window.addEventListener("load",function(){
 
  updateSettings();
  
});

function updateSettings()
{
  
  httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function(){
    
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        
        var response = JSON.parse(httpRequest.responseText);
        
        for (var key in response) {
          
          var button = document.getElementById(key);
          
          if(response[key] == "On")
          {
            button.classList.remove("w3-red");
            button.classList.add("w3-green");
          }
          else
          {
            button.classList.remove("w3-green");
            button.classList.add("w3-red");
          }
          
          button.setAttribute("data-value", response[key]);
          
        }
        
      } else {
        
      }
    }
    
  };
  
  httpRequest.open('GET', 'current.php');
  httpRequest.send();   
  
}

var buttons = document.getElementsByTagName("button");

for(var i = 0; i < buttons.length; i ++)
{
  buttons[i].addEventListener("click", function(e){
    
    /*
    console.log(e);
    console.log(e.path[0]);
    console.log(e.target);
    console.log(e.target.getAttribute("data-value"));
    console.log(e.target.getAttribute("id"));
    */
    
    var value = e.target.getAttribute("data-value") == "On" ? "Off" : "On";
    var name = e.target.getAttribute("id");
    
    httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function(){
    
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        
        updateSettings();
        
      }
      
    }
      
    httpRequest.open('GET', 'update.php?name=' + name + "&value=" + value);
    httpRequest.send();   
    
  });
}
