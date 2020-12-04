var readlineSync=require("readline-sync");
var chalkColor=require("chalk");
var emoji=require("node-emoji")
var score=0;
var userName=readlineSync.question("What is your name? ");
console.log(chalkColor.bgMagenta("Welcome "+userName+" to "+chalkColor.bold.italic.yellowBright("Quiz on Indian Culture!!")));

var highScores=[
  {
    name:"Muskan Bhate",
    score:6
  }  
]
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalkColor.green("your answer is right"),emoji.get("smile"));
    score=score+1;
  }
  else{
    console.log(chalkColor.red("your answer is wrong"),emoji.get("unamused"));
  }
  console.log("Score:- ",score);
  console.log("--------------------------------------------------------------------");
}
var userQuestion=[
  {
    
    question:chalkColor.bgBlue("1. Historic Chandragiri Fort is located in which state? ")+chalkColor.yellowBright("\n a.Andhra Pradesh\n b.Maharahtra\n c.Karnataka\n d.West Bengal\n")+"Your answer:",
    answer:"a"
  },
  {
    question:chalkColor.bgBlue("2. The famous " +chalkColor.yellowBright.bold("Ganga Sagar Mela")+", an annual fair is held in which state of India? ")+chalkColor.yellowBright("\n a.Uttar Pradesh\n b.Maharahtra\n c.Karnataka\n d.West Bengal\n")+"Your answer:",
    answer:"d"
  },
  {
    question:chalkColor.bgBlue("3. Ramman is a religious festival and ritual theatre of ____? ")+chalkColor.yellowBright("\n a.Bihar \n b.Uttarakhand\n c.Uttar Pradesh\n d.Tamil Nadu\n")+"Your answer:",
    answer:"b"
  },
  {
    question:chalkColor.bgBlue("4. The famous Nabakalebara festival belongs to which state? ")+chalkColor.yellowBright("\n a.Odisha\n b.Assam\n c.Karnataka\n d.Telangana\n")+"Your answer:",
    answer:"a"
  },
  {
    question:chalkColor.bgBlue("5. Which temple of India is known as Black Pagoda? ")+chalkColor.yellowBright("\n a.Lord Jagannath Temple,Puri\n b.Meenakshi Temple,Madurai\n c.Sun Temple,Konark\n d.Brihadeeswara Temple,Tanjore\n")+"Your answer:",
    answer:"c"
  },
  {
    question:chalkColor.bgBlue("6. Who was known as Bengal’s Greata Garbo? ")+chalkColor.yellowBright("\n a.Suchitra Sen\n b.Amaravati\n c.Bharati shirodkar\n d.kana Devi\n")+"Your answer:",
    answer:"a"
  },
  {
    question:chalkColor.bgBlue("7. Sattriya is a classical dance form of which State? ")+chalkColor.yellowBright("\n a.Madhya Pradesh\n b.Assam\n c.Gujrat\n d.West Bengal\n")+"Your answer:",
    answer:"b"
  },
  {
    question:chalkColor.bgBlue("8. In which festival are boat races a special feature? ")+chalkColor.yellowBright("\n a.Navratri\n b.Baisakhi\n c.Pongal\n d.Onam\n")+"Your answer:",
    answer:"d"
  },
  {
    question:chalkColor.bgBlue("9. Kuchipudi dance originated in ?  ")+chalkColor.yellowBright("\n a.Andhra Pradesh\n b.Odisha\n c.Tamil Nadu\n d.Karnataka\n")+"Your answer:",
    answer:"a"
  },
  {
    question:chalkColor.bgBlue("10. Where is “Pushkar Fair” held ? ")+chalkColor.yellowBright("\n a.Jodhpur\n b.Udaipur\n c.Ajmer\n d.Jaipur \n")+"Your answer:",
    answer:"c"
  }
]
for(var i=0;i<userQuestion.length;i++){
  play(userQuestion[i].question,userQuestion[i].answer)
}
if(score>=9){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 5!",emoji.get("star-struck")))
  console.log("----------------------")
}
else if(score>=7){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 4!",emoji.get("star-struck")))
  console.log("----------------------")
}
else if(score>=5){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 3!",emoji.get("star-struck")))
  console.log("----------------------")
}
else if(score>=4){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 2!",emoji.get("star-struck")))
  console.log("----------------------")
}
else{
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Try again to score at least 4 points to advance to level 2!"))
  console.log("----------------------")
}
for(var j=0;j<highScores.length;j++){
  if(score<highScores[j].score){
    console.log(chalkColor.bgYellow("Highscore:",highScores[j].name,highScores[j].score))
  }
  else{
    console.log(chalkColor.bgCyan("Old Highscore:",highScores[j].name,highScores[j].score))
    console.log("----------------------")
    console.log(chalkColor.bgYellow(emoji.get("medal"),"Congratulations!!You have made new highscore by scoring",score,"points!",emoji.get("medal")))
  }
}
