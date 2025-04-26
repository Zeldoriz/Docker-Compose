FROM node:slim
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
RUN npm install typescript
COPY . .
EXPOSE 3000
RUN npx tsc
CMD ["npm", "start"]
