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



