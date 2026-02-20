Given a string s that contains only the characters: ()[]{}.

You should return true if the string is valid, otherwise false.

A string is valid if:
- Each open parenthesis must be closed with the same type of parenthesis
- The brackets must be closed in the correct order
- An empty string is valid

Examples:
```
s = "()"
true

s = "()[]{}"
true

s = "(]"
false

s = "([)]"
false

s = "{[]}"
true
```