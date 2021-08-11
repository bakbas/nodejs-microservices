FROM node:15.5.1-alpine as app-build
ARG build
WORKDIR /app
COPY . ./
RUN yarn install --network-timeout 1000000
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=app-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]