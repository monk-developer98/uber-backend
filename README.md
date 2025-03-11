# /users/register Endpoint Documentation

## Description
Endpoint for user registration. It accepts user details and returns a JWT token along with the created user.

## Request
- **Method:** POST
- **URL:** /users/register
- **Content-Type:** application/json

### Request Body
```json
{
  "fullname": {
    "firstname": "string, required (min 3 characters)",
    "lastname": "string, optional (min 3 characters if provided)"
  },
  "email": "string, required, valid email format",
  "password": "string, required (min 6 characters)"
}
```

## Responses

### Success (200)
```json
{
  "token": "JWT token string",
  "user": { /* user details */ }
}
```

### Validation Error (400)
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
    // ...additional errors...
  ]
}
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60ed3c8ecf1e4b0017903a2c",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ... other fields ...
  }
}
```
