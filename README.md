<a name="readme-top"></a>

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

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Please at first follow these steps to install necessary tools. If you have already finished them or have already installed necessary tools, skip this step and jump to <a href="#installation">Installation</a>

1. Install latest stable version of node from <a href="https://nodejs.org/en/"> Official Site </a>. It should also install the latest version of npm package manager.
2. Verify versionos of installed node and package manager
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

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

#### Client:

1. Inside of main project directory navigate to client folder
   ```sh
   cd client
   ```
2. Inside of a client directory install NPM packages
   ```sh
   npm i
   ```
3. Wait for the installation to complete
4. Run client
   ```sh
   npm start
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL3.0 License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
