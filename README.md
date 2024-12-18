# gRPC-Web Example with Envoy and Docker

This repository shows how to run a Python gRPC service accessible from a browser using gRPC-Web and Envoy.

## What's Included

- A **Python gRPC server** implementing a simple service
- An **Envoy proxy** that translates gRPC-Web requests from the browser into gRPC calls
- A **browser client** using Webpack to bundle the generated JavaScript stubs and call the gRPC service

## Get Started

1. Clone the repository:

```bash
git clone https://github.com/Vashkatsi/grpc-web-api-example.git
cd grpc-web-api-example
```

2. Build and run everything:

```bash
docker-compose up --build -d
```

3. Open the client at http://localhost:8081.
   Type a name, click "Say Hello," and the gRPC server will respond via Envoy.
