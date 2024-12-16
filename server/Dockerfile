FROM python:3.10-slim

WORKDIR /app
RUN apt-get update && apt-get install -y protobuf-compiler && rm -rf /var/lib/apt/lists/*
COPY example.proto /app/

RUN pip install grpcio grpcio-tools protobuf

RUN python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. example.proto

COPY ./server/server.py /app/

RUN pip install grpcio protobuf

EXPOSE 50051
CMD ["python", "server.py"]