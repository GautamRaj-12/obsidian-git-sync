- ***`App.tsx`*** and ***`Greet.tsx`***
	-  In this we are trying to render Greet component with name prop but as we have not defined that Greet will accept props, We get red squiggly line.
	 ![[Pasted image 20240828112927.png]]
	 ![[Pasted image 20240828113018.png]]
- Now, in ***`Greet.tsx`*** we define props. Now we get red squiggly line on props parameter. Because it is of any type.
     ![[Pasted image 20240828113310.png]]
     ![[Pasted image 20240828113334.png]]
- We are using typescript to avoid these. We don't want a component to accept 'any' type. Then there will be no difference between JS and TS.
- It is not going to stop rendering, so, if even if we pass any number, it will be render 10. Imagine reading "Welcome 10 , You have 10 unread message."