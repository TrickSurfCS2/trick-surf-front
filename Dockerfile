FROM node:20.6.1-slim

WORKDIR /opt/trick-surf-front

COPY . .

RUN npm i bun -g --quiet
RUN bun i --ignore-scripts
RUN bun run build

ENV HOST 0.0.0.0
CMD ["bun", "run", "start"]