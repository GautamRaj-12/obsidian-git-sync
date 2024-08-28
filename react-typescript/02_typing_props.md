- ***`App.tsx`*** and ***`Greet.tsx`***
	-  In this we are trying to render Greet component with name prop but as we have not defined that Greet will accept props, We get red squiggly line.

	 ![image](images/image-1.png)
	![image](images/image-2.png)
	
- Now, in ***`Greet.tsx`*** we define props. Now we get red squiggly line on props argument. Because it is of 'any' type.

    ![image](images/image-3.png)
     ![image](images/image-4.png)
     
- We are using typescript to avoid these. We don't want a component to accept 'any' type. Then there will be no difference between JS and TS.
- So, let's define type for our props.

- ***`Greet.tsx`***

  ![image](images/image-5.png)
  
- Now if we pass a number or any other data type other than TS will show error that you can't do that.
  ![image](images/image-6.png)
  ![image](images/image-7.png)

- ***type***:While building apps
- ***interface***:while building libraries