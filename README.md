# express-app
https://www.youtube.com/watch?v=WsZC7cE0-NE

npm init -y
npm i express

sudo apt update
sudo apt install nginx

systemctl status nginx

sudo mkdir -p /var/www/sample/html
sudo chown -R $USER:$USER /var/www/sample/html
touch index.html
<h1>Hello world</h1>

sudo ln -s /etc/nginx/site-available/sample /etc/nginx/site-enabled/

sudo nginx -t
