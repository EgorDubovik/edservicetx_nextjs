#!/bin/bash

# --- НАСТРОЙКИ ---
DOCKER_USER="childofbelarus"
IMAGE_NAME="edservice-nextjs"
SERVER_USER="bitnami"
SERVER_IP="18.117.75.47"
SERVER_PATH="~/htdocs/edservicenextjs.com"
KEY_PATH="C:/Users/posik/OneDrive/Рабочий стол/My Bad Dreams/.ssh/AmazonLight_server_key.pem"

echo "🚀 Начинаем деплой проекта..."

# 1. Сборка образа (Production)
echo "📦 Сборка Docker образа..."
docker build -f Dockerfile.prod -t $DOCKER_USER/$IMAGE_NAME:latest .

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки! Деплой остановлен."
    exit 1
fi

# 2. Отправка в Docker Hub
echo "☁️ Отправка образа в Docker Hub..."
docker push $DOCKER_USER/$IMAGE_NAME:latest

# 3. Команды на сервере через SSH
echo "🌐 Обновление образа на сервере..."
ssh -i "${KEY_PATH}" ${SERVER_USER}@${SERVER_IP} << EOF
    cd ${SERVER_PATH}
    sudo docker compose pull nextjs
    sudo docker compose up -d nextjs
    sudo docker image prune -f
    echo "✅ Сервер успешно обновлен!"
EOF

echo "🎉 Деплой завершен полностью!"