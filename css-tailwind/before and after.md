## ::before and :: after
- They are really good ways to add extra style to our website without adding extra markup that we don't really need.
- html
```html
<p>Here is some content</p>
```
- css
```css
p::before{
	content:'';
	background:red;
	display:block;
	width:10px;
	height:10px;
}

p::after{
	content:'';
	background:red;
	display:block;
	width:10px;
	height:10px;
}
```
- Output
![image](css-tailwind/imagess/be)