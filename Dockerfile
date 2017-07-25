# Node Installation

FROM node:6-alpine

# Make a Directory

RUN mkdir /opt/app

# Setting up Work Directory

WORKDIR /opt/app

# Install all dependencies of the current project.

COPY package.json package.json

RUN npm install

# Copy Code

COPY . .

# Build Application

RUN npm run build --production

# Install `serve` to run the application

RUN npm install -g serve

# Set the command to sart the node server

CMD serve -s build

# Expose port

EXPOSE 5000
