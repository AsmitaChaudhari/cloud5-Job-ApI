# Using another docker image for the image template
FROM node:8

# Create an app directory, this directory is use to store files, run npm,and launch our application
# WORKDIR /app
WORKDIR /app

# Copying the package.json file to the created directory
COPY package*.json ./

# Installing the app dependencies & building code for production
RUN npm install

# Copying application content to the newly created directory
COPY . /app

# Exposing a port 3000 to the outside once the container has launched
EXPOSE 3000

# Running the app.js file during the launch of docker image
CMD npm start
