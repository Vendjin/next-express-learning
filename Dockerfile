# Используем базовый образ с Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем все файлы проекта
COPY . .

# Сборка проекта
RUN npm run build

# Указываем порт, который будет использовать контейнер
EXPOSE 3000

# Команда для запуска Next.js в режиме production
CMD ["npm", "start"]