# CSS Animations
## Two Ways
### 1. Transitions
### 2. Animations

## 1. Transitions

- Transitions wait until the change in a property occurs and then allows changes to take place over time.
- Without a transition any changes in a property will take effect immediately.
- Transitions should be used when properties are changed interactively
	- Ex: Hovering and Focusing

## 2. Animations
- Animations however provide keyframes for more control over the animation and allows us to create complex animations on a frame by frame basis.
- Use animations when you want to create complex animations that just work without having to wait for properties that change interactively.
- We can create stunning animations by combining both transitions and animations together.

## Transitions in Detail
- To create a transition, we first need a component that has change in property.
- So, I have a button, it has some styles and a hover state.
- When we hover over the button, we see that it happens immediately.
  ```html
	  <button>Let's Go</button>
	```

	```css
	button{
	  padding:18px 36px;
	  font-size:2rem;
	  background:#220011;
	  outline:none;
	  color:#f2f2f8;
	  border:2px solid #EE0044;
	  cursor:pointer;
	}

	button:hover{
	  transform:translateY(-10px)
	}
	```
	
	
  ![image](images/1.gif)
- We can make the hover state happen over time by transition properties.
	- `transition-property`: It defines which property the transition effect should apply to.
	- `transition-duration`: It defines how long the transition effect should take
	- `transition-timing-function`
	- `transition-delay`