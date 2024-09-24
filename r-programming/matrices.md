## Matrices - Creation, Addition, Subtraction, Multiplication, Transpose, Inverse
```
# Create matrices
matrix_1 <- matrix(1:9, nrow = 3, ncol = 3)
matrix_2 <- matrix(9:1, nrow = 3, ncol = 3)

# Print original matrices
print("Matrix 1:")
print(matrix_1)

print("Matrix 2:")
print(matrix_2)

# Matrix addition
matrix_add <- matrix_1 + matrix_2
print("Matrix Addition:")
print(matrix_add)

# Matrix subtraction
matrix_sub <- matrix_1 - matrix_2
print("Matrix Subtraction:")
print(matrix_sub)

# Matrix multiplication
matrix_mul <- matrix_1 %*% matrix_2
print("Matrix Multiplication:")
print(matrix_mul)

# Matrix transpose
matrix_transpose <- t(matrix_1)
print("Matrix Transpose:")
print(matrix_transpose)


# Matrix inverse
non_singular_matrix <- matrix(c(4, 7, 2, 3, 6, 1, 2, 5, 3), nrow = 3, byrow = TRUE)
matrix_inverse <- solve(non_singular_matrix)
print("Matrix Inverse:")
print(matrix_inverse)
```