FROM nginx:alpine

COPY org.html /usr/share/nginx/html/index.html
COPY riscv.png /usr/share/nginx/html/riscv.png
COPY script.js /usr/share/nginx/html/script.js
COPY styles.css /usr/share/nginx/html/styles.css

RUN chmod 644 /usr/share/nginx/html/riscv.png

EXPOSE 80