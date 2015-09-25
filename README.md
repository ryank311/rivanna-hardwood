# Rivanna Hardwood Floors

This application is primarily used as a sales website for Rivanna Hardwood.  

## Instructions

1. `npm install`
2. `npm run dev` to run locally

There are 3 different "modes" you can develop in:
1. Development -  without react-hot-loader
2. Development - with react-hot-loader
3. Production

### Development build (without Hot loader)

1. `npm run watch` watches and recompiles on file changes
2. `npm run dev` will run the server locally without a proxy. The difference between `dev` and `npm start` is that `npm start` requires you to access your site over HTTPS, otherwise session cookies will not be set. 

### Development build with Hot Loader

We use [react-hot-loader](https://github.com/gaearon/react-hot-loader), which is about the greatest thing that has ever happened. No browser refreshes needed.

1. `npm run devHotLoader` to build with webpack and start the server. We use webpack-dev-server as a proxy server to serve assets. Changes made are not saved to disk, as that is not what webpack-dev-server is for. However, `npm run watchHotLoader` IF you want to reload the page and see the change in the server-rendered React.

### Production build

Run the commands below for a production build, i.e. what is deployed to Heroku. If you are deploying to Heroku or similar, we assume that you serving the pages over HTTPS.

1. `npm run build && npm start`

#### Bundling with webpack

1. `npm run build` runs `webpack` will run configurations within webpack.config.js.
2. `npm run watch` runs `webpack --watch` to watch and recompile for changes.

## Component Hierarchy

- app.js
	- App.react
		- NavigationBar.react
	  - RouteHandler
			- Vote.react
				- EntryBox.react
				- MainSection.react
				- Scoreboard.react
			- Login.react
			- Logout.react
			- About.react


### 3. Why do I get `Error: Failed to serialize user into session` when trying to login with email/password locally?

It's because there are no users created in your local DB so it's throwing an error on the server's end. We haven't set up the handling of errors for this yet.  I intend to fix this. If you check [this](https://github.com/choonkending/react-webpack-node/blob/master/server/controllers/users.js), you'll see that there is a `/signup` endpoint for creating a user. In the meantime, a quick and easy way to do this is to paste this in your console log while your server is running:

```javascript
var http = new XMLHttpRequest();
var url = "http://localhost:3000/signup";
var params = "email=example@ninja.com&password=ninja";
http.open("POST", url, true);http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.send(params);
```

This should create a user in your local database and all will be well!!


License
===============
MIT
