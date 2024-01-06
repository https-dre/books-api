FROM node:latest

WORKDIR /usr/src/app

COPY . .

# Instalação das dependências =>
RUN npm install

# Realzando Build =>

RUN npm run build

# Expondo a porta em que a aplicação vai Rodar =>

EXPOSE 2007

# Start da aplicação

CMD ["npm", "start"]