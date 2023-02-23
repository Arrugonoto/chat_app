<a name="readme-top"></a>

### Basic version of readme file, I will update it as soon as possible.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:

-  Your time should be focused on creating something amazing. A project that solves a problem and helps others
-  You shouldn't be doing the same tasks over and over like creating a README from scratch
-  You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

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

<!-- LICENSE -->

## License

Distributed under the GPL3.0 License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
