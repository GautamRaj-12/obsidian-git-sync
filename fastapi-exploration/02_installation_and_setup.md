## Create a virtual environment
- `mkdir awesome-project`
- `cd awesome-project`
- Create a virtual env
	- `python3 -m venv .venv`
		- `.venv` - This name can be any other name but this is the convention.
		- You only need to do this **once per project**, not every time you work.
- Activate the virtual environment
	- `source .venv/bin/activate`
	- Do this **every time** you start a **new terminal session** to work on the project.
	- Every time you install a **new package** in that environment, **activate** the environment again.
- Check if the Virtual Environment is Active
	- `which python`
	- Output should be: "../../../../awesome-project/.venv/bin/python"
- Upgrade Pip
	- `python3 -m pip install --upgrade pip`
- Add gitignore
	- `echo "*" > .venv/.gitignore`
		-  Create .venv/.gitignore and write * in that.

## Install fastapi
- Install package directly
	- `pip install "fastapi[standard]`
- Install from `requirements.txt`
	- `pip install -r requirements.txt`
## Basic Setup
- Create a file named `main.py` or any other name in the root directory of the project.
- Write the following code:
```
from fastapi import FastAPI

app = FastAPI()

  
@app.get("/")

def first():

	return {"data":{"name":"Ironman"}}

  
@app.get("/about")

def second():

	return {"data":{"tagline":"I am Iron Man"}}
```
- You can then run the server using one of the following commands:
	- `fastapi dev main.py` - We can open the browser and go to : `http://127.0.0.1:8000/`
	- `uvicorn main:app --reload` - It will run on `http://127.0.0.1:8000/`
	- `uvicorn main:app --port 4000 --reload` - Changed Port - It will run on `http://127.0.0.1:4000/`
- Output
  ![[Pasted image 20240823160337.png]]
- API DOCS
	- Now go to `http://127.0.0.1:8000/docs`
		- We will see an interactive API documentation automatically generated.
		- Then click on the "Execute" button, the user interface will communicate with your API, send the parameters, get the results and show them on the screen
	- Another doc `http://127.0.0.1:8000/docs`