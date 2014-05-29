# Day 2 Project Outline

- Welcome!

- **Part One** Building Our Data Structures
    - 1A: Create animal object
    - 1B: Create animals collection array
    - 1C: Create relationships between the animals in the collection
    - 1D: Review

- **Part Two** Accessing and Manipulating the Data
	- Scenario 1: Profile Page
	- Scenario 2: Browse
	- Scenario 3: Search and Add Friends
	- Scenario 4: Edit Profile
	- Scenario 5: Edit Animal Collection 

---


## Welcome
We are glad to see you here at Day 2 of JavaScript Fundamentals. Today is a project day so we will be pairing up on the pairing machines. 

#### What's the format of today's class?
Today we will be doing a quick review of what we covered in the previous class and then jumping into a project that directly applies what we learned. 

#### What is the goal of the project that we will be working on today?
Today we will be implementing the logic of a match-making social networking app that addresses a niche market that has not been explored before: animals! That's right - we are making an OKCupid or eHarmony for the animal kingdom! This is a data-intensive app so I hope everyone is ready to create, access and manipulate complex data structures. 

#### What will I need to do well in the class?
- You should have some exposure to JavaScript syntax fundamentals, such as loops and control flow, objects and arrays. **If you are relatively new to these concepts, please tell a TA quickly so we can take extra care in keep you on track during the exercises.**
- Some of the instructions are written with the assumption you're using [Google Chrome](www.google.com/chrome/). While you are welcome to use any browser you like, Chrome has some of the best dev tools available, and it's highly recommended you try it for the duration of this class.
- Any plain text editor will suffice for you to edit the exercise files. [Sublime Text](http://www.sublimetext.com/download) is a good choice.


#### What if I finish an exercise with extra time?
If you finish one of the assignments ahead of schedule, your best bet is to research and reinforce any previous concepts you'd felt shakey on, since each lecture is designed to build on a firm understanding of the previous ones. If you feel strong in all the material you've covered already, talk to an instructor and we will find some extra credit for you.

---

#Day 2 Project Directions

##Before You Get Started
Explore the files in the **Day2 Folder**.
 
You should find an **index.html** file which you should run in your browser. 

This is should be a blank document but will make all your javascript files available in the console so that you do not need to copy/paste every time. 

When you complete a section, feel free to comment out any console.logs so that you don't clutter up your console as you are testing your code. 

You should also find a part1.js file and a **part2.js file**. These are the files you will be coding in.  

---
## Part One: Data
In this section we will be setting up the data structures that we will be using throughout the project. We will be creating and nesting objects in arrays to reinforce concepts we learned in the previous lecture

**You will be placing all your code into the part1.js file.** 


### Step 1: Create a single animal object
This object will be the model of what our animal data will look like.

##### Step 1A - Object
We are going to create an object to hold our data using all the different ways of adding properties and values to an object.

- Create a variable and name it animal, assign it an empty object

- Using dot notation, add a property called 'species' and assign it a value
- Using dot notation, ensure that your species property exists on animal
- Using bracket notation, add a property called tagline and give it a value
- Using brakcet notation, check and make sure that your property exists on the animal object
- Using either bracket or dot notation, add a property called noises and assign it the value null
- Inspect your handiwork! your object should look something like this:
`{ species: 'duck', tagline: 'Afflack', noises: null } `


##### Step 1B - Array
We are going to create an array and practice the different ways of adding values.

- Create a variable called noiseArray and assign it to an empty array.
- Using bracket notation, add a noise as a string that your animal makes to the noiseArray.
- Using a native array method, add another noise to the end of the noiseArray.
- Using a different method, add a noise to the beginning of the noiseArray.
- Using bracket notation again, add another noise to the end.
- What is the length of the noiseArray? Check it.
- What is the last index on the noiseArray? How is it different than the length?
- Inspect your handiwork! What does the array you just created look like?


##### Step 1C - Nest the Array in the Object
We are now going to put the noiseArray inside the animal object

- Create a variable called noizes and assign it the string 'noises'.
- Use the noizes variable with the animal object to access the value 'null'
- Now use the noizes variable with the noiseArray to replace the value null with your noiseArray.
- inspect your data structure, it should look something like this:
	`{ species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] }`
	
- Congrats! You just made a nested data structure :)  


##### Review
Let's go over some over-arching concepts:

- What are the different ways you can add properties and values to objects? 
- What about arrays?
- What if you wanted to add a property to an object that had a weird symbol?
- What about if it is a variable, how does that change the syntax?

---


### Step 2: Create a collection of animals
We are now going to take our one animal and add it to an array to create a collection of animals.

- Create a variable called animals and set it equal to an empty array
	- Note that this variable is animals(plural) while the variable in step 1 is animal(singular)
- Using any method you prefer, add your animal from step 1 to the animals array.
- Create a variable called quackers and assign it to the example object that I created above:
	- `{ species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] }`
	
- Add quackers to the animal array using a different method than before.
- Inspect your animals array to ensure you have two objects inside.
- Create two more animal objects with these properties and values you create: 
	- species (with a string value) 
	- tagline, (with a string value)
	- noises (with an array of values)
- Check the length property of your array. It should give you 4

---
### Step 3: Create relationships between animals
Let's think about the best data structure to represent a relationship between two animals in our collection. Imagine that our app has a 'friendslist' on their profile where it lists out all of their friends. What do you think is the best way to represent this? Would you use an array or an object or some combination of both? Let's walk through the process together
##### 3a: Create a Friendslist
- Choose a data structure for the list of friends.
- Justify your decision.
- Create a variable called friends and assign it to the empty data structure.
- Using your animals array, add two species to the friends data structure.
	- ensure that you are just putting the species name, not the entire object
	- be careful not to use a destructive method like pop() that will remove the whole value from the animals array.
- Inspect your friends data structure. What does it look like?

##### 3b Create a Relationships object

Imagine now that we have more than one kind of relationship in our app, we have friends and then we have romantic matches. Let's create an object to organize these different relationships!

- Create a variable called relationships assign it to an empty object.
- Add your friends data structure to the relationships object.
- Inspect your object. What is it's length?
- Create a variable called matches and assign it to an empty array.
- Add the matches array to the relationships object. It should look like this:
	- `relationships = { friends: ['duck', 'camel'], matches: []}`
- Using the relationships object, add some species to the matches array
	- hint: the mathes array is now nested inside the relationships object!
- Inspect your object. Is the matches array now populated with some lucky species?
- Loop through your animals collection, adding the relationships object to each animal. Name the property relationships.
	- Note: it is ok that these are all the same relationship object.

--- 

## Part Two: Acessing and Manipulating our Data
So we now have raw data for our app. Now we are going to go through some exercises in manipulating and accessing our data like you would if you were going create a real app with it. In the future, you could take the data that you are simply console.log()'ing and use jQuery to add it to your HTML. We are going to use our animals collection data that we created above for all the following exercises. Feel free to use these directions simply as guidelines and get creative with how you'd like your app to behave. 

**You will be placing all your code into the part2.js file.** 

### Scenario 1: Animal Profile Page
In our first scenario, we want to create a profile page for one of our animals. We will immulate this by console.log()'ing data we might want to find on a profile page. This would include the personal data as well as relationship data like who are their friends and who are their matches.

##### 1a: Log the Animal Personal Data
- Choose which animal you want for your profile page, select it from your animals collection and save it in a variable called profileAnimal.
- Loop through the properties of the animal, console.log the property name and if the property value is a string, also print that out. If the value is not a string, then just put a placeholder value of 'click here for data' (not actually a link)
	- 'species: dog, tagline: who let the dogs out?, noises: click here for more data, relationships: click here for more data' etc
- Adjust the previous loop so that it will loop through the noises array and print it out like this:
	- 'species: dog, tagline: who let the dogs out?, noises: woof bark slurp , relationships: click here for more data'
	
##### 1a: Animal Relationship Data
- Access the relationships object
- Log all the friends of the animal
- Now, log all the matches
- How would you delete a friend from your friendslist? Implement it!
	  
### Scenario 2: Browse Animals Page
In this scenario, we will show all the animals in our collection so that a user can browse through and see who is out there on our app. This page or the profile page might be the homepage of your application.

##### 2a: Log the Animals in a List
- Loop through the animals collection, console.log()'ing the species and tagline. Your result should be similar to this (without the bullet points)
	- 'Dog: Who Let the Dogs out?' 
	- 'Duck: Afflack!' 
	- 'Fish: Blub Blub Blub'
- Add a counter next to each animal, like an ordered list. It might look something like this: 
	- '1. Dog: Who Let the Dogs out? 2. Duck: Afflack! 3. Fish: Blub Blub Blub'
	
##### 2b: Filter Animals (extra credit)
- Choose your first animal (animals[0]) in your collection and pretend they are the signed-in user.
- Now filter the loop you created above to only show other animals that are not friends with the signed-in user. 

### Scenario 3: Search and Add Friends
All social networking sites have a search component so that you can find a particular user. You also need to be able to add friends and matches. Let's do these exercises and see what that might look like in code. 

- Write a loop that goes through the animals collection and selects a particular species and logs its information.
- How would you change this to select a different species this time?
- Add a new friend to this animal that you 'searched' for.
- Add a new match to the same animal.

### Scenario 4: Edit Animal Profile Page
What if you wanted to edit your profile page? Let's create the logic that goes into that!

- Choose one animal to be the 'logged-in user'
- Change their species to another species
- Change their noises to different noises that make sense for their new species.
- Add a new match to all of the animals in the animals array
	- It is ok if they are all the same one (maybe you are a dating site hacker trying to increase your chances for a date ;P ) 
- What else might you want to change? Implement it!

### Scenario 5: Edit Animal Collection Data
What if you wanted to change the data on the whole collection? For example, species doesn't really make sense since we are using it more like a name. This might be for the administrator of the website/database

- Change all the species properties be called name instead.
- What if we wanted to reset all the friendslists on all the animals? Implement it!
- What else might you want to change? Implement it!
