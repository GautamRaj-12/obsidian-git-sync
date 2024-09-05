# Charts in R
| Visualization | Description                                                   | Usage                                       | Example Use Cases                                 |
|---------------|---------------------------------------------------------------|---------------------------------------------|---------------------------------------------------|
| Bar Chart     | Displays categorical data with rectangular bars representing values | Comparing quantities across categories      | Sales data by region, survey results              |
| Box Plot      | Displays data distribution and identifies outliers            | Showing distribution, median, quartiles, and outliers | Exam scores, response times                        |
| Histogram     | Displays frequency distribution of numerical data             | Visualizing the distribution of a dataset   | Age distribution, income distribution             |
| Line Graph    | Displays data points connected by lines to show trends over time | Tracking changes over intervals or time    | Stock prices, temperature changes                 |
| Scatterplot   | Displays points representing two variables to show relationships | Identifying correlations or patterns between two variables | Height vs. weight, sales vs. advertising spend |

## Bar Chart
```
# Create the data for the chart
H <- c(7, 30, 12, 5, 40)
M <- c("Aug", "Sep", "Oct", "Nov", "Dec")

# Give the chart file a name
png(file = "barchart_months.png")

# Plot the bar chart
barplot(H, names.arg = M, xlab = "Month", ylab = "Sample", col = "yellow", 
        main = "Sample chart", border = "red")

# Save the file
dev.off()
```

## Box Plot
```
input <- mtcars[,c('mpg','cyl')]
print(head(input))

# Give the chart file a name.
png(file = "boxplot.png")

# Plot the chart.
boxplot(mpg ~ cyl, data = mtcars, xlab = "Number of Cylinders", ylab = "Miles Per Gallon", main = "Mileage Data")

# Save the file.
dev.off()
```

## Histograms
```
# Create data for the graph.
v <- c(9,12,20,10,35,25,12,40,30,35,19)

# Give the chart file a name.
png(file = "histogram.png")

# Create the histogram.
hist(v, xlab = "weight", col = "blue", border = "yellow")

# Save the file.
dev.off()
```

## Line Graphs
### Single Line
```
# Create the data for the chart.
v <- c(7, 30, 12, 5, 40)

# Give the chart file a name.
png(file = "line_chart.jpg")

# Plot the bar chart.
plot(v, type = "o")

# Save the file.
dev.off()
```

### Multiple Line
```
# Create the data for the chart.
v <- c(7, 30, 12, 5, 40)
t <- c(14, 7, 6, 19, 3)

# Give the chart file a name.
png(file = "line_chart_2_lines.jpg")

# Plot the bar chart.
plot(v, type = "o", col = "blue", xlab = "Month", ylab = "Sample", main = "Rain fall chart")

lines(t, type = "o", col = "red")

# Save the file.
dev.off()
```

## Scatter Plots
```
# Get the input values.
input <- mtcars[,c('wt','mpg')]

# Give the chart file a name.
png(file = "scatterplot.png")

# Plot the chart for cars with weight between 2.5 to 5 and mileage between 15 and 30.
plot(x = input$wt, y = input$mpg,
     xlab = "weight",
     ylab = "Milage",
     xlim = c(2.5, 5),
     ylim = c(15, 30),
     main = "weight vs Milage")

# Save the file.
dev.off()
```

## Scatter Plot Matrices
```
# Give the chart file a name.
png(file = "scatterplot_matrices.png")

# Plot the matrices between 4 variables giving 12 plots.

# One variable with 3 others and total 4 variables.

pairs(~wt+mpg+disp+cyl, data = mtcars,
      main = "Scatterplot Matrix")

# Save the file.
dev.off()
```