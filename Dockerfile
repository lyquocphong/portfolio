# base image
FROM node:alpine

# set working directory
WORKDIR /home/app

# add `/home/app/node_modules/.bin` to $PATH
ENV PATH /home/app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 serve@latest -g --silent

# start app
CMD ["serve", "-p", "80", "-s", "./build"]
