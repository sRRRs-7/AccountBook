FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#Run stage
FROM alpine
WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000
CMD [ "node_modules/.bin/next", "start" ]