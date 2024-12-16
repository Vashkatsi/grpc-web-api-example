FROM envoyproxy/envoy:v1.31-latest
COPY envoy.yaml /etc/envoy/envoy.yaml
EXPOSE 8080
CMD ["envoy", "-c", "/etc/envoy/envoy.yaml", "--log-level", "info"]