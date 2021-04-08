FROM             node:current-alpine3.12
WORKDIR          /code
COPY             . .
RUN              npm install
RUN              npm install puppeteer@latest
CMD              [ "node", "main.js" ]