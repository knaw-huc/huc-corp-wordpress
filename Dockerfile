FROM node:9

RUN mkdir /app
COPY package.json /app
COPY package-lock.json /app
WORKDIR /app
RUN npm install
COPY . /app
RUN ./node_modules/.bin/gulp wp

FROM bitnami/wordpress:4.9.6-r3
RUN rm -r /opt/bitnami/wordpress/wp-content/themes
COPY --from=0 /app/wp-content /opt/bitnami/wordpress/
