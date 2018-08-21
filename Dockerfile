FROM bitnami/wordpress:4.9.6-r3
RUN rm -r /opt/bitnami/wordpress/wp-content/themes
RUN find /opt/bitnami/wordpress/wp-content/plugins/* -type d  -maxdepth 0 -exec rm -r '{}' \;
COPY ./wp-content /opt/bitnami/wordpress/wp-content
