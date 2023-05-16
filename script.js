const player = {
    currentChoice: null
  };
  const computer = {
    currentChoice: null
  };
  
  const choices = ["Green Shell", "Red Shell", "Blue Shell"];
  console.log(choices.length);
  if (choices >= [2]){
    console.log("Waaahoooo!")
  }
  
  function computerChooses(e) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  function compareChoices(event){
  
    player.currentChoice = event.currentTarget.innerText
    
    computerChooses()
    
    if(computer.currentChoice === player.currentChoice){
      document.getElementById("results").innerText="It's a TIE! 🐲 BOWSER and 🥸 MARIO both choose " + computer.currentChoice;
    }else if(computer.currentChoice === choices[0]){
      if(player.currentChoice === choices[1]){
        document.getElementById("results").innerText="Yippee! 🥸 MARIO wins! BOWSER chose " + computer.currentChoice + " and YOUSE chose " + player.currentChoice;
      }else{
        document.getElementById("results").innerText="Wahhh! 🐲 BOWSER wins! BOWSER chose " + computer.currentChoice + " and YOUSE chose " + player.currentChoice;
      }   
    }else if(computer.currentChoice === choices[1]){
      if(player.currentChoice === choices[2]){
        document.getElementById("results").innerText="Yahoo! 🥸 MARIO wins! BOWSER chose " + computer.currentChoice + " and YOUSE choses " + player.currentChoice;
      }else{
       document.getElementById("results").innerText="Wahhh! 🐲 BOWSER wins! It chose " + computer.currentChoice + " and YOUSE chose " + player.currentChoice; 
      }
    }else if(computer.currentChoice === choices[2]){
      if(player.currentChoice === choices[0]){
        document.getElementById("results").innerText="Yahoo! 🥸 MARIO wins! BOWSER chose " + computer.currentChoice + " and YOUSE chose " + player.currentChoice;
      }else{
        document.getElementById("results").innerText="Wahhh!  🐲 BOWSER wins! He chose " + computer.currentChoice + " and YOUSE chose " + player.currentChoice;
      }
     }  
    }
  
  document.getElementById("greenbutton").addEventListener("click", compareChoices);
  document.getElementById("redbutton").addEventListener("click", compareChoices);
  document.getElementById("bluebutton").addEventListener("click", compareChoices);
  
  document.querySelector("#results-container").style.color = "rgba(17,173,117,.86)";
  
  
  