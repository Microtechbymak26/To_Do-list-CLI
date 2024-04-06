#! /usr/bin/env node
import inquirer from "inquirer";
let todos: string[] = []//Shopper []
let condition = true;

while (condition)
{
   let todoQuestion =await inquirer.prompt(
  [   {
        name:"firstQuestion",
        type:"input",
        message:"Enter your todo"
      },  
      {
        name:"secondQuestion",
        type:"confirm", // When type is confirm answer is in yes or no
        message:"Do you want to add more in your todo?",
        default:"true"
      },
   
   ]
 );
    todos.push(todoQuestion.firstQuestion);
  console.log(todos)
  // The loop is running on the based of this variable condition
   condition = todoQuestion.secondQuestion;
}


