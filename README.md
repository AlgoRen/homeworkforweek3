# homeworkforweek3
Password Generator

This password generator starts by creating a prompt in a while(true) loop that asks
users for the length of their desired password within the conditions of more than 7 and 
less than 129 characters.
The rest of the program is split into several functions. A function that grabs the truth value of the users choice for confirm prompts. After checking to make sure that at least one of the user choices for the confirm prompts equated as true a second if else statement is used to map true or false to parameter positions in createdPasswordArray.
Depending on which parameters in createdPasswordArray are true or false the chraracters
are concatenated to an array called passwordVals. A function called randomizePlacement
is used to shuffle characters around before being passed back into passwordVals. 
The function generateUserPassword is used to make a string of characters from the array of passwordVals for the length that the user specified in passwordLength and stores it in createdPassword. 
It is then returned to main function generatePassword which then returns createdPassword
in its place to be used by the writePassword function.
Finally the writePassword function writes the password to the #password input.