const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'student API',
      version: '1.0.0',
      description: 'API documentation for student dashboard operation',
    },
    servers: [
      {
        url: '/',
        description: 'Default Server',
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'authorization',
          description: 'Enter "sadaf" to authorize requests',
        },
      },
      schemas: {
        Student: {
          type: "object",
          properties: {
            id: {
              type: "integer"
            },
            name: {
              type: "string"
            },
            age: {
              type: "integer"
            },
            course: {
              type: "string"
            }
          }
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean"
            },
            message: {
              type: "string"
            }
          }
        },
        ValidationErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean"
            },
            message: {
              type: "string"
            },
            error: {
              type: "string"
            }
          }
        }
      }
    },
    paths: {
      "/students": {
        "get": {
          "summary": "Get all students",
          "responses": {
            "200": {
              "description": "A list of students",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "success": {
                        "type": "boolean"
                      },
                      "message": {
                        "type": "string"
                      },
                      "count": {
                        "type": "integer"
                      },
                      "data": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/Student"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a new student",
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "age": {
                      "type": "integer"
                    },
                    "course": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "age",
                    "course"
                  ]
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Student created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "success": {
                        "type": "boolean"
                      },
                      "message": {
                        "type": "string"
                      },
                      "data": {
                        "$ref": "#/components/schemas/Student"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Validation error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationErrorResponse"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            }
          }
        }
      },
      "/students/{id}": {
        "get": {
          "summary": "Get student by ID",
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              },
              "description": "The student ID"
            }
          ],
          "responses": {
            "200": {
              "description": "Student fetched successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "success": {
                        "type": "boolean"
                      },
                      "message": {
                        "type": "string"
                      },
                      "data": {
                        "$ref": "#/components/schemas/Student"
                      }
                    }
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            },
            "404": {
              "description": "Student not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            }
          }
        },
        "put": {
          "summary": "Update student by ID",
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              },
              "description": "The student ID"
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "age": {
                      "type": "integer"
                    },
                    "course": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Student updated successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "success": {
                        "type": "boolean"
                      },
                      "message": {
                        "type": "string"
                      },
                      "data": {
                        "$ref": "#/components/schemas/Student"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Validation error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationErrorResponse"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            },
            "404": {
              "description": "Student not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "summary": "Delete student by ID",
          "security": [
            {
              "ApiKeyAuth": []
            }
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              },
              "description": "The student ID"
            }
          ],
          "responses": {
            "200": {
              "description": "Student deleted successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "success": {
                        "type": "boolean"
                      },
                      "message": {
                        "type": "string"
                      },
                      "data": {
                        "$ref": "#/components/schemas/Student"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Validation error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationErrorResponse"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            },
            "404": {
              "description": "Student not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse"
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  apis: [], // Scan route files for documentation
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
