## Простий проект для розвитку навичок з різними інструментами

# nginx
Конфігурація в nginx/nginx.conf
Запускається в докер контейнері й переправляє запити. 
Наразі з https://localhost:9443 до нашого апі на 4000 порту.

# nginx + ssl
Якщо переводити з локального проекту в продакшн з  доменним ім'ям, тоді можна використати Let’s Encrypt разом із Certbot.
Його можна легко інтегрувати в Nginx, і сертифікати будуть автоматично оновлюватися. 

```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```
Цей спосіб не підходить для локального середовища, бо Let’s Encrypt видає сертифікати тільки для доменних імен.

## Docker
Запустити або збілдити контейнери:
```
docker-compose up --build
docker-compose up
docker-compose down
docker-compose up --no 
```
Стаття по докеру https://habr.com/ru/companies/ruvds/articles/440658/ 
