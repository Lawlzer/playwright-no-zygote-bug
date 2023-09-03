FROM mcr.microsoft.com/playwright:v1.37.1-focal

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

CMD ["node", "src/index.js"]