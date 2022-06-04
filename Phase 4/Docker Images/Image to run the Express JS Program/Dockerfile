FROM node:14-slim
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install 
COPY app.js /usr/src/app/
CMD ["node","app.js"]