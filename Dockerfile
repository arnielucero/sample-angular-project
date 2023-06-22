FROM node:18.13.0 as build
EXPOSE 4200
WORKDIR "/var/www/html"

RUN yarn global add typescript
RUN npm install -g @angular/cli@14.2.10
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
COPY . .
RUN ng build

CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check"]

# FROM nginx:latest
# COPY --from=build /var/www/html/src /usr/share/nginx/html
# EXPOSE 80