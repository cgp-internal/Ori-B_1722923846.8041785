#!/bin/bash

# Install Node.js
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs

# Initialize a new Node.js project
npm init -y

# Install Express and other dependencies
npm install express sqlite3

# Install other dependencies
npm install

# Run the application
node app.js