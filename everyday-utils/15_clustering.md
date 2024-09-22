# Clustering in Machine Learning

Clustering, or cluster analysis, is a method for dividing a group of data objects into subgroups based on similarity. Objects in each cluster share common characteristics and are distinct from those in other clusters. This method is a form of unsupervised learning, where the machine groups data based on observation without predefined class labels.

## Key Concepts

### Definition
- **Clustering**: The process of dividing a dataset into groups (clusters) based on similarities in the data.
- **Unsupervised Learning**: Learning by observation without predefined labels.

### Clustering vs. Classification
- **Classification**: Separation of data based on predefined class labels.
- **Clustering**: Partitioning of data into groups based on similarity without predefined labels.

### Real-World Example
- **Rental Store**: Grouping customers into clusters based on purchasing habits to devise business strategies for each group.

## Importance and Applications

### Data Analysis
- Applied in various research areas including data mining, statistics, and machine learning.

### Industries
- **Financial Services**: Detecting credit card fraud and monitoring criminal activities.
- **Health Information Systems**: Analyzing patient data.
- **Web Mining**: Organizing search results into clusters.

### Practical Uses
- **Customer Segmentation**: Grouping customers in banking, telecom, e-commerce, sports, advertising, and sales.
- **Document Clustering**: Grouping similar documents together.
- **Image Segmentation**: Clustering similar pixels in images.

## Types of Clustering

### Algorithms
- **Similarity-Based Algorithms**: Define a function to compute document similarity and use it to assign documents to clusters.
- **Agglomerative vs. Partition**: Based on the methodology of forming clusters.
- **Flat vs. Hierarchical**: Based on the structure of the final solution.
- **Density-Based**: Forming clusters

# K-Means Clustering

K-Means Clustering is a popular and simple unsupervised learning algorithm used for partitioning a dataset into K distinct, non-overlapping subsets (clusters). The algorithm iteratively assigns data points to clusters and updates the cluster centroids to minimize the variance within each cluster.

## Key Concepts

- **Centroid**: The center of a cluster.
- **Cluster Assignment**: Assigning each data point to the nearest centroid.
- **Update Centroids**: Recalculating the centroids as the mean of all points assigned to the cluster.

## Example

### Steps in K-Means Clustering

1. **Initialization**: Select K initial centroids randomly from the dataset.
2. **Assignment**: Assign each data point to the nearest centroid, forming K clusters.
3. **Update**: Calculate the new centroids as the mean of the data points in each cluster.
4. **Repeat**: Repeat the assignment and update steps until the centroids no longer change significantly.

### Example Data Points

Consider the following data points representing customers' annual income and spending scores:
