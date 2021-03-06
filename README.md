# MyMoment Frontend

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. This app uses vue js version ^2.6.12

### Prerequisites
##### Node JS [[link](https://nodejs.org/en/download/)]

Version I am using : v12.18.4 

##### MyMoment Backend [[link](https://github.com/Pajri/personal-backend)]

More setup is needed in the backend side. Please read `MyMoment Backend` documentation 

##### Nginx [[link](http://nginx.org/en/download.html)]

## Project setup

### Nginx Config (Server Section)
Change `server` section in `nginx.conf` file with the following : 
```
server {
    listen       80;
    server_name  mymoment.localdev.info;
    client_max_body_size 20M;
        
    location / {
        proxy_pass http://localhost:8080;
    }

    location /api {
        proxy_pass http://localhost:5000;
    }

    location /upload {
        proxy_pass http://localhost:5000;
    }
}
```

### .env file
Add `.env.development` file in the root project (same level with `package.json`. Add the following variable to the file
```
VUE_APP_API_HOST=http://mymomentapp.net
```
For production, add file `.env.production`

### Run the App
```
### Install dependencies
npm install

### Compiles and hot-reloads for development
npm run serve

### Compiles and minifies for production
npm run build

### Lints and fixes files
npm run lint
```
Access http://mymoment.localdev.info from the browser.

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
