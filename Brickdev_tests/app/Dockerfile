# официальный образ Node.js в качестве базового
FROM node:20

WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем остальные файлы приложения
COPY . .

EXPOSE 8000

# Команда для запуска приложения
CMD ["npm", "start"]

