## Value
Values are type 0. While often integers, they are also used for flags and splits (half is one value, the other half is another one).

## Scalar
Scalars are type 1. They are basically floats multiplied by 60,000 to get a real number; for example a value of 84000 is a scalar of 1.4. Scalars are frequently used for frame counters, hitbox sizes and positions, and other such values.

## Pointer
Pointers are type 2. They point to elsewhere in the file. This is not an absolute offset; one has to add a certain amount to it in order to get to the right place in an absolute context.

## Boolean
Booleans are type 3. Booleans are FALSE if they are 00000000 and TRUE otherwise.

## File
Files are type 4.

## Variable
Variables are type 5. They are encoded as 1-1-6 splits: the first digit is the type of variable (0=IC, 1=LA, 2=RA), the second digit is the data type (0=Basic, 1=Float, 2=Bit), and the rest is the variable's identity.

## Requirement
[Requirements](/Brawl/Requirements) are type 6. If the first bit is set (first digit appears to be 8), the requirement is inverted.