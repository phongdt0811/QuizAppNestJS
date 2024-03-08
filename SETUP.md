# INSTALL ENV
Docker
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install 20
nmv alias default 20
```

Clone source
```
git clone git@github.com:phongdt0811/demo-quiz-app-nestjs.git
cd demo-quiz-app-nestjs/
```
Install Dependencies
```
npm i
cp .env.example .env
```

Start Postgres

```
docker build -t my-postgres .
docker run -p 5432:5432 my-postgres -d
```

Create database
```
docker exec -it <containerid> bash
psql -h localhost -p 5432 -U demo -c "create database my_demo"
```

Migration
```
npm run migration:run
```

Start server 
```
pm2 start deploy.json
```

Start docker
```
docker compose up -d
```