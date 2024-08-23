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
	- ***Just 1 Docker command - that too independent of OS***
- 1 command to install the app.
- So, if 10 services are required - Only 10 commands to run.
- So, setting up a local development environment becomes much easier and efficient.
- Also, we can have different versions of the same application running without any conflict.

## How containers improved application deployment?
### Before containers
1. Development team will produce  ***artifacts*** together with set of instructions(soi), to configure.

![[Pasted image 20240823062235.png]]

2. Operations team will handle setting up the environment to deploy those applications.
	![[Pasted image 20240823062342.png]]

3. So, need to install everything and configure everything.
4. Conflicts can happen.
5. Misunderstanding can happen.
6. Back and forth communication required.
### After Containers
- Developers and operations working in one team to package the whole configuration, dependencies etc.
![[Pasted image 20240823062622.png]]

- One single environment
- Only need to run docker command and configure docker runtime on server.
- No environmental configuration for separate things on server.
## What is a container(technically)?
-  A container is made up of images. We have layers of stacked images on top of each other. And at the base of most of the containers, we would have a ***linux based image***(mostly alpine - for small sizes).
- So on top of the base image, we will have ***application image***. There will be intermediary images.
![[Pasted image 20240823062857.png]]
- A container is a *running environment for image*

## Docker vs Virt