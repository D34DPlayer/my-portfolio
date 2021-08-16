# build stage
FROM node:lts-slim as build-stage
WORKDIR /app
ARG VUE_APP_DOMAIN_NAME=localhost
ARG CHROMIUM_PATH=chromium
ARG PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN apt-get -y update &&\
    apt-get -y install chromium

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# production stage
FROM nginx:1.17
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=build-stage /app/dist .
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
