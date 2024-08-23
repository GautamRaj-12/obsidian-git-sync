## 2 ways of creating thread
### 1. Thread (Class)
### 2. Runnable (Interface)

## Thread(Class)
### Thread class methods
- ***Basic Methods***
	- `public void run(){}`
	- `public synchronized void start(){}`
	- `public static native Thread currentThread()`
	- `public final native boolean isAlive()`
- ***Naming Methods***
	- `public final String getName(){}`
	- `public final synchronized void setName(String name){}`
- ***Daemon Thread Methods***
	- `public final boolean isDaemon(){}`
	- `public final void setDaemon(boolean on){}`
- ***Priority Based Methods***
	- `public final int getPriority(){}`
	- `public final void setPriority`