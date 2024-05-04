FROM node:20-alpine
WORKDIR /app
COPY . .
RUN yarn

EXPOSE 3000

CMD ["yarn", "run", "start"]
