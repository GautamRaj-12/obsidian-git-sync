- ***`App.tsx`*** and ***`Greet.tsx`***
	-  In this we are trying to render Greet component with name prop but as we have not defined that Greet will accept props, We get red squiggly line.
	 ![[Pasted image 20240828112927.png]]
	 ![[Pasted image 20240828113018.png]]
- Now, in ***`Greet.tsx`*** we define props. Now we get red squiggly line on props argument. Because it is of 'any' type.
     ![[Pasted image 20240828113310.png]]
     ![[Pasted image 20240828113334.png]]
- We are using typescript to avoid these. We don't want a component to accept 'any' type. Then there will be no difference between JS and TS.
- So, let's define type for our props.
- ***`Greet.tsx`***
  ![[Pasted image 20240828114332.png]]