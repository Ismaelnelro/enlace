import dotenv from "dotenv";
dotenv.config()
import swaggerJsDoc from "swagger-jsdoc";


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API: Volunteers",
        version: "1.0.0",
        description: "A API OF Users",
      },
      servers: [
        {
          url: process.env.ORIGIN1,
          description: 'API Users for the ...'
        },
      ],
      tags: [
        {
          name: "User",
          description: "Operations about user"
        }
      ],
      paths: {
        "/auth/user/": {
          get: {
            tags: [
              "User"
            ],
            summary: "GET all userss in system",
            responses: {
              200: {
                description: "Successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              405: {
                description: "Invalid input"
              }
            },
            security: [
              {
                userstore_auth: [
                  "write:user",
                  "read:user"
                ]
              }
            ]
          }
        },
        "/auth/user/register": {
          post: {
            security: [
            {
              bearerAuth: []
            }
            ],
            tags: [
              "User"
            ],
            summary: "Create user",
            description: "This can only be done by the logged in user.",
            operationId: "createUser",
            requestBody: {
              description: "Created user object",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "User not found"
              }
            }
          }
        },
        "/auth/user/{id}": {
          get: {
            security: {
                userstore_auth: [
                  "read:user"
                ]
            },
            // security: {
            //   securestoreAuth: [""]
            // },
            tags: [
              "User"
            ],
            summary: "Get user by user ID",
            parameters: [
              {
                in: "path",
                name: "id",
                description: "The name that needs to be fetched. Use user1 for testing.",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "User not found"
              }
            }
          },
          put: {
            security: {
              securestoreAuth: [""]
            },
            tags: [
              "User"
            ],
            summary: "Update user",
            description: "This can only be done by the logged in user.",
            parameters: [
              {
                in: "path",
                name: "id",
                description: "id that need to be update",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            requestBody: {
              required: true,
              description: "Update an existent user in the store",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              404: {
                description: "User not found",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          delete: {
            security: {
              securestoreAuth: [""]
            },
            tags: [
              "User"
            ],
            summary: "Delete user",
            description: "This can only be done by the deletedd in user.",
            operationId: "deleteUser",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "The id that needs to be deleted",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            requestBody: {
              description: "Delete an existent user in the store",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/username",
                    $ref2: "#/components/schemas/User/properties/email",
                    $ref3: "#/components/schemas/User/properties/password"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/username",
                    $ref2: "#/components/schemas/User/properties/email",
                    $ref3: "#/components/schemas/User/properties/password"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/username",
                    $ref2: "#/components/schemas/User/properties/email",
                    $ref3: "#/components/schemas/User/properties/password"
                  }
                }
              },
              required: true
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              404: {
                description: "User not found",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          }
        }
      },
      components: {
        schemas: {
          order: {
            type: "object",
            properties: {
              id: {
                type: String,
                example: "638d039e8ce24f8a608e5a37"
              },
              userId: {
                type: String
              },
              quantity: {
                type: String,
                example: "638d039e8ce24f8a608e5a37"
              },
              shipDate: {
                type: String,
                format: "date-time"
              },
              status: {
                type: String,
                description: "Order Status",
                example: "approved",
                enum: [
                  "placed",
                  "approved",
                  "delivered"
                ]
              },
              complete: {
                type: "boolean"
              }
            },
            xml: {
              name: "order"
            }
          },
          User: {
            type: "object",
            properties: {
              username: {
                type: String,
                required: true,
                example: "Nombre"
              },
              firstname: {
                type: String,
                required: true,
                example: "Armando"
              },
              lastname: {
                type: String,
                required: true,
                example: "Paredes"
              },
              email: {
                type: String,
                required: true,
                example: "johndoe@gmail.com"
              },
              password: {
                type: String,
                required: true,
                example: "12345aB!"
              },
              avatar: {
                type: String,
                required: true,
                example: "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
              },
              workfield: {
                type: String,
                required: true,
                example: "Unknown"
              },
              workingmodality: {
                type: String,
                required: true,
                example: "Unknown"
              }
            },
            xml: {
              name: "user"
            }
          },
          ApiResponse: {
            type: "object",
            properties: {
              code: {
                type: "integer",
                format: "int32"
              },
              type: {
                type: String
              },
              message: {
                type: String
              }
            },
            xml: {
              name: "##default"
            }
          }
        },
        requestBodies: {
          UserArray: {
            description: "List of user object",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            }
          }
        },
        securitySchemes: {
            secureUserAuth: {
              bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT"
            }
          },
        
        }
      },
    },
    apis: ["./routes/*.ts"]
}

// Docs in JSON format
export const specs = swaggerJsDoc(options);