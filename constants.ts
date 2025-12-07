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
  {
    id: 1,
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
  {
    id: 2,
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
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring",
    difficulty: Difficulty.Medium,
    category: "Strings",
    likes: 2100,
    solved: false,
    description: `Given a string s, find the length of the longest substring without repeating characters.`,
    starterCode: `function lengthOfLongestSubstring(s) {
  
}`
  },
  {
    id: 4,
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
    id: 5,
    title: "Merge k Sorted Lists",
    slug: "merge-k-lists",
    difficulty: Difficulty.Hard,
    category: "Heap",
    likes: 850,
    solved: false,
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.`,
    starterCode: `function mergeKLists(lists) {
  
}`
  }
];