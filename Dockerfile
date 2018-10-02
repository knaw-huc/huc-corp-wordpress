FROM wordpress:4.9.8-php7.0-apache

RUN rm -r /opt/bitnami/wordpress/wp-content/plugins
RUN rm -r /opt/bitnami/wordpress/wp-content/themes

COPY --chown=www-data:www-data ./wp-content /usr/src/wordpress/wp-content
