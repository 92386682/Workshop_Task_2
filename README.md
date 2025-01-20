# Workshop_2b
Fractal lines using for functions, randomisers, translate and framerate counters and push/pop.
Needs revision for an endstate, will run until it crashes. to be cont.

Set timeout and set interval
Initially, I want to create a simple fractal illustration using recursion, adding a new layer to the fractal line every second. From the outset, I’m aware that this will involve scaling, transform, rotate and translation, but I feel like the main unknown will be setting the lines to appear at the end of the previous one, with continually changing and shrinking x/y coordinates.
ALong the process of making this, I got distracted by the setinterval() function and never really made it beyond drawing a line and getting it to rotate based on time. So, I made a clock, building off of using variable x y coordinates to follow a point.

  Beginning by looking into Daniel Shiffman’s explanation for fractals and looking at a p5 sketch created by “Lukalot” that has a similar effect, I began by creating a simple line.
https://editor.p5js.org/Lukalot/sketches/H1iMK5tum
Shiffman’s explanation of push() and pop() functions seem to allow to possibility of the fractal growing and reverting states but see if this is integrated into the final work.
![image](https://github.com/user-attachments/assets/6942fde9-5ee6-4da1-812e-cb31c9b17b08)

Beginning with a fairly basic code that was largely based upon Shiffman's example, I was able to attain the basic fractal in a short amount of time. The bigger difficulty was making this into a dynamic animation.
![20](https://github.com/user-attachments/assets/28c9549d-21b0-40e3-9b48-21532aae16ed)
Using a variable to account for the line space and having it branch off organically like a tree growing was the original plan, but this was later superceded by simple scaling and a more primitive "pop in" based around the branches growing based on the codes own framerate. 
THis took much experimenting, and troubleshooting. THis was the first time that I encountered a basic syntax error due to a misplaced semi-colon, and also the first time that ChatGPT was used, to troubleshoot this error.

![23](https://github.com/user-attachments/assets/e087f23a-75cf-4c7e-92f0-ec769aa5f104)


After time of coding, I've realised using a simple noLoop() and If() statement at the end of the code would of been a 2 minute fix to apply an end-point to the piece, but that's work for another day.
