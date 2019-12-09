const readline = require('readline');

function Question(id,text, choices, answer){
	this.id = id;
	this.text=text;
	this.choices=choices;
	this.answer=answer;
}

class QuizApp {

	constructor() {
		this.questions = [
			new Question(1,"Which one is not a OO language?",["1. JAVA", "2. C", "3. C++", "4. C#"], "4. C#"),
			new Question(2,"Which one is used for styling web pages?",["1. html", "2. css", "3. jQuery", "4. xml"], "2. css"),
			new Question(3,"MVC is a ____", ["1. framework", "2. library", "3. language", "4. all"], "1. framework"),
			new Question(3,"MVC is a ____", ["1. framework", "2. library", "3. language", "4. all"], "1. framework"),
			new Question(3,"MVC is a ____", ["1. framework", "2. library", "3. language", "4. all"], "1. framework")
		];
		// initializes readline module that will later be used to ask questions and get user choice
		this.rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		  });
		this.score = 0;
	}

	showQuestion(i) {
		if (i != this.questions.length) {
			let options = this.questions[i].choices.join("\n") // creates a string of all the options
			// the code below uses readline module of Node.js to ask questions, along with options, to user and get user's choice
			this.rl.question(`${this.questions[i].id}. ${this.questions[i].text} \nOptions:\n${options}\n`, (choice) => {
				if (this.questions[i].choices[Number(choice)-1] != this.questions[i].answer) {
					console.log("Wrong")
					console.log(`Your score is: ${this.score}.\n--------------------`)
					this.rl.close()
				} else {
					console.log("Correct")
					i++;
					this.score += 10;
					console.log(`Your score is: ${this.score}.\n--------------------`)
					this.showQuestion(i);
				}
			  });
		} else {
			process.exit(0); // exits the program when all questions have been asked
		}
	}

}

var quiz = new QuizApp();
quiz.showQuestion(0);