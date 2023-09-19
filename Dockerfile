FROM node:18.14.2-alpine

ENV HOST 0.0.0.0

RUN apk update && apk upgrade -U -a
RUN apk add wget
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm
RUN pnpm config set store-dir .pnpm-store

COPY . ./

RUN pnpm i
RUN pnpm test
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]



