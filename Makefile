.PHONY: up-build

up-build:
	sudo docker-compose up --build

up:
	sudo docker-compose up
	
.PHONY: down

down:
	sudo docker-compose down -v