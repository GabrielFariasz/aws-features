FROM node:14-alpine


# There is a way to optime the cache from containers, search how to use it
WORKDIR /app
COPY ./package*.json /app/

# How to avoid so many COPY commands?
COPY tsconfig.build.json /app/
COPY tsconfig.json /app/
RUN npm install 


RUN ls
COPY src /app/
CMD "npm" "start"
