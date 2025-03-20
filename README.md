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

## /users/login Endpoint Documentation

### Description
Endpoint for user login. It accepts user credentials and returns a JWT token along with the user details.

### Request
- **Method:** POST
- **URL:** /users/login
- **Content-Type:** application/json

#### Request Body
```json
{
  "email": "string, required, valid email format",
  "password": "string, required (min 6 characters)"
}
```

### Responses

#### Success (200)
```json
{
  "token": "JWT token string",
  "user": { /* user details */ }
}
```

#### Error (400 / 401)
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
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
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com"
    // ... other fields ...
  }
}
```

## /captain/register Endpoint Documentation

### Description
Endpoint for captain registration. It accepts captain details and returns a JWT token along with the created captain.

### Request
- **Method:** POST
- **URL:** /captain/register
- **Content-Type:** application/json

#### Request Body
```json
{
  "fullname": {
    "firstname": "string, required (min 3 characters)",
    "lastname": "string, optional (min 3 characters if provided)"
  },
  "email": "string, required, valid email format",
  "password": "string, required (min 6 characters)",
  "vehicle": {
    "color": "string, required (min 3 characters)",
    "plate": "string, required (min 3 characters)",
    "capacity": "integer, required (minimum 1)",
    "vehicleType": "string, required (one of: car, motorcycle, auto)"
  }
}
```

### Responses

#### Success (200)
```json
{
  "token": "JWT token string",
  "captain": { /* captain details */ }
}
```

#### Validation Error (400)
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
  ]
}
```
