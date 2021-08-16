# build stage
FROM alpine:edge as build-stage
WORKDIR /app
ARG VUE_APP_DOMAIN_NAME=localhost
ARG PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ARG PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      npm

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
