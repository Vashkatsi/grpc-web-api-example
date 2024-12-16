const example = require('./example_pb.js');
const exampleService = require('./example_grpc_web_pb.js');

// Expose them on window so index.html can access them
window.example = example;
window.exampleService = exampleService;