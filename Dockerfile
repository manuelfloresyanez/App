FROM node:13

WORKDIR usr/src/app

COPY server/* /usr/src/app/

RUN npm install

CMD ["npm", "run", "start:dev"]
