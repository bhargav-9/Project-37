class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
   
  play(){
   
    question.hide()

    background("yellow")

    
    Contestant.getPlayerInfo() 
    var posx=130;
    var posy=250;
    if(allContestants !== undefined){
      fill("blue")
      textSize(20)
      text("Contestants who answered correct are highlighted in green color",130,230)
      for(var plr in allContestants){
     
      var correctAns="2"
        if(correctAns=== allContestants[plr].answer){
          fill("green")
          }
        else{
          fill("red")
          }
        textSize(20)
        text(allContestants[plr].name+': '+allContestants[plr].answer,posx,posy);
        posy=posy+50
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
