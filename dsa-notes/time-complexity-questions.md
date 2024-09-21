1. 
```java
public void Function(int n){
	int i=1,s=1;
	while(s<=n){
		i++;
		s=s+i;
		System.out.println("*");
	}
}
```

2. 
```java
public void Function(int n){
	int i,count=0;
	for(i=1;i*i<=n;i++){
		count++;
	}
}
```

3. 
```java
public void function(int n){
	int i,j,k,count=0;
	for(i=n/2;i<=n;i++)
		for(j=1;j+n/2<=n;j++)
			for(k=1;k<=n;k=k*2)
				count++;
}
```

4. 
```java
public void function(int n){
	int i,j,k,count=0;
	for(i=n/2;i<=n;i++)
		for(j=1;j<=n;j=2*j)
			for(k=1;k<=n;k=k)
}
```

