FROM             node:current-alpine3.12
WORKDIR          /code
COPY             . .
RUN              npm install
RUN              apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.12/main
CMD              [ "node", "main.js" ]