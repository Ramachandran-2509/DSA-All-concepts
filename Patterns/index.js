// patterns are a way to visualize algorithms and data structures
// they help in understanding the flow and structure of the code
// patterns can be used in various contexts like loops, recursion, and data structures
// this file contains the main logic for displaying patterns

// task 1
// function to print a forest pattern with N rows
// This function prints a forest pattern with N rows
// function nForest(N) {
//     for (let i = 0; i <=N; i++) {
//         let pattern = '';
//         for (let j = 0; j <=N; j++) {
//             pattern += '* ';
//         }
//         console.log(pattern);
//     }
// }

// Example usage:
// const N = 4; 
// You can change N to any positive integer
// nForest(N);


//task2
// patterns can also be used to create a forest-like structure
// this function prints a forest pattern with N rows

// function printForest(N) {
//     for (let i = 0; i <= N; i++) {
//         let pattern = '';
//          for (let j = 0; j <= i; j++) {
//              pattern += '* ';
//         }
//          console.log(pattern);
//     }
//  }

// Example usage:
//  const N = 6; 
// You can change N to any positive integer
//  printForest(N);


//  task3
// function to print a forest pattern with numbers
// This function prints a forest pattern with numbers from 1 to N-1 in each row


// function printForest(N) {
//     for (let i = 1; i <=N; i++) {
//         let pattern = '';
//          for (let j = 1; j <=i; j++) {
//              pattern += j + ' ';
            
//         }
//          console.log(pattern);
//     }
//  }

 // Example usage:
//  const N = 5; 
// You can change N to any positive integer
//  printForest(N);

   


//  task4
// function to print a forest pattern with numbers
// This function prints a forest pattern with numbers from 1 to N-1 in each row

// function printForest(N) {
//     for (let i = 1; i <=N; i++) {
//         let pattern = '';
//          for (let j = 1; j <=i; j++) {
//              pattern += i + ' ';
            
//         }
//          console.log(pattern);
//     }
//  }

 // Example usage:
//  const N = 5; 
// You can change N to any positive integer
//  printForest(N);



// task 5

// function printForest(N) {
//     for (let i = 0; i <= N; i++) {
//         let pattern = '';
//          for (let j = 0; j <= N-i+1; j++) {
//              pattern += '* ';
//         }
//          console.log(pattern);
//     }
//  }
//  Example usage:
//  const N = 4; 
// You can change N to any positive integer
//  printForest(N);


// task 6
// function to print a forest pattern with numbers in reverse order
// This function prints a forest pattern with numbers from N to 1 in each row
// function printForest(N) {
//     for (let i = 1; i <=N; i++) {
//         let pattern = '';
//          for (let j = 1; j <=N-i+1; j++) {
//              pattern += j + ' ';
            
//         }
//          console.log(pattern);
//     }
//  }
//  Example usage:
//  const N = 5;
// You can change N to any positive integer
//  printForest(N);


// task 6

// function to print a forest pattern with stars in a pyramid shape
// This function prints a forest pattern with stars in a pyramid shape
// function printForest(N) {
//     for (let i = 0; i <= N; i++) {
//         let pattern = '';
//         // space
//         for (let j = 0; j <N-i-1; j++) {
//             pattern +=" ";
//         }   
//         // star
//         for (let j = 0; j < 2 * i+1; j++) {
//             pattern +=  "*";
//         }
//         // space
//         for (let j = 0; j < N-i-1; j++) {
//             pattern +=" ";
//         }   
//         console.log(pattern);
//     }
// }
// Example usage:
// const n = 5; // You can change n to any positive integer
// nTriangle(n);


// task 8
// function to print a forest pattern with stars in an inverted pyramid shape

function printForest(N) {
    for (let i = 0; i <N; i++) {
        let pattern = '';
        for (let j = 0; j <i; j++) {
            pattern +=" ";
        }       
        for (let j = 0; j < 2 * N - (2 * i + 1); j++) {
            pattern +=  "*";
        }
        for (let j = 0; j <i; j++) {
            pattern +=" ";
        }   
        console.log(pattern);
    }
}
// const N=5
// printForest(N)