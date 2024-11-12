FROM node:22.9-slim

RUN useradd -ms /bin/sh -u 1001 app
USER app

WORKDIR /app

COPY --chown=app:app . .

EXPOSE 8181

RUN npm i

CMD [ "npm", "run", "server" ]
