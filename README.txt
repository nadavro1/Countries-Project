Instructions for running using Docker (Windows):
a. Download the files and open the terminal
b. Run npm install on the root folder
c. Run npm install on /client folder
d. Open redis-server to run
e. Open Docker Desktop
f. Run in the terminal 'docker-compose up'

Instructions for running local without Docker:
-Do instructions a-d above
-Change on client/package.json "proxy": "http://localhost:4000/"
-Run on terminal in root folder "run npm dev"