FROM mcr.microsoft.com/playwright:v1.37.1-focal

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

RUN touch .env

ENV headless=true
ENV production=true

# EXPOSE 3000/tcp # This seems to do nothing, so we do it in docker-compose.yaml instead

CMD ["node", "dist/foreclosure/index.js"]