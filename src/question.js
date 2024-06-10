class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
    constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    // 2. shuffleChoices()
    shuffleChoices() {
        

        for(let choicesIndex = 0; choicesIndex < this.choices.length / 2; choicesIndex++) {
            const randomIndex = (Math.floor(Math.random() * this.choices.length / 2));
            let temp = this.choices[choicesIndex];
            this.choices[choicesIndex] = this.choices[randomIndex];
            this.choices[randomIndex] = temp;
        }

    }
}