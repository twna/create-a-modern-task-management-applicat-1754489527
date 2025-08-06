{
    "code": "const swaggerJsdoc = require('swagger-jsdoc');\nconst swaggerUi = require('swagger-ui-express');\n\n// Swagger definition\nconst swaggerDefinition = {\n  openapi: '3.0.0',\n  info: {\n    title: 'Task Management API',\n    version: '1.0.0',\n    description: 'This is a REST API application made with Express. It retrieves data from a Task Management database.',\n  },\n  servers: [\n    {\n      url: 'http://localhost:3000/api',\n      description: 'Development server',\n    },\n  ],\n};\n\n// Options for the swagger docs\nconst options = {\n  swaggerDefinition,\n  // Paths to files containing OpenAPI definitions\n  apis: ['./routes/*.js'],\n};\n\n// Initialize swagger-jsdoc\nconst swaggerSpec = swaggerJsdoc(options);\n\n// Use swagger-ui-express for your app's documentation page\napp.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));\n\n// Serve swagger\napp.get('/swagger.json', function(req, res) {\n  res.setHeader('Content-Type', 'application/json');\n  res.send(swaggerSpec);\n});",
    "summary": "Implemented Swagger/OpenAPI documentation for the Task Management API. The code initializes Swagger using swagger-jsdoc and swagger-ui-express to serve the API documentation at '/docs' endpoint and the raw OpenAPI JSON at '/swagger.json'. The documentation is based on JSDoc comments in the route files.",
    "checklist": [
        "Install swagger-jsdoc and swagger-ui-express npm packages",
        "Define Swagger/OpenAPI specification for the Task Management API",
        "Set up Swagger UI to serve the API documentation",
        "Ensure route files are annotated with JSDoc comments for Swagger",
        "Test the '/docs' and '/swagger.json' endpoints to verify documentation is correctly generated and served"
    ]
}