(function (){

	var score = 0;
	var question = document.getElementById("question");
	var answer = document.getElementById("answer");
	var i = 0;

	var questionnaire.length = 5;

	var questions = [
		{
			question: "What type of coffee contains the most caffeine?",
			answer: "brewed coffee"
		},

		{
			question: "Which coffee roast contains more caffeine, dark roast or light roast?",
			answer: "dark roast"
		},

		{
			question: "Name one of the two most common types of coffee beans.",
			answer: "arabica"
		},

		{
			question: "Where is the only place to grow coffee in the US?",
			answer: "hawaii"
		},

		{
			question: "What is the approximate average amount of coffee consumed per day (in cups)?"
			answer: "3 cups"
		},
		
		]


	question.innerHTML = questionList[i];

	submit.onclick = function () {
		console.log(answer.value, questionList[i], answerList[i]);
		if (answer.value == answerList[i]) {
			console.log("Correct!");
			alert("Correct!");
			i++;
			question.innerHTML = questionList[i];
			answer.value = null;
		} else {
			console.log("Sorry, that's wrong.");
			alert("Sorry, that's wrong.");
			i++;
			question.innerHTML = questionList[i];
			answer.value = null;
		}

	}

	/*var answer1 = prompt("What type of coffee contains the most caffeine?", " ").toLowerCase();
	if (answer1 == "brewed coffee" || answer1 == "brewed" ) {
		alert("Correct!");
		var newscore = score+1;
	} else {
		alert("Sorry, the correct answer is brewed coffee.", " ");
		var newscore = score+0;
	}

	var answer2 = prompt("Which coffee roast contains more caffeine, dark roast or light roast?", " ").toLowerCase();
	if (answer2 == "dark roast" || answer2 == "dark" ) {
		alert("Correct!");
		var newscore = newscore+1;
	} else {
		alert("Sorry, the correct answer is dark roast.");
		var newscore = newscore+0;
	}

	var answer3 = prompt("Name one of the two most common types of coffee beans.", " ").toLowerCase();
	if (answer3 == "arabica" || answer3 == "robusta" ) {
		alert("Correct!");
		var newscore = newscore+1;
	} else {
		alert("Sorry, the correct answer is Arabica or Robusta.");
		var newscore = newscore+0;
	}

	var answer4 = prompt("Where is the only place to grow coffee in the US?", " ").toLowerCase();
	if (answer4 == "hawaii" ) {
		alert("Correct!");
		var newscore = newscore+1;
	} else {
		alert("Sorry, the correct answer is Hawaii.");
		var newscore = newscore+0;
	}

	var answer5 = prompt("What is the approximate average amount of coffee consumed per day (in cups)?", " ").toLowerCase();
	if (answer5 == "3 cups" || answer5 == "3") {
		alert("Correct!");
		var newscore = newscore+1;
	} else {
		alert("Sorry, the correct answer is 3 cups.");
		var newscore = newscore+0;
	}

	var message = alert("You got " + newscore + " out of 5 correct.");*/

})();