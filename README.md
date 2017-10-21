# Program set-up

Install restore the program packages through npm
- npm install

# Launch test server

Lite server will host the application locally. In order to launch it use the command: 
- npm run dev 

The server should serve the site on local: 
http://localhost:3000/

# Site optimization

Improve pageSpeed score

- Optimize css use in index.html
        Use non blocking css via inline
        Separate css in three blocks according element need via media
- Optimize javascript calls in index.html
        Make javascript calls to googleanalytics non thread blocking via async calls
        Make font loading asynchronous vie the use of the google webfont api
- Optimize images size
        Use optimized base64 images equivalent to reduc the number of roundtrip and optimized the final page size in index.html
        Use an pizza-100px.jpg optimized for the site project miniature
        Use of an optimized pizza.png

Improve pizza.html framerate

- Introduce a updatePositions 
        extract all the pizza background calculation logic into an updatePositions function
        call the updatePositions in a requestAnimationFrame to be sure that it will first during the render phase
- Refactor the resizePizzas function
        introduce new variables 
            newwidth, use in the switch a simplified switch (by suppressing the changeSliderLabel function)  to handle the pizza.png sizig using releative values base on the screen size 
            randomPizzas, use in a loop in order to limit the number of call to the domm
- Limit the number of pizza images used in background 
        dynamicly calculate a the number of displayed pizza.png images by introducing a pizzaNum that calculate the number base on the column number and screen size



    
