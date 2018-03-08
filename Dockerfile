FROM node:latest

LABEL maintainer Bryan Manuele <ManueleBryan@gmail.com>

RUN mkdir -p /src/app

WORKDIR /src/app

RUN yarn install

COPY . /src/app

#@TODO: I need to make this virtual
EXPOSE 3001

CMD [ "yarn", "start" ]