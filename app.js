//day02
//exercise-Level 01
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challange='30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challange);
// Print the length of the string on the browser console using console.log()
console.log(challange.length);
// Change all the string characters to capital letters using toUpperCase() method
console.log(challange.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challange.toLowerCase());
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challange.substring(0,2));
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challange.slice(3));
// Check if the string contains a word Script using includes() method
console.log(challange.includes('Script'));
// Split the string into an array using split() method
console.log(challange.split());
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challange.split(' '));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challange.replace('JavaScript','Python'))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challange.charAt(15));
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challange.charCodeAt(15));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challange.indexOf('a'));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challange.lastIndexOf('a'));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const text='You cannot end a sentence with because because because is a conjunction';
console.log(text.indexOf('because'));
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(text.lastIndexOf('because'));
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(text.search(/\bbecause\b/));
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challange.trim());
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.startsWith('30'));
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.endsWith('JavaScript'));
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challange.match(/a/g));
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const str1 = '30 Days of';
const str2 = ' JavaScript';
const mergedStr = str1.concat(str2);
console.log(mergedStr);
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challange.repeat(2));


//level 02
const text2='There is no exercise better for the heart than reaching down and lifting people up.';
console.log(text2);
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const numString='10';
console.log(parseInt(numString)==10);
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Check if 'on' is found in both python and jargon
const a='python';
const b='jargon';
if(a.includes('on')&& b.includes('on')){
    console.log('yes they both contains')
}else{
    console.log('they dont ');
}
// I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence = "I hope this course is not full of jargon";
const containsJargon = sentence.includes("jargon");

// Generate a random number between 0 and 100 inclusively.
const numb=Math.floor(Math.random()*101);
console.log(numb);
console.log(Math.floor(9.9));//9
// Generate a random number between 50 and 100 inclusively.
const numb2=Math.floor(Math.random()*51)+50;
console.log(numb2);
// Generate a random number between 0 and 255 inclusively.
const numm=Math.floor(Math.random()*256);
// Access the 'JavaScript' string characters using a random number.
const text03='JavaScript';
const lenghtOfCharacter=text03.length;
console.log(lenghtOfCharacter);
const numOfCRandomly=Math.floor(Math.random()*lenghtOfCharacter);
console.log(numOfCRandomly);
console.log(text03.charAt(numOfCRandomly));
// Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
const rows=5;
for(let i=1;i<=rows;i++){
    let row ='';
    row+=i+' ';
    for(let j=0;j<rows-1;j++){
        
            row +=Math.pow(i,j)+' ';
        }
    
console.log(row);
}
console.log(22222222);

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence1 = 'You cannot end a sentence with because because i love it because is a conjunction';

/// Find the index of the first occurrence of 'because'
const startIndex = sentence1.indexOf('because');

/// Slice out the phrase 'because because because' using substr
const slicedPhrase = sentence1.substr(startIndex, 'because because i love it  because'.length);

console.log(slicedPhrase); // Output: because because i love it because

//lever 03
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const txtOfLove='Love iS tHe loVe best thing in this world. Some found their love and some are still looking for their love.';
const textOfLoveLowerCase=txtOfLove.toLowerCase();
let count=0;
const txtOfLoveArr=textOfLoveLowerCase.split(' ');
console.log(txtOfLoveArr);
for(let i=0;i<txtOfLoveArr.length;i++){
    if(txtOfLoveArr[i]==='love'){
count++;
    }
}
console.log(count);

//CHATGBT DOESIT IN THIS WAY
const txtOfLove2='Love iS tHe loVe best love thing in this world. Some found their love and some are still looking for their love.';
// Define a regular expression pattern to match the word "love" exactly, case-insensitive
const pattern = /\blove\b/gi;

// Use match() method to find all occurrences of the word "love" and count them
const loveCount = (txtOfLove2.match(pattern)).length;

console.log(loveCount); // Output: 5

//ex03
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence03 = '%I $am@% a  %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// Step 1: Remove special characters and punctuation
const cleanedSentence = sentence03.replace(/[^\w\s]/g, '');
console.log(cleanedSentence);
// Step 2: Split the text into individual words
const words = cleanedSentence.split(/\s+/);
console.log(words);
// Step 3: Count the frequency of each word
const wordFrequency = {};
words.forEach(word => {
    word = word.toLowerCase(); // Convert the word to lowercase for case-insensitive comparison
    wordFrequency[word] = (wordFrequency[word] || 0) + 1; // Increment the word frequency count
});
console.log(typeof wordFrequency);//  wordFrequency is intended to store words as keys and their corresponding frequencies as values.
console.log(wordFrequency)
// Step 4: Find the word with the highest frequency
let mostFrequentWord = '';
let maxFrequency = 0;
for (const word in wordFrequency) {   // for ... in loop 
    if (word > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}

console.log('Most frequent word:', mostFrequentWord, 'Frequency:', maxFrequency);

//ex04
//calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month,
// 10000 euro annual bonus, 15000 euro online courses per month.'
const textOfIncome='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const textIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Regular expression to match numbers
const regex = /\d+/g;// return numbers in a string 

// Extract numbers from the text
const numbers = textIncome.match(regex); //is an array with 3 elements[5000,10000,15000]
console.log(numbers);

// Convert numbers from strings to integers and sum them up
const totalIncome = numbers.reduce((acc, num) => acc + parseInt(num), 0);

console.log('Total annual income:', totalIncome, 'euro');
