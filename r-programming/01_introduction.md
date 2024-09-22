# R progamming language

## Introduction
- R Programming language has been designed for ***statistical analysis*** of data.
- It also has a very good support for ***graphical representation of data***.

## Variables and Data Types
- Variables are reserved spaces in the computer memory for storing data.
- Every variable in R has an associated data type.

### Valid Variables
| Variable Name  | Validity | Reason                                                       |
|----------------|----------|--------------------------------------------------------------|
| var_name1.     | Valid    | Contains letters, number, dot, and underscore                |
| 1var_name      | Invalid  | Starts with a number                                         |
| Var_name@      | Invalid  | Contains a special character (@). Only dot and underscore are allowed |
| .var_name      | Valid    | Can start with a dot, which is followed by an alphabet       |
| var.name       | Valid    | Can start with a dot, which is followed by an alphabet       |
| _var_name      | Invalid  | Should not start with an underscore                          |
| .2var_name     | Invalid  | Dot is followed by a number and hence invalid                |


| Data Type | Allowable Values                         |
|-----------|------------------------------------------|
| Integer   | Values from the Set of Integers, Z       |
| Numeric   | Values from the Set of Real Numbers, R   |
| Complex   | Values from the Set of Complex numbers, C|
| Logical   | Only allowable values are True ; False   |
| Character | Possible values are - “x”, “@”, “1”, etc.|

### Numeric Datatype:
- Decimal values are default in R.
- Any number stored in R gets converted to a decimal type with at least 2 decimal points (double).
- Example: Entering 10 becomes 10.00.
- `is.integer()` returning `FALSE` confirms the variable is double.

### Integer Datatype:
- Create an integer by suffixing "L" (e.g., `10L`).
- Convert a value to an integer using `as.integer()`.

### Logical Datatype:
- Returns values as `TRUE` or `FALSE`.
- Used for comparing variables in conditions.

### Complex Datatype:
- Supports all complex numbers (e.g., `1+2i`).

### Character Datatype:
- Includes alphabets and special characters.
- Values must be inside single or double quotes.

## Variables Assignment:
Variables can be assigned in multiple ways:
- Assignment (`=`): `var1 = "Hello"`
- Left (`ß`): `var2 ß ","`
- Right (`à`): `"How are you" à var3`

## OPERATORS:

### Arithmetic Operators:
- **Addition (`+`)**: Adds values at corresponding positions in vectors.
- **Subtraction (`-`)**: Subtracts values at corresponding positions in vectors.
- **Multiplication (`*`)**: Multiplies values at corresponding positions in vectors.
- **Division (`/`)**: Divides values at corresponding positions in vectors.
- **Power (`^`)**: Raises the first vector to the exponent of the second vector.
- **Modulo (`%%`)**: Returns the remainder after dividing the two values.

### Logical Operators:
- **Element-wise Logical AND (`&`)**: Returns `TRUE` if both corresponding operands are true.
- **Element-wise Logical OR (`|`)**: Returns `TRUE` if either of the corresponding operands is true.
- **Not Operator (`!`)**: Negates the operand.
- **Logical AND (`&&`)**: Returns `TRUE` if the first element of both operands is true.
- **Logical OR (`||`)**: Returns `TRUE` if either of the first elements of the operands is true.

### Relational Operators:
Relational operators can take scalar or vector operands and compare them element by element.
- **Less than (`<`)**: Returns `TRUE` if an element of the first operand is less than the corresponding element of the second operand.
- **Less than or equal to (`<=`)**: Returns `TRUE` if every element in the first operand is less than or equal to the corresponding element of the second operand.
- **Greater than (`>`)**: Returns `TRUE` if every element in the first operand is greater than the corresponding element of the second operand.
- **Greater than or equal to (`>=`)**: Returns `TRUE` if every element in the first operand is greater than or equal to the corresponding element of the second operand.
- **Not equal to (`!=`)**: Returns `TRUE` if every element in the first operand is not equal to the corresponding element of the second operand.
- **Equal to (`==`)**: Returns `TRUE` if every element in the first operand is equal to the corresponding element of the second operand.

### Assignment Operators:
- **Left Assignment (`ß` or `<<-` or `=`)**: Used for assigning value to a vector.
- **Right Assignment (`->` or `->>`)**: Used for assigning value to a vector.

### Miscellaneous Operators:
- **%in% operator**: Determines whether a data element is contained in a list and returns `TRUE` if the element exists.
- **Colon (`:`) Operator**: Prints a list of elements from before the colon to after the colon.
- **%*% Operator**: Multiplies a matrix with its transpose.

## FACTORS:
Factors are data objects used for categorizing and storing data as levels. They store both strings and integer values and are useful in columns with a limited number of unique values (categorical variables). They are beneficial for data analysis and statistical modeling.
- Example: Employment types (Unemployed, Self-Employed, Salaried, Others) can be represented using factors.

## Data Structures in R

### Vectors
- A vector is a basic data structure that represents a one-dimensional array. 
- To create a array we use the “c” function which the most common method use in R Programming Language.
- The indexing of the vector will start from ‘1’ and not from ‘0’.

**Types of R vectors**
- **Numeric Vectors**: Numeric vectors are those which contain numeric values such as integer, float, etc. 
- **Character Vectors**: Character vectors in R contain alphanumeric values and special characters. 
- **Logical Vectors**:Logical vectors in R contain Boolean values such as TRUE, FALSE and NA for Null values. 

**Length of R vector**
- In R, the length of a vector is determined by the number of elements it contains. we can use the length() function to retrieve the length of a vector.

**Using seq() function to generate vectors**
- `seq(from, to, by, length.out)`
  - from: Starting element of the sequence
  - to: Ending element of the sequence
  - by: Difference between the elements
  - length.out: Maximum length of the vector
```
seq(1:10)
```
```
vec1 <- seq(1, 10, by = 2)
vec1
```
```
vec1 <- seq(from=22,to=44)
vec1
```
```
result_vector <- seq(from = 1, to = 10, length.out = 5)
print(result_vector)
```
  - The length.out argument is set to 5, meaning that R will create a sequence of length 5 starting from 1 to 10. The result will be a sequence evenly spaced between 1 and 10 with a length of 5.
### Strings and Vectors