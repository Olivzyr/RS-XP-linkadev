#  Hackaton RS/XP


<p align="center">
  <img src="https://rocketseat.com.br/static/images/experience/man_computer.svg">


   GoStack
  [Hackaton - Challenge](#)

   > "Simplicity is the ultimate sophistication." **Leonardo Da Vinci**
</p>

## **About the challenge:**
####
--------------------------------------------------------------

* To check the project in function please, click [here](#)


--------------------------------------------------------------
# Procedures

## Running for First Time
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SkullDarth/RS-XP-linkadev.git

# Go into the repository
$ cd RS-XP-linkadev

# Install dependencies
$ yarn install

# Run the Project
$ yarn dev

# Create postgres container
$ docker run --name linkadev -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

#Create database using postbird called linkadev


```

## Structure and Settings
- [x] Install Express and install and settings Nodemon e Sucrase (-D).
- [x] Config ESLint, Prettier & EditorConfig
- [x] Create Structure
- [x] Install and Config Sequelize (create database)

## User
- [x] Create User Migration
- [x] Create User Model
- [x] Create Loader for the Models
- [x] Create admin seed
- [x] Create User Controller
- [x] hash pass
- [x] jwt sessions
- [x] middlewares
- [x] update user
- [x] validation

## Students
- [x] Create students migration
- [x] Create student model
- [x] Add student model to Loader
- [x] Create student controller and store method
- [x] Validate students
- [x] Create update method
- [x] middleware to create a route validation for admin to create and update students information

