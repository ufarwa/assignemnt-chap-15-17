// // Assignment chpter 13 to 15
// // Q1)Declare an empty array using JS literal notation to store
// //student names in future.
// let NamesOfStdents =[];

// //Q2)Declare an empty array using JS object notation to store
// student names in future.
// let NamesOfStdents ={names:[]};

// //Q3)Declare and initialize a strings array.
// let stringArr = ["ume","farwa","latif"]

// //Q4)Declare and initialize a numbers array.
// let numberArr = [2,5,8]

// //Q5)Declare and initialize a boolean array.
// let booleanArr = [true,false]

// //Q6)Declare and initialize a mixed array.
// let mixedArr = ["ume",2,"farwa",true,"latif",5,false,7,null,undefined]


// // Q7)Declare and Initialize an array and store available
//  education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//  BS, BCOM, MS, M. Phil., PhD). Show the listed
//  qualifications in your browser like:Declare and Initialize an array and store available
//  education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//  BS, BCOM, MS, M. Phil., PhD). Show the listed
//  qualifications in your browser like:
//  let qualificationsOfPakistan = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
//  document.write("<h2>Qualifications:</h2>");
// document.write("<ol>");

// for (let i = 0; i < qualificationsOfPakistan.length; i++) {
//   document.write("<li>" + qualificationsOfPakistan[i] + "</li>");
// }

// document.write("</ol>");

// //Q8)Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like: 
// let studentNames = ["Sana","Sarah","Fatima"]
// let Score = [450,400,389]
// let percent1 = (Score[0]/500)*100
// let percent2 = (Score[1]/500)*100
// let percent3 = (Score[2]/500)*100

// document.write("the Score of "+ studentNames[0] + " is " + Score[0] + ". Percenatge is " + percent1 + "<br>")
// document.write("the Score of "+ studentNames[1] + " is " + Score[1] + ". Percenatge is " + percent2 + "<br>")
// document.write("the Score of "+ studentNames[2] + " is " + Score[2] + ". Percenatge is " + percent3)

// //Q9)Initialize an array with color names. Display the array
// elements in your browser.

// let ColorsName = ["pink","purple","yellow"]

//part a Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

// let colorAdd = prompt("write color name which you want to add in the begining");
// let newColorsName = ColorsName.unshift(colorAdd);
// document.write(ColorsName)
//  part b Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the

// let againColorAdd = prompt("write color name which you want to add in the end");
// let againNewColorsName = ColorsName.push(againColorAdd);
// document.write(ColorsName)

//part c Add two more color to the beginning of the array.
// Display the updated array in your browser.

// let twoColorsAddedInTheBegening= ColorsName.splice(0,0,"indigo","green")
// document.write(ColorsName)

//part d Delete the first color in the array. Display the updated
// array in your browser
// let firstColorDeleted = ColorsName.shift()
// document.write(ColorsName)

//part e  Delete the last color in the array. Display the updated
// array in your browser.
// let lastColorDeleted = ColorsName.pop()
// document.write(ColorsName)

//part f Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// let indexWhichYouToAddColor = +prompt("enter the index number on which you want to add a color");
// let color = prompt("write color")
//  ColorsName.splice(indexWhichYouToAddColor,0,color)
// document.write(ColorsName)

//part g Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined
// let indexWhichYouToDeletColor = +prompt("enter the index number on which you want to delet a color");
// let numberOfColorsDeleted = +prompt("enter how many colore you want to delet");
//  ColorsName.splice(indexWhichYouToDeletColor,numberOfColorsDeleted)
// document.write(ColorsName)

// //Q10)Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// let score = [400,350,500,490,380]
// document.write("Score of students " + score)
// score.sort()
// document.write("<br>Sorted score of students " + score)

// //Q11)Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// let cityNames = ["Karachi","islamabad","Peshawar","KPK","Hyderabad"]
// document.write("Cities list: <br>" + cityNames +"<br>")
// NewcityList=cityNames.slice(0,3)
// document.write("Selected cities list: <br>" + NewcityList)

// //Q12)Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// let fruits = ["This" ,  "is",  "my" , "cat"];
// let combine = fruits.join(" ")
// document.write( "Array <br>"+fruits + "<br><br>")
// document.write("String <br>"+ combine)

// //Q13)Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// let array=[]
// array.push("a","b","c")
// document.write(array +"<br> OUTPUT <br>")
// document.write(array.shift()+"<br>");
// document.write(array.shift()+"<br>");
// document.write(array.shift()+"<br>");

// //Q14)Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// let array=[]
// array.push("a","b","c")
// document.write(array +"<br> OUTPUT <br>")
// document.write(array.pop()+"<br>");
// document.write(array.pop()+"<br>");
// document.write(array.pop()+"<br>");

// // Q15)Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var dropDown = '<select>';
// for (var i = 0; i < arr.length; i++) {
//   dropDown += '<option value="">' + arr[i] + '</option>';
// }
// dropDown += '</select>';
// document.write(dropDown);