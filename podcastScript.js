function toggleOpen(el) {

    if(el.className == "flexItem2") {
        
        el.className = "item-toggle";
        document.getElementById("flexItem1").style.display="none";
        document.getElementById("flexItem3").style.display="none";
        
         document.getElementById("title").style.display="block";
        document.getElementById("paraBody").style.display="block";
  }else {
        
        el.className = "flexItem2";
      document.getElementById("flexItem1").style.display="block";
      document.getElementById("flexItem3").style.display="block";
      
      document.getElementById("title").style.display="none";
      document.getElementById("paraBody").style.display="none";
        }
 }

function toggleRightOpen(el){

  if(el.className == "flexItemTres"){
    
      el.className = "item-toggle-grey";
      document.getElementById("flexItem1").style.display="none";
      document.getElementById("logoItem").style.display="none";
  }else {
    
      el.className = "flexItemTres";
      document.getElementById("flexItem1").style.display="block";
      document.getElementById("logoItem").style.display="block";
        }
 }

function toggleLeftOpen(el){

  if(el.className == "flexItemUno"){
    
      el.className = "item-toggle-grey";
      document.getElementById("flexItem3").style.display="none";
      document.getElementById("logoItem").style.display="none";
  }else {
    
      el.className = "flexItemUno";
      document.getElementById("flexItem3").style.display="block";
      document.getElementById("logoItem").style.display="block";
        }
 }
