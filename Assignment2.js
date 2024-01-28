// Function 1: Check if a string contains 'y'
function hasY(text) {
    return text.includes('y') ? "YES" : "NO";
}

// Example usage:
const userInput = 'Crazyy';
console.log(hasY(userInput));

// Function 2: Find factorial of a number
function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

// Example usage:
console.log(calculateFactorial(5));

// Function 3: Find student with highest average marks
function findStudentWithTopAverage(studentRecords) {
    if (studentRecords.length === 0) return "No students in the list";

    let highestAverage = 0;
    let topStudent = null;

    for (const record of studentRecords) {
        const averageMarks = record.marks.reduce((sum, mark) => sum + mark, 0) / record.marks.length;
        if (averageMarks > highestAverage) {
            highestAverage = averageMarks;
            topStudent = record;
        }
    }

    return topStudent ? `${topStudent.name} has the highest average marks: ${highestAverage}` : "No students in the list";
}

// Example usage:
const studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 50, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] },
];
console.log(findStudentWithTopAverage(studentList));

// Function 4: Find most frequent element in an array
function findMostRepeatedElement(dataArray) {
    const frequencyMap = {};
    let mostRepeatedElement = null;
    let maxFrequency = 0;

    for (const item of dataArray) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostRepeatedElement = item;
        }
    }

    return mostRepeatedElement;
}

// Example usage:
const numberArray = [20, 4, -10, 4, 11, 20, 4, 2];
console.log("The most frequent element is:", findMostRepeatedElement(numberArray));

// Function 5: Find unique element in an array
function findUnique(dataArray) {
    const frequencyMap = {};

    for (const item of dataArray) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    }

    for (const item of dataArray) {
        if (frequencyMap[item] === 1) {
            return item;
        }
    }

    return null;
}

// Example usage:
const numberArray2 = [20, 20, 11, 4, 11, 20, 2, 4];
console.log("The unique element is:", findUnique(numberArray2));

// Function 6: Filter palindromes from an array
function getPalindromes(stringArray) {
    return stringArray.filter(str => str === str.split('').reverse().join(''));
}

// Example usage:
const mixedStrings = ['abc', 'aba', 'ccc', 'dca', 'a'];
console.log(getPalindromes(mixedStrings));