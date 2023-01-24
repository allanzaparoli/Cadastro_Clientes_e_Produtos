FROM php:7.4-fpm

RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_mysql \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html
