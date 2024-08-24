### 1. **Fetching All Blogs:**

- When fetching all blogs, pulling thousands of records (e.g., 10,000) at once is highly inefficient.
- Instead, it's better to limit the number of results and filter for specific criteria like whether the blog is published.
### 2. **Query Parameters:**

- Query parameters are a way to refine your API requests. They are added to the URL after a question mark `?`, followed by `name=value` pairs.
- Example: `/blogs?limit=10&published=true`.
### 3. **Handling Query Parameters in FastAPI:**

- **Path Parameters:** These are part of the URL path, e.g., `/blogs/{id}`.
- **Query Parameters:** These are passed in the URL after the path, e.g., `/blogs?limit=10`.
- To handle query parameters:
    - Accept them in your function similar to path parameters.
    - Use them to modify your database query.
- *When you declare other function parameters that are not part of the path parameters, they are automatically interpreted as "query" parameters.*
### 4. Examples
- **Defining Query Parameters**
	```python
		@app.get("/blog/{id}")
		def show(id:int,limit,published):
			return {f'Id:{id}, Limit: {limit}, published: {published}'}
	```

	- When we go to the URL: `http://127.0.0.1:8000/blog/14`
	- Output:
	  ![image](images/image-5.png)