# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

_**Note:** Add your program descriptions below._

### v0.1

**[A simple hello world [program](helloWorld.js) to demostrate input and output]**

### v0.2

**[A [calculator](avgCalc.js) finding the average between two numbers to demostrate variables ]**

### v0.3

**[A [program](ageExample.js) that prints different staments based on incremenets, utilizes if statements  ]**

### v0.4

**[A [stopwatch](stopwatch.js) to demonstrate incrementations ]**

### v0.5

**[The first [project](boardClearingGame.js) is a simple game where your objective is to clear the board, demostrates  ]**

### v0.6

**[A [game](stackTower.js) where the objective is to stack a tower, demonstrated how to use the LEDs and adjust brightness]**

### v0.7

**[A [program](count.js) that determines if the correct amount of inputs are reached, demostrates boolean   ]**

### v0.8

**[A [program](fourBit.js) that converts a binary number to a regular interger  ]**

### v0.9

**[A [game](radioGame.js) that requires two microbits and demonstrates that numbers and string can be transmitted between micro bits  ]**

### v0.10

**[A [list](groceryList.js) demostrating how to retreive elements in an array ]**

### v0.11

**[A [thermostat](tempAverage.js) that shows the average temperature and when the temp changes]**

###
## Designs

_**Note:** Add your project designs below._

### Midterm project

_**Note:** Add your project designs below._

#### Goal

**[My goal was to demonstrate the fundamentals of each section and try to use some other function of the microbit like the pause command]**

#### Design process

**[How do I make a program that explores all these topics with no outside modifications readily available? Start off simple and write out the simple things like varaibles and input and maybe an idea will manifest. The microBit has unique LEDs that could be utilized. It's important to me to always be as clear and concise as possible so anyone can understand the program when the y see it, so detailed instructions are very important to me.  ]**

#### JS Constructs & objects

**[Variables, if-statements, input, ouput, show methods?, for loops]**

### Final project

**[My goal wat to demosntrate understanding of topics outside of the lessons that the micro bit provided]**

**[I tackled the prompt one step at a time. I wanted to make sure each worked. Then i needed to figure out how to git all the parts together because there was some interferencce that happend. I need to make the user knows the instructions so there is no confusion on how to operate  ]**

**[Variable, input, output, increment, while loop]**
