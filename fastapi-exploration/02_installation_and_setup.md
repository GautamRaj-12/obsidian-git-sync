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
	- 