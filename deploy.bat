@echo off
echo Pulling latest image...
docker pull pratikganjale/create_cicd:latest

echo Stopping old container...
docker stop my_app
docker rm my_app

echo Starting new container...
docker run -d -p 5500:5500 --name my_app pratikganjale/create_cicd:latest

echo Done! App running at http://localhost:5500