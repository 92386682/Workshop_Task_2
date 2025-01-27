# Workshop 2: Coding Environments & Sharing Work
Try using an IDE running locally on your own computer, rather than the p5.js web editor. VSCodium or VSCode are recommended. If you use  VSCodium, see this workaround to install the p5.vscode extensionLinks to an external site. and use this file Download this file(you can install the Live Preview extension through the application's extension manager). For VSCode, you can install both extensions from the application's extension manager.
Make a p5.js sketch using the setTimeout and setInterval functions.
Experiment with at least one new item from the from the p5.js documentationLinks to an external site..
Create a GitHub loginLinks to an external site., make repositories for your three p5.js sketches (for workshop tasks 0, 1 and 2), and publish these projects as webpages using GitHub pages. Include a README file in each repository with a link to the webpage. Use the README files to document your work clearly.
Post a link to your GitHub account on the course discussion board on Canvas.

https://92386682.github.io/Workshop_Task_2/

# Initial response/plan
Set timeout and set interval Initially, I want to create a simple fractal illustration using recursion, adding a new layer to the fractal line every second. From the outset, I’m aware that this will involve scaling, transform, rotate and translation, but I feel like the main unknown will be setting the lines to appear at the end of the previous one, with continually changing and shrinking x/y coordinates. ALong the process of making this, I got distracted by the setinterval() function and never really made it beyond drawing a line and getting it to rotate based on time. So, I made a clock, building off using variable x y coordinates to follow a point.
``function setup() {
  createCanvas(400, 400);
  strokeWeight(1)
 
}
let x = 100
setInterval(() => {
  x++
  }, 100); 
  //makes the line grow
    if (x=400) {
        x=0}
    //resets once it hits the corner of the canvas
function draw() {
  background(220);
  line(0, 0, x, x)
  line(x, x, 400, 0)
}``

EARLY DEVELOPMENT
To begin, I needed to understand how to get the fractal “tree” to grow. After some playing around, I discovered that the line() function has an inbuilt functionality, and that by leaving x/y coordinates as variables, lines could move and follow each other. Whilst integrating this with the setInterval() function to create movement in the line, I was distracted by working out how javascript measures time and frames, and created a basic analogue clock analogue. Whilst not actually telling the time (unless started at exactly midday/midnight) the process of developing this utilized p5s text function, rotation based on two separate setIntervals, and fairly simple If/Else statements.
Whilst technically fulfilling this task, I still wanted to attempt some form of fractal illustration. This code is available in the subfolder “clock”. I did learn that layer two draw functions does not really work, at least in my implementation.
![image](https://github.com/user-attachments/assets/82ab9884-087e-416b-8ed8-6b8973475811)
![16](https://github.com/user-attachments/assets/45862d94-4bdb-4844-af60-516ac98a6bf2)
![17](https://github.com/user-attachments/assets/6c2cecd9-55cd-4c72-a16d-a864505d588d)

 

FURTHER DEVELOPMENT
Beginning by looking into Daniel Shiffman’s explanation for fractals and looking at a p5 sketch created by “Lukalot” that has a similar effect, I began by creating a simple black canvas, and from Shiffman’s explanation, discovered a simpler way to centre the point of origin on the canvas ‘translate(width / 2, height);’ allowing the canvas to be expanded or shrunk without misaligning the drawn elements. Shiffman’s tutorial (cited end of page) broke down the key elements that he created his version with, as well as clearly defining pop() and push() functions. I also made use of his method of using PI / 4 to the to determine the angle of the branches, as it seemed neater, but I was unable to determine the benefits of this against merely setting the angle of branch manually. 
Following his tutorial, I was able to create a single branch, and by simple reversing the variables, was able to replicate the basic fractal tree pattern. From this point on, all work was completed without reference, the larger part of this workshop task was turning a static drawing into a more dynamic animation via the use of setInterval() and setTimeout() functions. 
![20](https://github.com/user-attachments/assets/54324692-5fad-402d-acfd-0a4a19c8d3c8)


 
FURTHER DEVELOPMENT & TROUBLESHOOTING
Attempting to have the angle of the branches change and grow via 'setTimeout () { angle ++ }  1000' broke the code, leading to it flickering between 2 states that didn’t align with the original plan. Reverting to a previous plan, I then experimenting with the various effects that iterating variables had on the final product, generally to dissatisfactory results.
  ![21](https://github.com/user-attachments/assets/90a2fbdf-f5ec-4b51-a995-9a9800f70bc2)

It was around this time that the code completely stopped running. After two hours troubleshooting, eventually I used ChatGPT for the first time in this course, with the prompt “why is this code not working”, followed by the full code. It identified a fullstop that was placed where a comma should have been in the setTimeout function that, as well as recommending a more condensed format for the same function.  
After a fair degree of experimentation, the dynamic growth of each branch at the end of the previous once was accomplished by a simple if() statement relating to branch length, and dynamic growth speeds achieved by the utilising Javascripts inbuilt frameCount to determind the length of the line, and putting the actual branching portion of the code behind ‘if (len > 160) {“. By dividing this count, the speed of the trees growth varies greater. 
Writing retrospectively, it was around this time the code stopped addressing the workshop task itself, and as such at time of writing I’ve gone in and replaced the frameCount with 

``setInterval (() => {
  counter++
}, 1000 / 100);'
Additionally, as an endstate, I included 
'if (counter > 5000) {
      noLoop ()``
Functionally, these accomplish similar goals, with the benefit that the code wouldn't just run until the software crashed. 



