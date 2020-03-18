FROM node:12.2.0-alpine
WORKDIR /web
COPY . ./
RUN npm install
CMD [ "npm", "start" ]