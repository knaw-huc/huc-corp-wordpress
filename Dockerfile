FROM wordpress:4.9.8-php7.0-apache

RUN find /opt/bitnami/wordpress/wp-content/plugins/* -type d  -maxdepth 0 -exec rm -r '{}' \;
# COPY --chown=www-data:www-data ./plugins /usr/src/wordpress/wp-content/plugins
COPY --chown=www-data:www-data ./wp-content /usr/src/wordpress/wp-content/themes/huygens
