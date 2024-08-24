# The Code
```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def index():
	return {"data":"blog list"}

@app.get("/blog/unpublished")
def unpublished():
	return {"data":"all unpublished blogs"}

@app.get("/blog/{id}")
def show(id:int):
	return {"data":id}

@app.get("/blog/{id}/comments")
def comments(id):
	return {"data":['1','2']}
```
# FastAPI Blog System Implementation

## 1. Fetching All Blogs
- **Task:** Create an endpoint to fetch all blogs.
- **Implementation:**
  - Define a `GET` route, for example, `/blogs`.
  - Since you're not using a database yet, you can return a hardcoded list of blogs.
  - This is a straightforward operation, just to get all blogs available.

## 2. Fetching a Single Blog by ID
- **Task:** Create an endpoint to fetch a specific blog by its ID.
- **Implementation:**
  - Define a `GET` route with a path parameter, e.g., `/blogs/{id}`.
  - Use curly braces `{}` in the route to denote a dynamic parameter (e.g., `{id}`).
  - The dynamic parameter is captured as a variable within the route handler function.
  - The ID is passed as an argument to the function, which you can then use to fetch or return a specific blog.
  - **Example:**
    ```python
    @app.get("/blogs/{id}")
    def get_blog(id: int):
        return {"blog_id": id}
    ```

## 3. Type Validation
- **Task:** Ensure that the ID parameter is treated as an integer, not as a string.
- **Implementation:**
  - FastAPI automatically converts the URL path parameters to the type specified in the function signature.
  - If the parameter is defined as an `int`, FastAPI will attempt to convert the incoming string from the URL to an integer.
  - If the conversion fails, FastAPI returns a clear error message.
  - This is done using Pydantic, which handles data validation under the hood.

## 4. Handling Errors
- **Task:** Manage cases where the wrong type of data is provided in the URL.
- **Implementation:**
  - FastAPI provides informative error messages if a client sends a value that cannot be converted to the expected type.
  - For example, if a string is sent instead of an integer, FastAPI will return a "value is not a valid integer" error.

## 5. Fetching Comments for a Blog
- **Task:** Create an endpoint to fetch comments for a specific blog by its ID.
- **Implementation:**
  - Define another `GET` route, e.g., `/blogs/{id}/comments`.
  - Similar to fetching a blog, capture the ID in the route and use it to fetch the associated comments.
  - **Example:**
    ```python
    @app.get("/blogs/{id}/comments")
    def get_blog_comments(id: int):
        return {"comments": ["Comment 1", "Comment 2"]}
    ```

## 6. Fetching Unpublished Blogs
- **Task:** Create an endpoint to fetch all unpublished blogs.
- **Implementation:**
  - Define a route for unpublished blogs, e.g., `/blogs/unpublished`.
  - Ensure this route is placed **above** any dynamic routes like `/blogs/{id}` to avoid routing conflicts.
  - **Example:**
    ```python
    @app.get("/blogs/unpublished")
    def get_unpublished_blogs():
        return {"unpublished_blogs": []}
    ```

## 7. Dynamic Routing Conflicts
- **Issue:** If you place dynamic routes like `/blogs/{id}` before more specific routes like `/blogs/unpublished`, FastAPI might incorrectly match the dynamic route.
- **Solution:** Always place more specific routes above dynamic ones to ensure proper matching.
- Ex:
	```python
@app.get("/blog/{id}")
def show(id:int):
	return {"data":id}

@app.get("/blog/unpublished")
	def unpublished():
		return {"data":"all unpublished blogs"}
	```

	- The `/blog/{id}` route is defined before the `/blog/unpublished` route. FastAPI is trying to match the string `"unpublished"` as the `id` parameter in the `/blog/{id}` route, which is expected to be an integer. Since `"unpublished"` is not an integer, FastAPI throws an error.
	- **Solution**: To resolve this issue, you need to rearrange the routes so that the more specific route `/blog/unpublished` is defined before the more general dynamic route `/blog/{id}`.
## 8. Using Pydantic for Data Validation
- **Overview:**
  - Pydantic is a key library that FastAPI uses for data validation and type enforcement.
  - It supports a wide range of data types, including complex ones, ensuring that your API can enforce strict typing and validation rules.
