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
     - It may happen that after installation, the types are still not reflected. In that case, go to command palette and restart TS server.
7. Now let's try to run the index.ts file : `node src/index.ts`
     ![[Pasted image 20240826165429.png]]
	- As we haven't defined "type"="module" in our package.json file, The ES6 import statement would not work and It might not work with ts anyway. So let's change the type first.
	- Let's run it again
	  ![[Pasted image 20240826165455.png]]
	- There is again an error saying that *Unkown file extension ts.* That's because it needs a JS file, not a TS file.
	- So we need to transp