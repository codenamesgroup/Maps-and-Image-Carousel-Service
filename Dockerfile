FROM node:latest

LABEL maintainer Bryan Manuele <ManueleBryan@gmail.com>

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn

EXPOSE 3001

CMD [ "yarn", "docker" ]