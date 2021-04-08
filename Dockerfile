FROM             node:13-alpine3.10
ENV              CHROME_BIN="/usr/bin/chromium-browser"\
                 PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
RUN              apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main             
WORKDIR          /code
COPY             . .
RUN              npm install
CMD              [ "node", "main.js" ]