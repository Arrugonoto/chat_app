<a name="readme-top"></a>

<div align='center'>

![GitHub](https://img.shields.io/github/license/Arrugonoto/chat_app?color=informational)
![GitHub Repo stars](https://img.shields.io/github/stars/Arrugonoto/chat_app)
![GitHub top language](https://img.shields.io/github/languages/top/Arrugonoto/chat_app?color=yellow)
![GitHub repo size](https://img.shields.io/github/repo-size/Arrugonoto/chat_app?label=size)

</div>

<div align="center">

  <h2 align="center">Chilly talk 🤗 </h2>
  <h4>Chat app / room</h4>
  <p align="center">Realtime chat app for chilly talking, made for learning basics of full-stack 📖 </p>
  <p align="center"><a href='https://chattyapp-79hl.onrender.com/login'>Live demo</a></p>
  <br>
</div>

<!-- TABLE OF CONTENTS -->
<details>
<summary> 📜 Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

<a name="about-the-project"></a>

## About The Project

![Chilly talk - main page](/images/login_page.png)
![Chilly talk - chat room dark theme](/images/chat_room-dark.png)
![Chilly talk - chat room light theme](/images/chat_room-light.png)

I have decided to improve my coding skills to strengthen my fundamentals of front-end, react and styling also with exploring new trails and oh me it was great and horrible idea at same time. So I have decided to get into back-end development.. at least to understand basics. Finally I have decided to build real time chat application which will work like for example `Messenger` or `Telegram`.

This idea allowed me to obtain a huge amount of new knowledge and to spend many hours inside of docs.

Project allows the end User to register account, login, send messages, edit them and delete. Additionally allows user to style chat window uniquely for every logged in user.

<a name="technologies"></a>

## :toolbox: Technologies

<div align='center'>
   <div>

[![Node.js logo](https://img.shields.io/badge/NODE-383838?style=for-the-badge&logo=nodedotjs&logoColor=#61DAFB)](https://nodejs.org/en)
[![JavaScript logo](https://img.shields.io/badge/JS-383838?style=for-the-badge&logo=javascript&logoColor=#F7DF1E)](https://www.javascripttutorial.net/es-next/)
[![Express logo](https://img.shields.io/badge/EXPRESS-383838?style=for-the-badge&logo=express&logoColor=#61DAFB)](https://expressjs.com/)

   </div>

[![Socket.IO logo](https://img.shields.io/badge/SOCKET.IO-23272f?style=for-the-badge&logo=socketdotio&logoColor=#010101)](https://socket.io/)
[![MongoDB logo](https://img.shields.io/badge/MONGODB-23272f?style=for-the-badge&logo=mongodb&logoColor=#47A248)](https://www.mongodb.com/)

[![React.js logo](https://img.shields.io/badge/React-050505?style=for-the-badge&logo=react&logoColor=#61DAFB)](https://react.dev/)
[![Styled-components logo](https://img.shields.io/badge/STYLED--COMPONENTS-050505?style=for-the-badge&logo=styledcomponents&logoColor=)](https://styled-components.com/)

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

<a name="getting-started"></a>

## :running: Getting Started

To get a local copy up and running follow these simple steps.

<a name="prerequisites"></a>

### :raised_hand: Prerequisites

<details>
   <summary>Necessary tools</summary>

Please at first follow these steps to install necessary tools. If you have already installed `npm`, `Node` and created free `MongoDB` account with initializing and configuring MongoDB `database` skip this step and jump to <a href="#installation">Installation</a>.

1. Install latest stable version of `node` from <a href="https://nodejs.org/en/"> Official Site </a>. It should also install the latest version of `npm` package manager.
2. Verify versionos of installed `Node` and `package manager`.
   ```sh
   node -v
   npm -v
   ```
   Example output:
   ```sh { .no-copy }
   v18.12.1
   9.1.2
   ```
3. If npm isn't installed, try to install it manually using the following command inside terminal:
   ```sh
   npm install -g npm
   ```
4. Create free `MongoDB` account <a href="https://www.mongodb.com/">here</a>.
5. Initialize database and save `connection URI string` for later, for example:
   ```
   mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin
   (it's just an example of connection string)
   ```
6. Configure access and network connection restrictions to database.
</details>

<a name="installation"></a>

### :mage_man: Installation

<details>
   <summary>Step by step</summary>

#### Server:

1. Clone repository.
   ```sh
   git clone https://github.com/Arrugonoto/chat_app.git
   ```
2. Inside of project main directory navigate to `server folder`.
   ```sh
   cd server/
   ```
3. Inside of a server directory create `.env` file
4. Configure .env file with necessary data:
   ```.env
   NODE_ENV=production // node development environment, currently set as production
   PORT=5000 // port on which server will be running
   MONGO_URI=mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin  // example connection URI string
   SECRET=secret_key_example
   ```
   :warning: Remember! Never upload .env file to repository because it contains important configuration data and exposes them to be exploited.
5. After finished configuration install necessary packages.
   ```sh
   npm i
   ```
6. Run server.
   ```sh
   npm run dev
   ```

#### Client:

Open another command line/terminal.

1. Inside of main project directory navigate to client folder.
   ```sh
   cd client
   ```
2. Inside of a client directory install NPM packages.
   ```sh
   npm i
   ```
3. Wait for the installation to complete.
4. Run client
   ```sh
   npm start
   ```
5. Done! Have fun with testing!
<p align="right">(<a href="#readme-top">back to top</a>)</p>
</details>

<!-- ROADMAP -->

<a name="roadmap"></a>

## :motorway: Roadmap

### :shipit: Update:

-  [x] Add login and register
-  [x] Add message creation
-  [x] Add message editing and deletion
-  [x] Add menu
-  [x] Add theme settings
-  [x] Add jump to newest messages functionality
-  [x] ~~Add momentum scrolling functionality~~
-  [x] Add 'giving likes' functionality / implemented reaction functionality
-  [x] Add profanity filter - <a href='https://github.com/web-mech/badwords'>by Michael Price</a>
-  [x] Build production
-  [x] Host project
-  [x] Add emoji picker - <a href='https://github.com/missive/emoji-mart'>by Missive team</a>
-  [x] Add light/dark mode

### Fix:

-  [x] Message editing
-  [x] Custom color selector for theme
-  [x] Theme font colors
-  [x] Bugged display of longer message
-  [x] Selecting emoji doesn't works
-  [x] Reactions are added to wrong message

### Demo status:

-  [x] Updated to latest version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

<a name="license"></a>

## :placard: License

Distributed under the GPL3.0 License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

<a name="contact"></a>

## :mailbox: Contact

Krzysztof Klekot - :email: klekot.krzysztof1008@gmail.com

Project Link: [https://github.com/Arrugonoto/chat_app](https://github.com/Arrugonoto/chat_app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
