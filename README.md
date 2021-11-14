# Mr.Rodgers

#### By Colton Thatcher

#### _A showcase in looping_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _Markdown_
* _GIT_
* _GITHUB_


## Description

_This application takes a number inputted by the user. After said number is entered the system will calculate a response based on an order of operation followed in business logic, with some numbers overriding answer for others._

## Setup/Installation Requirements

* _Go to [github](https://github.com/Coltthatcher/Mr-Rodgers)_
* _Use $git clone (remote URL) this will copy the code and commit histories from a remote repository to your local repository_
* _Open to in VS and start coding_
* _When using the app load the index html in the browser by right clicking the index.html and selecting load live server. After that enter a number into the select box and see your results when you press submit.


_This code depends on HTML, JavaScript, JQuery, VSCODE and GIT to work on your machine_

## Known Bugs

* No buggies. 


## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 10/29/21 Colton Thatcher


Describe: arrayOne()

#### Test: "It should create a list of numbers from zero to the inputted number "
Code: let array1 = []
arrayOne(text)
Expected Output: []

#### Test: "It should check and see if the entered number contains three and turn the array into a string"
Code: (array1[i].toString().includes(3))
const text = 3
arrayOne(text)
Expected Output:"wont you be my neighbor?"

#### Test: "It should check if the conditions above were not met and turn any numbers created into a string"
Code:(array1[i].toString().includes(2))
const text = 2
arrayOne(text)
Expected Output:"Boop"

#### Test "It should check if none of the top parameters are met"
Code:(array1[i].toString().includes(1)
const text = 1
arrayOne(text)
Expected Output:"Beep!" 

#### Test "it should maintain a hierarchy with the exception of rules"
Code:if (array1[i].toString().includes(3)) {
      array1[i] = "Won't you be my neighbor?"
    } else if (array1[i].toString().includes(2)) {
      array1[i] = "Boop!"
    } else if (array1[i].toString().includes(1)) { 
      array1[i] = "Beep!"
const test = 13
arrayOne(text)
Expected Output:"Won't you be my neighbor!"