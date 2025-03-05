FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY next.config.ts ./
COPY postcss.config.mjs ./
COPY tailwind.config.ts ./
COPY eslint.config.mjs ./

RUN npm install
COPY . .

RUN npm run build

CMD ["npm", "run", "start"]