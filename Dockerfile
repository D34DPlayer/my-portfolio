# build stage
FROM node:lts-slim as build-stage
WORKDIR /app
ARG DOMAIN_NAME=https://www.d34d.one

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build

# production stage
FROM nginx:1.17
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=build-stage /app/dist .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
