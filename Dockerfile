FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

#@TODO: I need to make this virtual
EXPOSE 3001

CMD [ "yarn", "start" ]