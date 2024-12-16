FROM node:16

WORKDIR /app
RUN apt-get update && apt-get install -y protobuf-compiler && rm -rf /var/lib/apt/lists/*
RUN npm install -g protoc-gen-grpc-web http-server

COPY example.proto /app/
RUN protoc -I=. example.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

COPY client/package.json client/index.js client/webpack.config.js /app/
RUN npm install
RUN npx webpack

COPY client/index.html /app/
EXPOSE 8081
CMD ["http-server", "-p", "8081", "/app"]