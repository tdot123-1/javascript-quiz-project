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
        

        for (let choicesIndex = this.choices.length - 1; choicesIndex > 0; choicesIndex -= 1) {
            const randomIndex = Math.floor(Math.random() * (choicesIndex + 1));
            const temp = this.choices[choicesIndex];
            this.choices[choicesIndex] = this.choices[randomIndex];
            this.choices[randomIndex] = temp;
        }

    }
}