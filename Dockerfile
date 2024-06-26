FROM cgr.dev/chainguard/nginx:latest
COPY nginx.default.conf /etc/nginx/conf.d/nginx.default.conf
COPY dist /usr/share/nginx/html
EXPOSE 8080