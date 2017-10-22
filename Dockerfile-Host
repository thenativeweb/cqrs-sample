FROM node:latest

COPY . /opt/nodeapp

WORKDIR /opt/nodeapp

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["host/server.js"]