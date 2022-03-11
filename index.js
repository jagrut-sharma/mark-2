var readlineSync = require("readline-sync");
const chalk = require('chalk');
var userName = readlineSync.question(chalk.greenBright("Hi! Can I have your name please? "));
console.log("\n" + "Welcome! " + chalk.blue.bold(userName) + ", to the " + chalk.bgRed.bold("MARVEL") + " quiz!" + "\n" + "*drumroll*" + "\n");
console.log("Instructions: " + "There are 3 levels of 5 question each: " + "\n" + chalk.yellow.bold("1. Y/N") + "\n" + chalk.cyan.bold("2. KBC") + "\n" + chalk.magenta.bold("3. Q&A") + "\n");
console.log(chalk.red("Required Score for each level: ") + "\n" + "Level 1: 3" + "\n" + "Level 2: 6" + "\n" + "Level 3: N/A" + "\n");

var count = 0;

console.log(chalk.bgGreen("Level One"));
console.log("---------------------------------------");
var score = 0;
function quizLevelOne(question, answer)
  {
    userAnswer = readlineSync.keyInYNStrict(chalk.yellowBright(question));
    if (userAnswer === answer)
    {
      console.log(chalk.greenBright("Correct!"));
      score++;
    }
    else
    {
      console.log(chalk.red("Sorry, the answer is incorrect"));
    }
    console.log(chalk.bgCyan.white.bold("Current Score: "), chalk.greenBright(score), "\n");
  }

function scoreCheck(value, k)
  {
    if (value > k)
    {
      console.log(chalk.bgGreen.bold("Congrats! You have passed this level. " + "On to next") + '\n');
    }
    else
    {
      console.log(chalk.redBright("Try again :)"));
      console.log(chalk.bgWhite.black("Final Score:") + " ", chalk.greenBright(score));
      process.exit();
    }
  }

function quizLevelTwo(question)
  {
    var userAnswer = readlineSync.keyIn(chalk.yellow(question[0]) + "\n" + chalk.cyanBright(question[1]) + "\n" + chalk.cyanBright(question[2]) + "\n" + chalk.cyanBright(question[3]) + "\n" + chalk.cyanBright(question[4]) + "\n", {limit: '$<a-d>'}); 
    if (userAnswer.toLowerCase() === question[5])
    {
      console.log(chalk.greenBright("Correct!"));
      score++;
    }
    else
    {
      console.log(chalk.red("Sorry, the answer is incorrect"));
    }
    console.log("Current Score: ", score);
  }
function quizLevelThree(question, answer)
  {
    var userAnswer = readlineSync.question(chalk.magenta(question) + "\n");
    if (userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log(chalk.greenBright("Correct!"));
      score++;
    }
    else
    {
      console.log(chalk.red("Sorry, the answer is incorrect"));
    }
    console.log(chalk.bgCyan.white.bold("Current Score: "), chalk.greenBright(score), "\n");
  }
function finalScoreCheck(finalscore)
  {
    var highScore = [jagrut = {name: "Jagrut",
                              score: 15}, Akash = {name: "Akash", score: 11}];
    console.log("\n" + chalk.bgYellow.black("Check out the leaderboards: "));
    console.log(chalk.red("........................................................."));
    for (var j=0; j<highScore.length; j++)
      {
        console.log(chalk.blue(highScore[j].name) + " : " + chalk.greenBright(highScore[j].score));
      }
    for (var i=0; i<highScore.length; i++)
      {
        if (score >= highScore[i].score)
        {
          count++;
        }
      }
    if (count>0)
    {
      console.log(chalk.bgRedBright.black("Congratulations!!, You've made it to leaderboards.")+ chalk.greenBright(" Send me a screenshot and I'll add you to list."));
      
    }
    else
    {
      console.log(chalk.redBright("Sorry, you didn't make it to leaderboards.") + chalk.greenBright(" Don't worry, I'm sure you'll make it next time :)"));
    }
  }

quizLevelOne("Iron Man was the first film in MCU? ", true);
quizLevelOne("Avengers movie was the first appearance of The Hulk? ", false);
quizLevelOne("Howard Stark created Captain America's shield? ", true);
quizLevelOne("The tribe that was not part of Wakanda was Jabari tribe? ", true);
quizLevelOne("Nick fury asks The Hulk to join avenger? ", false);
scoreCheck(score, 2);

console.log("Level Two");
console.log("---------------------------------------");

var ques1 = ["Who was the first person to turn to dust in Infinity Wars ?", "A. Black Panther", "B. Bucky", "C. M'Baku", "D. Groot", "b"];
var ques2 = ["What is the name of Thor's Axe ?", "A. Deathbringer", "B. Mjolnir", "C. Stormbreaker", "D. Hofund", "c"];
var ques3 = ["How many infinity stones exist in MCU?", "A. 4", "B. 5", "C. 6", "D. 7", "c"];
var ques4 = ["Which version of suit does Iron Man wears in the first avenger movie ?", "A. Mark IV", "B. Mark V", "C. Mark VI", "D. Mark VII", "d"];
var ques5 = ["What is the real name of Hawkeye ?", "A. Clint Barton", "B. Steve Rogers", "C. Dimitri Bukharin", "D. Sergei Kravinoff", "a"];
quizLevelTwo(ques2);
quizLevelTwo(ques1);
quizLevelTwo(ques3);
quizLevelTwo(ques4);
quizLevelTwo(ques5);
scoreCheck(score, 5);

console.log("Level Three");
console.log("---------------------------------------");

quizLevelThree("Which fictional country serves as villain's headquarter in Avengers: Age of Ultron? ", "Sokovia");
quizLevelThree("In which country, Black widow finds the Hulk in Avengers ", "India");
quizLevelThree("Where was Soul stone located? ", "Vormir");
quizLevelThree("WHat is Peggy Carter niece's name? ", "Sharon Carter");
quizLevelThree("WHat was the name of Thanos's Spaceship ", "Sanctuary 2");

console.log(chalk.bgGreen("Congratulations on completing the quiz!!") + "\n");
console.log(chalk.bgWhite.black("Your Final Score is:") + " ", chalk.bgGreenBright.black(score));
finalScoreCheck(score);
