# demo-quiz-app-nestjs
## Installation

Install NestJS CLI globally
```
npm install -g @nestjs/cli
```
Create a new NestJS project
```
nest new demo-quiz-app-nestjs
cd demo-quiz-app-nestjs
npm run start
```

Create quiz model
```
mkdir src/quiz
nest generate controller quiz
nest generate service quiz
```
Init front-end using ReactJS, taiwinCss, Typescript

```
npx create-react-app client --template typescript
npm install 
cd client
npx tailwindcss init -p 
npm start
```

Database 

```
npm install --save typeorm mysql2
```
Create SSL
```
openssl genpkey -algorithm RSA -out server.key
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```
Start PG
```
docker build -t my_postgres .
docker run -d -p 5432:5432 --name my_postgres_container my_postgres
docker ps -a # check my_postgres show up
```

