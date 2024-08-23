## Key Concepts in FastAPI: Path, Operations, Path Operation Function, Path Operation Decorator

### 1. Path
- **Path**: In FastAPI, a *path* refers to the specific endpoint or URL where an API route is accessible. It is the part of the URL that comes after the domain name.
  - **Example**: In the URL `https://example.com/items/`, the path is `/items/`.
- **Usage**: Paths are used to determine which function should handle the incoming HTTP request. Paths can also include variables, making them dynamic (e.g., `/items/{item_id}`).

### 2. Operations (HTTP Methods)
- **Operations**: These refer to the standard HTTP methods used to interact with the API. The most common operations include:
  - **GET**: Retrieve data from the server.
  - **POST**: Submit new data to the server.
  - **PUT**: Update existing data on the server.
  - **DELETE**: Remove data from the server.
- **Usage**: Each operation corresponds to a specific action on the data at a given path. For example, a GET operation on `/items/` might return a list of items, while a POST operation on the same path might add a new item.

### 3. Path Operation Function
- **Path Operation Function**: This is the function that gets executed when a specific HTTP operation is performed on a particular path. It contains the logic for handling the request and generating the response.
- **Naming**: The name "path operation function" comes from combining the *path* (e.g., `/items/`) and the *operation* (e.g., `GET`).
- **Example**:
  ```python
  @app.get("/items/")
  def read_items():
      return {"items": ["apple", "banana"]}
