class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }

    // 4. shuffleQuestions()
    shuffleQuestions() {
        for(let choicesIndex = 0; choicesIndex < this.questions.length / 2; choicesIndex++) {
            const randomIndex = (Math.floor(Math.random() * this.questions.length / 2));
            let temp = this.questions[choicesIndex];
            this.questions[choicesIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temp;
        }
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {

        this.questions.forEach(question => {
            if (answer === question.answer) {
                this.correctAnswers += 1;
            }
        });

        
    }

    // 6. hasEnded()
    hasEnded() {
        if (this.currentQuestionIndex === this.questions.length) {
            return true;
        }
        return false;
    }
}