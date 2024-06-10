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
        for (let questionsIndex = this.questions.length - 1; questionsIndex > 0; questionsIndex -= 1) {
            const randomIndex = Math.floor(Math.random() * (questionsIndex + 1));
            const temp = this.questions[questionsIndex];
            this.questions[questionsIndex] = this.questions[randomIndex];
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