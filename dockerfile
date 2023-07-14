# Основной образ для сборки
FROM node:14 as build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Итоговый образ для запуска
FROM node:14 as production-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы из предыдущего образа
COPY --from=build-stage /app/dist /app/dist

# Устанавливаем зависимости только для запуска сервера Vite
COPY package.json .
COPY package-lock.json .
RUN npm install -g vite
RUN npm install --only=production

# Открываем порт, на котором будет работать сервер Vite
EXPOSE 5173

# Запускаем сервер Vite
CMD ["npm", "run", "dev"]
