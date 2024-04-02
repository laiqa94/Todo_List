import inquirer from "inquirer";
let todos = []; //Shopper[]
let condition = true;
while (condition) {
    let todosQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What do you want to do?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to continue?",
            default: "true"
        }
    ]);
    todos.push(todosQuestion.firstQuestion);
    console.log(todos);
    condition = todosQuestion.secondQuestion;
}
