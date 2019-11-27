<p align="center">
  <img src="https://rocketseat.com.br/static/images/experience/man_computer.svg",>
  <br />
  <br />
  <br />
  <img src="https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-challenge-03">
  <img src="https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-challenge-03">
  <img src="https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-challenge-03">
  <img src="https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-challenge-03?logoColor=MIT">

   <p align="center">
      <a href="#about-the-challenge">About the challenge</a>
      <strong>|</strong>
      <a href="#resources-and-procedures">Resources and Procedures</a>
      <strong>|</strong>
      <a href="#running-for-first-time">Running for First Time</a>
      <strong>|</strong>
      <a href="#project-tree">Project Tree</a>
      <strong>|</strong>
      <a href="#project-in-function">Project in function</a>
      <strong>|</strong>
      <a href="#license">License</a>
   </p>

   GoStack
  [Hackaton RS/XP - Challenge](#)

   > "Simplicity is the ultimate sophistication." **Leonardo Da Vinci**
</p>


## **About the challenge:**
#### This challenge is to create a product model to resolve one theme inssue proposal in first hackaton Rocketseat Experience event occours in São Paulo city, Brazil  ####
--------------------------------------------------------------

* To check the project in function please, click [here](#)


--------------------------------------------------------------
# Resources and Procedures

## Technologies APIs and Libraries used to create this project

This project was developed with the following technologies:

- [Express][express]
- [Node.js][nodejs]
- [Sequelize][sequelize]
- [Json Web Tokens][jwt]
- [bcryptjs][bcryptjs]
- [date-fns][date-fns]
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## Developed Features

* Api for application admin session with JWT.
* Administrator authentication middleware.
* Apis for creation, update students in the challenges.
* Apis for CRUD of plans offered by the academy.
* Api for checkin of students enrolled in the challenges.
* Api for consultation of checkins made by students enrolled in the academy.
* CRUD Apis for student enrollment at the academy.

## Structure and Settings
- [x] Install Express and install and settings Nodemon e Sucrase (-D).
- [x] Config ESLint, Prettier & EditorConfig
- [x] Create Structure
- [x] Install and Config Sequelize (create database)

## Mentor
- [x] Create Mentor Migration
- [x] Create Mentor Model
- [x] Create Loader for the Models
- [x] Create admin seed
- [x] Create Mentor Controller
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

---
## Running for First Time
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SkullDarth/RS-XP-linkadev.git

# Go into the repository
$ cd RS-XP-linkadev

# Install dependencies
$ yarn install

# Create postgres container
$ docker run --name linkadev -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

#Create database using postbird called linkadev

# Create a new database named `challengespoint` and run the following commands:
# Run Migrations and Seeds
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

# Run the Project
$ yarn dev

```

#### There is an [Insomnia file](./insomnia.json) you can load on your Insomnia to test the routes.

---

## Project Tree

```bash
├── README.md
├── insomnia.json
├── nodemon.json
├── package.json
├── src
|  ├── app
|  |  ├── controllers
|  |  |  ├── MentorController.js
|  |  |  ├── SessionController.js
|  |  |  └── StudentController.js
|  |  ├── middlewares
|  |  |  └── auth.js
|  |  └── models
|  |     ├── Challenge.js
|  |     ├── Company.js
|  |     ├── DocumentType.js
|  |     ├── Mentor.js
|  |     └── Student.js
|  ├── app.js
|  ├── config
|  |  ├── auth.js
|  |  └── database.js
|  ├── database
|  |  ├── index.js
|  |  ├── migrations
|  |  |  ├── 20191127062002-create-document-type.js
|  |  |  ├── 20191127062011-create-company.js
|  |  |  ├── 20191127065540-create-challenges.js
|  |  |  ├── 20191322003954-create-students.js
|  |  |  └── 20191327051716-create-mentors.js
|  |  └── seeds
|  |     ├── 20191019173847-admin-user.js
|  |     ├── 20191127064457-seed-document-type.js
|  |     ├── 20191127064458-seed-company.js
|  |     └── 20191127091222-seed-challenge.js
|  ├── routes.js
|  └── server.js
└── yarn.lock

directory: 1450 file: 12869

ignored: directory (78)

```


---

## Project in function

---

## License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

#### Made with love by LinkaDev Team [Get in touch!](#)


[challenge02]: https://github.com/SkullDarth/bootcamp-gostack-challenge-02
[challenge03]: https://youtu.be/34A_NV777RQ

[gympoint logo]: https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png?raw=true

[Insomnia Gympoint]: https://user-images.githubusercontent.com/16024701/68344233-4c806500-00cd-11ea-891c-c3844734c0cd.png
[Postgres Gympoint database]: https://user-images.githubusercontent.com/16024701/68344327-881b2f00-00cd-11ea-91ee-fa1db12141b0.png
[Mailtrap test]:https://user-images.githubusercontent.com/16024701/68344420-bbf65480-00cd-11ea-8764-a7f2c50fb635.png

[issues]: https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-challenge-03
[forks]: https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-challenge-03
[stars]: https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-challenge-03
[license]: https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-challenge-03?logoColor=MIT
[made-by]: https://img.shields.io/badge/made%20by-SkullDarth-lightgrey

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[express]: https://expressjs.com
[sequelize]: https://sequelize.org
[pg]:https://github.com/brianc/node-postgres
[pg-hstore]: https://github.com/scarney81/pg-hstore
[jwt]: https://jwt.io/
[nodemailer]: https://nodemailer.com/about/
[bee]: https://bee-queue.com/
[dotenv]: https://github.com/motdotla/dotenv#readme
[bcryptjs]: https://github.com/dcodeIO/bcrypt.js/
[date-fns]: https://date-fns.org/
[exphbs]: https://github.com/ericf/express-handlebars
