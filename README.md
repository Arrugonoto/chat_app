<a name="readme-top"></a>

### Basic version of readme file, I will update it as soon as possible.

<div align="center">

  <h2 align="center">Chilly talk 🤗 </h2>
  <h4>Chat app / room</h4>

  <br>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Chilly talk - main page](/images/Chilly_talk-main_page.png)
![Chilly talk - chat room](/images/Chilly_talk-chat_room.png)

//

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Please at first follow these steps to install necessary tools. If you have already finished them or have already installed necessary tools, skip this step and jump to <a href="#installation">Installation</a>

1. Install latest stable version of node from <a href="https://nodejs.org/en/"> Official Site </a>. It should also install the latest version of npm package manager.
2. Verify versionos of installed node and package manager.
   ```sh
   node -v
   npm -v
   ```
   Example output:
   ```sh { .no-copy }
   v18.12.1
   9.1.2
   ```
3. If npm isn't installed, try to install it manually using the following command in command line:
   ```sh
   npm install -g npm
   ```
4. Create free MongoDB account <a href="https://www.mongodb.com/">here</a>.
5. Initialize database and save connection URI string for later, for example:
   ```
   mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin
   (it's just an example of connection string)
   ```
6. Configure access to database.

### Installation

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
   Remember! Never upload .env file to repository because it contains important configuration data and exposes them to be exploited.
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

<!-- USAGE EXAMPLES -->

## Usage

//

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

### Update:

-  [x] Add login and register
-  [x] Add message creation
-  [x] Add message editing and deletion
-  [x] Add menu
-  [x] Add theme settings
-  [x] Add jump to newest messages
-  [ ] Implement momentum scrolling
-  [ ] Implement 'giving likes' system
-  [ ] Add profanity filter
-  [ ] Implement deletion of account after 24h of creation

### Fix:

-  [ ] Message editing
-  [ ] Theme font colors
-  [ ] Bugged display of long message

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL3.0 License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Krzysztof Klekot - klekot.krzysztof1008@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
