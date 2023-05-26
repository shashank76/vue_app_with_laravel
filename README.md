# About Laravel+Vuejs+Docker+Docker compose

This project `laravel+Vuejs` with `docker`

## Prerequisites

---

Make sure you have insalled the following prerequisites in your development.

-   `Docker` - [Download & install Docker](https://docs.docker.com/get-docker/) make sure that the latest docker version has been installed on your machine.

### Technologies

---

List of technologies which are used in this project.

-   PHP : Version 8.2-fpm-alpine
-   Laravel: Version 8.x
-   MySQL: Version 8
-   Node: Version 16.16.0

### Setup Environment for Development:

-   Copy `.env.example` to `.env`.
-   Build `docker-compose build`.
-   Run `docker-compose up -d` for development purpose.
-   Run `docker ps` to check running containers and then Run `docker-compose exec -it <container_id> bash` to access the bash of running client app, and then run `compreser install`.
-   Run `npm run development -- --watch` for running and compile latest files.
-   Open favourite browser and type `http://localhost:8080`. If you wan to run on different port, you can change the `HTTP_PORT` from `.env` file.