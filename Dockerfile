FROM node:alpine3.10

WORKDIR /app

COPY package.json /app/package.json

# since we are using local files and not copying them to docker
# add the container's node_modules folder to docker's $PATH
# so that it can find and watch it's dependencies
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]
