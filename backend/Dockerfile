# pull official base image
FROM python:3.11.4-slim-buster

# set work directory
WORKDIR /backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && apt-get install -y netcat postgresql-client

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /backend/entrypoint.sh
RUN chmod +x /backend/entrypoint.sh

# copy project
COPY . .

EXPOSE 8000

CMD ["daphne", "-u", "/tmp/daphne.sock", "backend.asgi:application"]
# run entrypoint.sh
ENTRYPOINT ["/backend/entrypoint.sh"]
