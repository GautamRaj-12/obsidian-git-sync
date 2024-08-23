# Docker

## What is a Container?
- A way to ***package*** application with all the ***necessary dependencies*** and ***configuration***
- That package is ***portable***, that can be easily ***shared*** and ***moved  around***.
- Makes ***development*** and ***deployment*** more efficient.
## Where do containers live?
- Container Repository
- Private Repository
- Public Repository For Docker =***Dockerhub***
## How containers improved Application Development
### Before Containers
1. Team of Developers 
2. Developing Let's say a JS based application
3. Suppose it requires 10 services 'postgres' , 'redis' etc.
4. Every developer on its OS has to download, install, configure all these 10 services separately and locally.
5. Installation process different on each OS environment
6. Many steps where something could go wrong.
7. As there can be many commands to execute or steps to follow.
8. Very ***Tedious*** as we have to do all this work 10 times on each OS
### After Containers
- With containers we don't have to install any of the services directly on our OS.
- Because the container is its own operating system, layered with ***linux based images***.
- We have everything packaged in ***one isolated environment***.
	- packaged with all needed information

![[docker/images/Pasted image 20240823055422.png]]
- So, as a developer, no need to *search*, *download*, *install*, *configure* the services required.
- Just get the container, download  on local machine
	- ***Just 1 Docker command rha***