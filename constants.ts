
import { Problem, Difficulty, Badge, UserStats } from './types';

export const MOCK_USER_STATS: UserStats = {
  xp: 1250,
  streak: 12,
  problemsSolved: 45,
  rank: 'Algorithm Apprentice',
  recentActivity: [4, 2, 5, 8, 1, 0, 3], // Last 7 days
};

export const MOCK_BADGES: Badge[] = [
  { id: '1', name: 'First Blood', icon: '🩸', unlocked: true, description: 'Solved your first problem' },
  { id: '2', name: 'Streak Master', icon: '🔥', unlocked: true, description: 'Reached a 7-day streak' },
  { id: '3', name: 'Graph Guru', icon: '🕸️', unlocked: false, description: 'Solve 10 Graph problems' },
  { id: '4', name: 'Clean Coder', icon: '🧼', unlocked: false, description: 'Write code with no lint errors' },
];

export const MOCK_PROBLEMS: Problem[] = [
  // --- Basics ---
  {
    id: 1,
    title: "Find even or odd",
    slug: "even-or-odd",
    difficulty: Difficulty.Easy,
    category: "Basics",
    likes: 540,
    solved: true,
    description: "Given a number N, determine if it is even or odd.",
    starterCode: "function isEven(n) {\n  \n}",
    externalLink: "https://practice.geeksforgeeks.org/problems/odd-or-even3618/1"
  },
  {
    id: 2,
    title: "Find last digit in a number",
    slug: "last-digit",
    difficulty: Difficulty.Easy,
    category: "Basics",
    likes: 320,
    solved: false,
    description: "Given a base a and an exponent b, find the last digit of a^b.",
    starterCode: "function getLastDigit(a, b) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/find-last-digit-of-ab-for-large-numbers1936/1"
  },
  {
    id: 3,
    title: "Count digits in a number",
    slug: "count-digits",
    difficulty: Difficulty.Easy,
    category: "Basics",
    likes: 410,
    solved: false,
    description: "Given a number N, count the number of digits in it.",
    starterCode: "function countDigits(n) {\n  \n}",
    externalLink: "https://practice.geeksforgeeks.org/problems/count-digits5716/1"
  },
  // --- Arrays ---
  {
    id: 10,
    title: "Min and Max in Array",
    slug: "min-max-array",
    difficulty: Difficulty.Easy,
    category: "Arrays",
    likes: 890,
    solved: false,
    description: "Find the minimum and maximum element in an array.",
    starterCode: "function getMinMax(arr) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1"
  },
  {
    id: 11,
    title: "Sort an array of 0s, 1s and 2s",
    slug: "sort-0-1-2",
    difficulty: Difficulty.Medium,
    category: "Arrays",
    likes: 2300,
    solved: false,
    description: "Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.",
    starterCode: "function sort012(arr) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1"
  },
  {
    id: 12,
    title: "Rotate Array by 1",
    slug: "rotate-array-1",
    difficulty: Difficulty.Easy,
    category: "Arrays",
    likes: 670,
    solved: false,
    description: "Given an array, rotate the array by one position in clock-wise direction.",
    starterCode: "function rotate(arr) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1"
  },
  {
    id: 13,
    title: "Kadane's Algorithm",
    slug: "kadanes-algo",
    difficulty: Difficulty.Medium,
    category: "Arrays",
    likes: 5600,
    solved: false,
    description: "Find the contiguous sub-array with maximum sum.",
    starterCode: "function maxSubarraySum(arr) {\n  \n}",
    externalLink: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1"
  },
  {
    id: 14,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: Difficulty.Easy,
    category: "Arrays",
    likes: 1240,
    solved: true,
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    starterCode: `function twoSum(nums, target) {
  // Your code here
  
}`
  },
  // --- Matrix ---
  {
    id: 20,
    title: "Search in a 2D Matrix",
    slug: "search-2d-matrix",
    difficulty: Difficulty.Medium,
    category: "Matrix",
    likes: 1500,
    solved: false,
    description: "Write an efficient algorithm that searches for a value in an m x n matrix.",
    starterCode: "function searchMatrix(matrix, target) {\n  \n}",
    externalLink: "https://leetcode.com/problems/search-a-2d-matrix/"
  },
  {
    id: 21,
    title: "Rotate by 90 degree",
    slug: "rotate-90",
    difficulty: Difficulty.Medium,
    category: "Matrix",
    likes: 900,
    solved: false,
    description: "Given a square matrix, turn it by 90 degrees in anti-clockwise direction without using any extra space.",
    starterCode: "function rotateMatrix(matrix) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1"
  },
  // --- Recursion ---
  {
    id: 30,
    title: "Print 1 to N using recursion",
    slug: "print-1-n",
    difficulty: Difficulty.Easy,
    category: "Recursion",
    likes: 400,
    solved: false,
    description: "Print numbers from 1 to N without using loops.",
    starterCode: "function printNos(N) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1"
  },
  {
    id: 31,
    title: "N-Queen Problem",
    slug: "n-queen",
    difficulty: Difficulty.Hard,
    category: "Backtracking",
    likes: 2100,
    solved: false,
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
    starterCode: "function solveNQueens(n) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1"
  },
  // --- Binary Search ---
  {
    id: 40,
    title: "Binary Search",
    slug: "binary-search",
    difficulty: Difficulty.Easy,
    category: "Binary Search",
    likes: 1200,
    solved: false,
    description: "Given a sorted array of size N and an integer K, find the position at which K is present in the array using binary search.",
    starterCode: "function binarySearch(arr, k) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1"
  },
  {
    id: 41,
    title: "Square root of a number",
    slug: "sqrt",
    difficulty: Difficulty.Medium,
    category: "Binary Search",
    likes: 800,
    solved: false,
    description: "Given an integer x, find the square root of x. If x is not a perfect square, then return floor(√x).",
    starterCode: "function floorSqrt(x) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/square-root/1"
  },
  // --- Linked List ---
  {
    id: 50,
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: Difficulty.Easy,
    category: "Linked List",
    likes: 980,
    solved: false,
    description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function reverseList(head) {
  
}`
  },
  {
    id: 51,
    title: "Detect Loop in linked list",
    slug: "detect-loop",
    difficulty: Difficulty.Medium,
    category: "Linked List",
    likes: 1500,
    solved: false,
    description: "Given a linked list of N nodes. The task is to check if the linked list has a loop.",
    starterCode: "function detectLoop(head) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1"
  },
  // --- Stack ---
  {
    id: 60,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: Difficulty.Easy,
    category: "Stack",
    likes: 1500,
    solved: true,
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
    starterCode: `function isValid(s) {
  
}`
  },
  {
    id: 61,
    title: "Next Greater Element",
    slug: "next-greater-element",
    difficulty: Difficulty.Medium,
    category: "Stack",
    likes: 1100,
    solved: false,
    description: "Given an array, find the Next Greater Element (NGE) for every element.",
    starterCode: "function nextLargerElement(arr) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1"
  },
  // --- Trees ---
  {
    id: 70,
    title: "Height of Binary Tree",
    slug: "tree-height",
    difficulty: Difficulty.Easy,
    category: "Tree",
    likes: 750,
    solved: false,
    description: "Find the height of a binary tree.",
    starterCode: "function height(node) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1"
  },
  {
    id: 71,
    title: "Level Order Traversal",
    slug: "level-order",
    difficulty: Difficulty.Medium,
    category: "Tree",
    likes: 1300,
    solved: false,
    description: "Given a binary tree, find its level order traversal.",
    starterCode: "function levelOrder(node) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/level-order-traversal/1"
  },
  // --- Graphs ---
  {
    id: 80,
    title: "BFS of graph",
    slug: "bfs-graph",
    difficulty: Difficulty.Easy,
    category: "Graph",
    likes: 1400,
    solved: false,
    description: "Given a directed graph, perform Breadth First Traversal starting from 0.",
    starterCode: "function bfsOfGraph(V, adj) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
  },
  {
    id: 81,
    title: "DFS of graph",
    slug: "dfs-graph",
    difficulty: Difficulty.Easy,
    category: "Graph",
    likes: 1350,
    solved: false,
    description: "Given a connected undirected graph, perform Depth First Traversal.",
    starterCode: "function dfsOfGraph(V, adj) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1"
  },
  // --- Dynamic Programming ---
  {
    id: 90,
    title: "0 - 1 Knapsack Problem",
    slug: "knapsack",
    difficulty: Difficulty.Medium,
    category: "DP",
    likes: 2500,
    solved: false,
    description: "You are given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value.",
    starterCode: "function knapSack(W, wt, val, n) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1"
  },
  {
    id: 91,
    title: "Longest Common Subsequence",
    slug: "lcs",
    difficulty: Difficulty.Medium,
    category: "DP",
    likes: 3100,
    solved: false,
    description: "Given two sequences, find the length of longest subsequence present in both of them.",
    starterCode: "function lcs(x, y, s1, s2) {\n  \n}",
    externalLink: "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"
  }
];
