Heroku Apps include a Procfile which specifices the commands that are executed by the App on startup.
Procfile can be used to declare a variety of processes like Types or including the App's webserver.
The Procfile sits in the root of the application directory and will tell Heroku that our app will be running using Node.js
This file is required or will receive an error message asking to specify a language that we are using with our app - if deploying to Heroku.