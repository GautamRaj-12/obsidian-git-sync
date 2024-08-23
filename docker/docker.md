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

![][docker/images/Pasted image 20240823055422.png]
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

## Docker vs Virtual Machine
### OS
- 2 layers
	- **OS Kernel**: Communicates with hardware
	- **Applications**: Run on kernel layer
	- Linux has many distros. All these distros use linux kernel but implement different application on top that is why they look and behave differently.
### Docker & VM
- Both are virtualization tools
- But what ***part of the os*** do they ***virtualize***?

| **Attribute**                | **Docker**                                                                                                            | **Virtual Machine (VM)**                                                                                  |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| **Virtualization Layer**      | Virtualizes the ***application layer.***                                                                              | Virtualizes the ***complete OS.***                                                                         |
| **Kernel Usage**              | Uses the ***kernel*** of the host.                                                                                    | Does not use the host kernel; it boots up its own kernel.                                                  |
| **Image Composition**         | Docker image contains the application layer of the OS and other applications installed on top of it.                 | VM image contains the entire OS, including its kernel and all applications.                                |
| **Resource Consumption**      | Generally consumes fewer resources since it shares the host’s kernel and system libraries.                           | Consumes more resources because it requires a full OS instance, including its own kernel and system files.  |
| **Performance**               | Usually faster and more efficient due to lower overhead from sharing the host kernel.                                | Typically slower due to the overhead of running a full OS with its own kernel.                             |
| **Isolation**                 | Provides process-level isolation; all containers share the same OS kernel.                                           | Provides complete isolation as each VM runs a separate OS instance.                                        |
| **Startup Time**              | Faster startup times since there’s no need to boot a full OS.                                                        | Slower startup times because the full OS needs to boot.                                                    |
| **Use Case**                  | Ideal for microservices, continuous deployment, and when multiple applications need to run on the same OS environment.| Ideal for running different operating systems, or when full OS isolation is required.                      |
- **COMPATIBILITY**
	- VM of any OS can run on any OS host bu the same is not true for docker.
	- Example: Linux VM on Windows will work fine, similarly Windows VM on Linux will work fine.
		- But Linux based Docker image might not be compatible with windows kernel - True for older windows and mac versions.
		- New versions won't have any problem.
		- So, earlier, before downloading we had to check if host's kernel is compatible of running docker images.
		- If the host does not support then - ***Docker Toolbox*** - makes it possible for host to run docker images.

## Docker Installation
- Instructions on `docker.com` for Linux, Windows and Mac

## Basic Docker Commands
- All artifacts on docker hub are images.
- We pull the images from docker hub to local.
	- `docker pull <image>`
		- ex: *docker pull redis*, *docker pull postgres*
	- `docker pull <image:tag>`
		- ex: *docker pull ubuntu:22.04*
	- ***NOTE***: By default tag is `latest`
- To show all top level images, thier repository and tags and their size
	- `docker images`
	 ![[Pasted image 20240823111428.png]]
- To run an image, we need to create a container of that image.
	- `docker run <image>`
		- pulls the image if needed and starts.
		- Ex: `docker run redis`
	- `docker run -d <image>`
		- Runs container in detach mode, so as our terminal remains free
		- Prints container id
		 ![[Pasted image 20240823111724.png]]
	- ***Note***: Some images might require additional data for running.
		- ex: `docker run ---name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
		- `--name`: It specifies name of the container. Usually a default name is given but using this we can give the name of our choice.
- To list all containers
	- `docker ps`
	 ![[Pasted image 20240823112201.png]]
- To list all containers (running and stopped)
	- `docker ps -a`
	 ![[Pasted image 20240823112307.png]]
- To stop docker container
	- `docker stop <container id>`
	- Only first few characters of the container id are enough
	 ![[Pasted image 20240823112446.png]]
	 ![[Pasted image 20240823112500.png]]
- To start the same container
	- `docker start <container id>`
	![[Pasted image 20240823112724.png]]
	![[Pasted image 20240823112737.png]]
- Running different versions of same services on docker
	- `docker pull redis`
	- `docker pull redis:4.0`
	- `docker run -d redis`
	- `docker run -d redis:4.0`
	 ![[Pasted image 20240823113052.png]]
	- Right now both are running on the same port. So, if an application tries to connect to redis, it will fail.
	- Solution: ***PORT MAPPING***
- ***Port Mapping***
	- **Container Port** vs **Host Port**
		- Multiple containers can run on our host machine.
		- Our laptop has only certain ports available.
		- So, we need binding
		- Conflict happens when same port on host machine
		 ![[Pasted image 20240823114027.png]]
		- `docker run -p <host-port>:<container-port> -d <image-name>`
			- ex: `docker run -p 6000:6379 -d redis`
			- ex: `docker run -p 6001:6379 -d redis:4.0`
			![[Pasted image 20240823114339.png]]
- To Delete all stopped containers
	- `docker container prune`
- Remove unused images
	- `docker image prune`
	- `docker image prune -a`
		- Remove all not just dangling ones
		- Will remove all images without at least one container associated to them.

## Debugging Containers
- To see logs
	- `docker logs <container id or name>`
		- batch retrieves logs present at the time of execution
	- `docker exec  -it <container_id or name> /bin/bash`
		- Open's containers terminal

![[Pasted image 20240823114827.png]]
