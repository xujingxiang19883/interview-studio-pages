'use strict';

(() => {
  const code = (body, language = 'text') => ['```' + language, body.trim(), '```'].join('\n');
  const sections = (...parts) => parts.join('\n\n');
  const source = 'Akuna Capital assessment transcription';
  const category = 'AKUNA CAPITAL';
  const entry = (row, title, prompt, solution, note = '') => ({
    id: 124000 + row,
    question: title,
    questionBody: prompt,
    solution,
    category,
    originalCategory: category,
    company: 'Akuna Capital',
    role: 'Python coding assessment',
    kind: 'Worked Python solution',
    note,
    privateInterview: true,
    references: [],
    sources: [{ sheet: source, row }],
  });

  window.AKUNA_DATA = [
    entry(1, 'Sort Items by Increasing Frequency', sections(
      'Given an array of item values, return all the items in increasing order of frequency. When two values have the same frequency, put the smaller value first. Keep every occurrence of each value.',
      '### Example',
      code('items = [4, 5, 6, 5, 4, 3]\nresult = [3, 6, 4, 4, 5, 5]'),
      'The values 3 and 6 occur once. The values 4 and 5 occur twice. Within each frequency group, the smaller value comes first.',
      '### Constraints and input',
      '- The number of items is between 1 and 200,000.\n- Each item is an integer between 1 and 1,000,000.\n- Custom input contains the number of items followed by one item per line.',
      code('def itemsSort(items):\n    # Return the sorted list.\n    pass', 'python')
    ), sections(
      '### Approach',
      'Count the occurrences of each value. Then sort the original items by the tuple `(frequency, value)`. Python compares the first component and uses the second only to break ties.',
      code(`
from collections import Counter

def itemsSort(items):
    frequency = Counter(items)
    return sorted(items, key=lambda value: (frequency[value], value))
`, 'python'),
      '### Walkthrough and correctness',
      'For the example, 3 and 6 have keys `(1, 3)` and `(1, 6)`. The two copies of 4 have key `(2, 4)`, and the two copies of 5 have key `(2, 5)`. Since the original list is sorted, every duplicate is preserved.',
      '### Complexity',
      'Counting takes linear time. Sorting takes O(n log n) time in the worst case, with O(n) space including the result.'
    )),

    entry(2, 'Delivery Order by Shortest Road Distance', sections(
      'Cities are numbered 1 through `city_nodes`. Each pair in `city_from` and `city_to` represents one bidirectional road. Starting at `company`, return every reachable city other than `company`, ordered by shortest road distance and then by city number. Each road counts as one unit of distance.',
      '### Examples',
      code('order(4, [1, 2, 2], [2, 3, 4], 1) -> [2, 3, 4]\norder(5, [1, 1, 2, 3, 1], [2, 3, 4, 5, 5], 1) -> [2, 3, 5, 4]'),
      'In the second example, cities 2, 3, and 5 are one road away, and city 4 is two roads away. Without the road between 2 and 4, the result is `[2, 3, 5]`.',
      '### Constraints and input',
      '- There are 2 to 100,000 cities and at most 100,000 roads. There is at least one road, and no road connects a city to itself.\n- Custom input starts with the city count and road count, followed by one pair per road and then the company city.',
      code('def order(city_nodes, city_from, city_to, company):\n    # Return reachable delivery cities in order.\n    pass', 'python')
    ), sections(
      '### Approach',
      'Build an adjacency list in both directions. Use breadth-first search (BFS) to give each reachable city its shortest distance. Sort the reachable IDs by `(distance, city ID)` and omit the starting city.',
      code(`
from collections import deque

def order(city_nodes, city_from, city_to, company):
    graph = [[] for _ in range(city_nodes + 1)]
    for start, end in zip(city_from, city_to):
        graph[start].append(end)
        graph[end].append(start)

    distance = {company: 0}
    queue = deque([company])
    while queue:
        city = queue.popleft()
        for neighbor in graph[city]:
            if neighbor not in distance:
                distance[neighbor] = distance[city] + 1
                queue.append(neighbor)

    reachable = (city for city in distance if city != company)
    return sorted(reachable, key=lambda city: (distance[city], city))
`, 'python'),
      '### Why BFS works',
      'The queue processes increasing distance levels because every road has unit length. Marking a city when it is enqueued gives it its shortest distance and avoids duplicate visits. Sorting after BFS enforces the city-ID tie-break across the entire level, even when cities at that level have different parents.',
      '### Complexity',
      'With V cities, E roads, and R reachable delivery cities, time is O(V + E + R log R), and space is O(V + E).'
    ), 'The source shows an upper bound of n (the road count) for city IDs. The opening description numbers cities through city_nodes, which is the convention used in the solution.'),

    entry(3, 'Maximize Drone Power Across a 4 × 4 Grid', sections(
      'A drone starts with 100 units of power and can start in any top-row cell of a 4 × 4 grid. From `(i, j)`, it moves one row down, to column `j - 1`, `j`, or `j + 1` within the grid. It pays the cost of every visited cell, including its start and end cells. Return the largest power remaining on arrival at the bottom row. The answer can be negative.',
      '### Examples',
      code('[ [10, 20, 30, 40],\n  [60, 50, 20, 80],\n  [10, 10, 10, 10],\n  [60, 50, 60, 50] ] -> 0\n\n[ [4, 6, 14, 21],\n  [17, 0, 5, 5],\n  [4, 41, 22, 3],\n  [2, 51, 6, 0] ] -> 90\n\n[ [41, 22, 56, 84],\n  [22, 51, 1, 20],\n  [5, 7, 18, 19],\n  [11, 22, 3, 15] ] -> 67'),
      '### Constraints and input',
      '- Every cell cost is an integer from 0 through 99.\n- Custom input contains the row count (4), the column count (4), and then four rows of costs.',
      code('def maxPower(city):\n    # Return the largest remaining power.\n    pass', 'python')
    ), sections(
      '### Approach and recurrence',
      'Keep the maximum remaining power for each column after processing a row. Initialize the top row to 100 minus its cell costs. At each later cell, take the maximum power among the valid predecessors in the previous row and subtract the new cell cost.',
      String.raw`\[ P_{0,j}=100-c_{0,j},\qquad P_{i,j}=\max_{\substack{|k-j|\le 1\\0\le k<C}}P_{i-1,k}-c_{i,j}. \]`,
      code(`
def maxPower(city):
    width = len(city[0])
    power = [100 - cost for cost in city[0]]

    for row in city[1:]:
        next_power = []
        for col, cost in enumerate(row):
            first = max(0, col - 1)
            last = min(width - 1, col + 1)
            next_power.append(max(power[first:last + 1]) - cost)
        power = next_power

    return max(power)
`, 'python'),
      '### Why it works',
      'Every path to a cell arrives from one of those predecessors. At a fixed cell the movement options and future costs are the same for all paths, so keeping its highest remaining power preserves the best possible continuation. In the sample that returns 90, path `(0, 0) → (1, 1) → (2, 0) → (3, 0)` pays `4 + 0 + 4 + 2 = 10`. If every cell costs 99, the answer is −296.',
      '### Complexity',
      'Time and space are constant for the fixed grid. For a general grid with R rows and C columns, the rolling-row version uses O(RC) time and O(C) extra space.'
    )),
  ];
})();
