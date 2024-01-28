<div align="center">
  <h1>Ourikas Vue</h1>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/henriquenandrade/ourikas-vue"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/henriquenandrade/ourikas-vue"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/henriquenandrade/ourikas-vue"/>

<a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#run-project">Run Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#dependencies">Dependencies</a>

</div>

## Project

A guide with information about companies in the city of Ouricuri-Pe.

Contains description, telephone number, social networks and addresses of the city's main businesses.

## Run Project

Clone the project repository:
```sh
❯ git clone git@github.com:henriquenandrade/ouri-guide.git
```

Run this command to install dependencies:
```sh
❯ cd ouri-guide && npm install
```

## Dependencies:

 - axios: ^1.6.5
 - vue: ^3.3.11

Run this command to start:
```sh
❯ npm run dev
```

To put it into production, run:
```sh
❯ npm run build
```

Currently the application is consuming a json file hosted here: [Ourikas](https://ourikas.github.io/companies.json).

Obs: A rest API will be created soon in Laravel to replace this file.
