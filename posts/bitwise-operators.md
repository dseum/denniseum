---
title: 'Bitwise Operators'
date: '2022-04-15'
archived: true
---

I hadn’t really used bitwise operators, but revisiting C piqued my curiosity about these operations.

Let there be an integer of decimal value 7. The associated binary value is 111.

The first is the AND bitwise operator. The comments show the binary values of each step. Each bit at the same location between the binary representations of the decimal values 7 and 3 are compared. 1 AND 1 = 1, but 1 AND 0 = 0, the same logic to evaluate booleans.

```c
int x = 7; // 111
x &= 3; // 011
printf("%i", x); // 011
```

The second is the OR bitwise operator. The same logic as the above applies, except it is now 1 OR 1 = 1 and 1 OR 0 = 1. Essentially, this operation results in every bit comparison resulting in 1 as long as one of the bits was 1.

```c
int x = 7; // 111
x |= 3; // 011
printf("%i", x); // 111
```

The third is the left shift bitwise operator. This is pretty cool because it shifts the current bits left the number of spaces the operation asked for. In the same example, the decimal value 56 is printed out.

```c
int x = 7; // 111
x <<= 3;
printf("%i", x); // 111000
```

The fourth is the right shift bitwise operator. It works the same as the left shift, except to the right. If there are no more bits to shift right, i.e. the value is 0, then the operation doesn’t do anything. No memory error from my experience. The decimal value 3 is printed out.

```c
int x = 7; // 111
x >>= 1;
printf("%i", x); // 11
```

Plans from now on are to better understand memory management in C, then head towards Rust!
