# Association Rules in Machine Learning

Association rules are crucial in market basket analysis and similar problems. They help in identifying relationships among items that are frequently bought together by customers. This information can be used by retailers to make strategic decisions such as product placement, promotions, and discounts.

## Concept Overview

### Market Basket Analysis Example
- **Supermarket Layout**: Related items like groceries, dairy products, cosmetics, and stationery are placed in the same aisle.
  - **Customer Convenience**: Easier for customers to find items.
  - **Reminder Effect**: Customers may remember or be tempted to buy additional items.
- **Retail Strategy**:
  - Offering discounts on combinations (e.g., baby lotion + baby shampoo).
  - Placing related products at opposite ends to encourage scanning the entire shelf.

### Key Points
- **Objective**: Find correlations among various products.
- **Outcome**: Helps in identifying frequent associations between items.
- **Nature**: Does not extract customer preferences but finds relations among frequently bought items.
- **Structure**: Rules work with an antecedent (if) and a consequent (then).
  - **Example**: If a person buys pizza (antecedent), they may buy a cold drink too (consequent).

## Apriori Algorithm

### Description
- The Apriori algorithm is a classic method used in data mining to discover frequent itemsets within a dataset. An itemset is simply a collection of items, and a frequent itemset is one that appears sufficiently often in the dataset. This algorithm is particularly useful for tasks like market basket analysis, where you want to find items that are frequently purchased together.

### Key Points:

- **Frequent Itemset**: A set of items that occurs frequently in a dataset.
- **Support**: The proportion of transactions that contain a particular itemset.
- **Confidence**: The conditional probability of buying an item B, given that item A was bought.
- **Lift**: Measures the increase in the probability of buying item B when item A is also bought, compared to when A is not bought.

| Transaction ID | Items Bought |
|---|---|
| 1 | Bread, Milk |
| 2 | Bread, Diaper, Beer, Egg |
| 3 | Milk, Diaper, Beer, Coke |
| 4 | Bread, Milk, Diaper, Beer |
| 5 | Bread, Milk, Coke |

### Task: Find frequent itemsets with a minimum support of 60% (3 out of 5 transactions).

**Steps:**

1. **Generate Candidate 1-Itemsets**:
   - {Bread}, {Milk}, {Diaper}, {Beer}, {Coke}, {Egg}
 
2.  **Scan Database to Find Frequent 1-Itemsets**:
    - {Bread}, {Milk}, {Diaper}, {Beer} (each occurs in 4 out of 5 transactions)
    - 
3. **Generate Candidate 2-Itemsets**:

   - {Bread, Milk}, {Bread, Diaper}, {Bread, Beer}, {Milk, Diaper}, {Milk, Beer}, {Diaper, Beer}
  
4. **Scan Database to Find Frequent 2-Itemsets**:

{Bread, Milk}, {Diaper, Beer} (each occurs in 3 out of 5 transactions)

5. **Generate Candidate 3-Itemsets**:

{Bread, Milk, Diaper}, {Bread, Milk, Beer}, {Bread, Diaper, Beer}, {Milk, Diaper, Beer}

6. **Scan Database to Find Frequent 3-Itemsets**:

No frequent 3-itemsets found.

### Python code

```
from apyori import apriori

# Sample data: List of transactions (each transaction is a list of items)
transactions = [
    ['milk', 'bread', 'butter'],
    ['bread', 'butter'],
    ['milk', 'bread'],
    ['milk', 'bread', 'butter', 'eggs'],
    ['bread', 'butter', 'eggs'],
    ['milk', 'eggs'],
]

# Applying Apriori
rules = apriori(transactions, min_support=0.5, min_confidence=0.7, min_lift=1.2, min_length=2)

# Converting rules to a list and printing them
results = list(rules)

for item in results:
    pair = item[0]
    items = [x for x in pair]
    print("Rule: " + str(items))
    print("Support: " + str(item[1]))
    print("Confidence: " + str(item[2][0][2]))
    print("Lift: " + str(item[2][0][3]))
    print("=====================================")

```

## FP Tree Growth Algorithm

### Description
- The FP-growth algorithm is an efficient approach to mining frequent itemsets from transactional datasets. Unlike Apriori, it avoids generating candidate itemsets, which can be computationally expensive. Instead, it constructs a compressed data structure called an FP-tree.

### Key Points:

- **FP-tree**: A tree-based data structure that efficiently stores frequent items and their support counts.

- **Header Table**: A table that maps items to their corresponding node in the FP-tree.

- **Conditional Pattern Base**: A set of patterns that share a common suffix.

| Transaction ID | Items Bought                       |
|----------------|------------------------------------|
| 1              | Bread, Milk, Diaper, Beer, Egg     |
| 2              | Bread, Diaper, Beer, Coke          |
| 3              | Milk, Diaper, Beer, Coke           |
| 4              | Bread, Milk, Diaper, Beer          |
| 5              | Bread, Milk, Coke                  |


### Task: Find frequent itemsets with a minimum support of 60% (3 out of 5 transactions).

**Steps**:

- **Create a Frequency Table**: Count the occurrences of each item to identify frequent items.
- **Sort Transactions**: Sort transactions based on item frequency in descending order.
- **Create FP-tree**: Construct the FP-tree by inserting transactions, linking nodes with the same item, and updating header table.
- **Pattern Growth**: Recursively generate frequent itemsets by mining conditional FP-trees.

### Python Code
```
import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
dataset = [['Milk', 'Onion', 'Nutmeg', 'Kidney Beans', 'Eggs', 'Yogurt'],
           ['Dill', 'Onion', 'Nutmeg', 'Kidney Beans', 'Eggs', 'Yogurt'],
           ['Milk', 'Apple', 'Kidney Beans', 'Eggs'],
           ['Milk', 'Unicorn', 'Corn', 'Kidney Beans', 'Yogurt'],
           ['Corn', 'Onion', 'Onion', 'Kidney Beans', 'Ice cream', 'Eggs']]
te = TransactionEncoder()
te_ary = te.fit(dataset).transform(dataset)
df = pd.DataFrame(te_ary, columns=te.columns_)
df
from mlxtend.frequent_patterns import fpgrowth

fpgrowth(df, min_support=0.6)
fpgrowth(df, min_support=0.6, use_colnames=True)

```