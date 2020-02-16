# InstaBox

> This is the React app for a stripped down instagram clone built using react. The full medium article for this tutorial can be found [here](). This app is designed for mobile view.

![screenshot](./app_screenshot.png)

The app includes a Rails API that renders JSON to be consumed
by React Views.

## Built With

- Rails
- React
- Node
- Axios
- FontAwesomeIcons

## Live Demo

[Live Demo Link](https://hardcore-blackwell-67aee1.netlify.com/)

## Front-end Repo

[Front end git repo](https://github.com/onedebos/instabox-frontend)

## Getting Started

**To get started, follow the instructions below**

To get a local copy up and running follow these simple example steps.

- git clone the frontend repo

```
git clone https://github.com/onedebos/instabox-frontend
```

- git clone the backend repo if you want to run the server on your local machine. Otherwise, skip the next 3 steps.

```
git clone https://github.com/onedebos/instabox-rails-API
```

- cd into the backend repo and install the gems

```
bundle install
```

- run the rails server on port 3001

```
rails s -p 3001
```

- If you decide to run the server locally, cd into the frontend repo. Navigate to src/components/helper/apiUrl.js and change the API_URL string to

```
http://localhost:3001
```

- run

```
npm install
```

to install all packages. then

```
npm start
```

- to start the app in the browser.

### Prerequisites

- Make sure to have Rails 6.0 and Ruby 2.5.1

### Install

Install the Ruby Gems required by rails

```
bundle install
```

### Usage

- Api endpoint [here](https://instabox-api.herokuapp.com/pictures)

### Run tests

Run model tests

```
bundle exec rspec
```

### Deployment

## Authors

👤 **Adebola**

- Github: [@githubhandle](https://github.com/onedebos)
- Twitter: [@twitterhandle](https://twitter.com/debosthefirst)
- Linkedin: [linkedin](https://www.linkedin.com/in/adebola-niran/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Thanks to [Olu](https://unsplash.com/@kehfam) for images
- Thanks to [Sharon Garcia](https://unsplash.com/@_sharon_garcia) for images
- Wikimedia for the [Instagram Logo]

## 📝 License

This project is [MIT](lic.url) licensed.
