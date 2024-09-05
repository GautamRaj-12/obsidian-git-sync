# Introduction
- An Operating System(OS) is a program that  manages the computer hardware.
- It also provides a basis for Application Programs and acts as an ***intermediary*** between computer **user** and **hardware**.
- Ex:  Windows, Ubuntu(Linux), MacOs, iOs, Android
  ![image](images/image-1.png)

## Why Do We Need an Operating System?

Operating Systems (OS) are essential because they act as intermediaries between users, applications, and the computer's hardware. Without an OS, a user would need to directly manage the hardware, which is highly complex and inefficient. The OS simplifies this process by providing a platform where applications can run and by managing hardware resources like memory, processors, and storage.

### Simple Example: Running a Music Player on a Computer

Imagine you want to play a song using a music player application. The OS makes this possible in the following ways:

### 1. User Interaction
- You open the music player by clicking its icon. The **OS's GUI** (Graphical User Interface) detects this click, interprets it as a request to open the app, and launches the application.

### 2. Memory Management
- Once the music player is open, the OS **allocates memory** (RAM) to load the application. It decides how much memory the music player needs, preventing other apps from interfering with it.

### 3. File System Management
- The music player asks for the song file you want to play. The OS manages the **file system**, finding the file in your computer’s storage (hard drive or SSD) and giving access to the music player.

### 4. Hardware Control
- When the song starts playing, the OS coordinates between the music player and your computer's **sound card** (hardware responsible for audio output). The OS sends the digital music data to the sound card, which then converts it to sound waves played through your speakers.

### 5. Multitasking
- While the song is playing, you might decide to open a web browser or check an email. The OS ensures that all applications (music player, browser, email app) can run simultaneously without conflicts. It **multitasks** by distributing CPU time and resources efficiently among them.

### 6. Device Management
- If you plug in headphones while the song is playing, the OS detects the new hardware (headphones) and reroutes the audio output from the speakers to the headphones.

### 7. Security
- The OS also provides **security** by ensuring that no malicious application can tamper with your music player or access sensitive data without your permission.

## Without an OS
- You’d have to manually allocate memory, load the song from storage, send the correct signals to the sound card, and manage hardware connections like headphones — all of which would require advanced knowledge of the computer’s hardware.
- An oversimplified example of how the code would look like
```asm
; Set up a memory segment (e.g., segment 0x2000) for data
MOV AX, 0x2000      ; Move segment address 0x2000 into AX register
MOV DS, AX          ; Set DS (data segment) to this address

MOV AH, 0x02        ; BIOS disk read function
MOV AL, 0x01        ; Number of sectors to read (1 sector = 512 bytes)
MOV CH, 0x00        ; Cylinder (track number) = 0
MOV CL, 0x02        ; Sector number to read (start at sector 2)
MOV DH, 0x00        ; Head number (side of disk) = 0
MOV DL, 0x80        ; Drive number (first hard disk)
MOV BX, 0x2000      ; Memory segment (to store the data)
INT 13h             ; Call BIOS interrupt to read the disk

JC disk_error       ; If the Carry flag is set, an error occurred

; Disk read was successful, data is now in memory at address 0x2000:0000

disk_error:
    ; Error handling code (simplified)
    MOV AH, 0x0E    ; BIOS Teletype Output
    MOV AL, 'E'     ; Display error message
    INT 10h         ; BIOS interrupt for displaying characters

MOV DX, 0x220       ; Port address for sound card (e.g., Sound Blaster)
MOV AL, 0x10        ; Command to initialize sound card
OUT DX, AL          ; Send the command to the sound card

MOV DX, 0x221       ; Data port for sound card buffer
MOV SI, 0x2000      ; Load memory address of song data
MOV CX, 512         ; Number of bytes to send (one sector)
send_data:
    MOV AL, [SI]    ; Load byte from memory into AL
    OUT DX, AL      ; Output byte to sound card
    INC SI          ; Move to next byte in memory
    LOOP send_data  ; Repeat until all bytes are sent

MOV DX, 0x123       ; Hypothetical port for checking headphone status
IN AL, DX           ; Read status from port
TEST AL, 0x01       ; Check if headphone bit is set
JZ no_headphones    ; Jump if no headphones are connected

; Headphones are connected, switch output

no_headphones:
    ; Do something else

```

The OS abstracts these complexities, making it easy for you to simply click and play the song!

## Types of OS
- **Batch OS**
- **Time Sharing OS**
- **Distributed OS**
- **Network OS**
- **Real Time OS**
- **Multi Programming/Tasking OS**

## Functions of OS
- It is an interface between User and Hardware
- Allocation of Resources
- Management of Memory, Security etc.

## Goals of OS
- Convenience
- Efficiency
- Both