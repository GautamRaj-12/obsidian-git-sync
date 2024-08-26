1. `npm init -y`
2. `npm i express`
3. `npm i -D typescript`
4. Create index.ts file. 
	 ![[Pasted image 20240826164606.png]]
	-  Here we can see that when I type app. Nothing is been suggested. When I hover over the app variable it shows of type *any* which should be of type express. So we need to install type definitions for express.
	  ![[Pasted image 20240826164755.png]]
5. `npm i -D @types/express` : This package contains type definitions for express
	- Similarly, there are type definitions for most of the packages.
6. After installation 
     ![[Pasted image 20240826164931.png]]
     - It may happen that after installation, the types are still not reflected. In that case, go to command palette and restart TS server.,