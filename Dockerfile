# Use an official PostgreSQL image as a base image
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_DB my_demo
ENV POSTGRES_USER demo
ENV POSTGRES_PASSWORD demo
ENV POSTGRES_SSL false