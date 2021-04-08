FROM             node:current-alpine3.12
RUN              apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.12/main
WORKDIR          /code
COPY             . .
RUN              npm install
CMD              [ "node", "main.js" ]