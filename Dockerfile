FROM bitnami/wordpress:4.9.6-r3

RUN rm -r /opt/bitnami/wordpress/wp-content

COPY wp-content /opt/bitnami/wordpress/
