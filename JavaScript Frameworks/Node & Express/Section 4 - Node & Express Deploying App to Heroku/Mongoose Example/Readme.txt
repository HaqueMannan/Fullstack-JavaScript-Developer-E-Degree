Heroku:
Heroku Apps include a Procfile which specifices the commands that are executed by the App on startup.
Procfile can be used to declare a variety of processes like Types or including the App's webserver.
The Procfile sits in the root of the application directory and will tell Heroku that our app will be running using Node.js
This file is required or will receive an error message asking to specify a language that we are using with our app - if deploying to Heroku.

Mongodb:
To run mongodb as a local service on a MAC open a new terminal window and run the following command:
   brew services start mongodb-community@4.4

To stop the service run the following command:
   brew services stop mongodb-community@4.4

Note: Brew CLI must be installed on your local machine to run the command (which would have been installed in order to install mongodb locally).
As at 15 August 2020 the mongodb-community is at version 4.4