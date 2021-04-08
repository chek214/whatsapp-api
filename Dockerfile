FROM             node:current-alpine3.12
WORKDIR          /code
COPY             . .
RUN              npm install
CMD              [ "node", "main.js" ]