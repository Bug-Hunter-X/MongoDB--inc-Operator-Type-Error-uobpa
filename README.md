# MongoDB $inc Operator Type Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numeric field by a specified value.  However, providing a non-numeric value will result in a type error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator, using a string value instead of a number. This leads to a type error and prevents the update from being successful.  The provided `bug.js` file illustrates this issue.

## Solution
The solution involves using a numeric value (integer or floating-point number) with the `$inc` operator.  The correct usage is demonstrated in the `bugSolution.js` file.  Always double-check your data types when working with MongoDB operators.