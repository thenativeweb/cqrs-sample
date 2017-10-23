FROM node:latest

COPY . /opt/nodeapp

WORKDIR /opt/nodeapp

RUN npm install

ENTRYPOINT ["node"]

CMD ["domain/server.js"]
