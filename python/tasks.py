# Task: square avery digit
def square_digits(num):
    new_num = ''

    for c in str(num):
        print(c)
        new_num += f'{int(c) ** 2}'
    
    return new_num


print(square_digits(9119))
print(square_digits(0))


#Task: If you can't sleep, just count sheep!!
def count_sheep(n):
    string =''
    for i in range(1, n + 1):
        string += f'{i} sheep...'
    return string

print(count_sheep(3))
print(count_sheep(0))

#def count_sheep(n):
    #return ''.join(f"{i} sheep..." for i in range(1,n+1))



#Task: CSV representation of array
def to_csv_text(array):
    string = ''

    for arr in array:
        for i in range(0, len(arr)):
            if i == len(arr) - 1:
                string += f'{(arr[i])}'
                string += '\n'
            else:
                string += f'{(arr[i])},'

    return string[:-1]

#def to_csv_text(array):
#    return '\n'.join(','.join(map(str,line)) for line in array)


print(to_csv_text([
            [0, 1, 2, 3, 45],
            [10, 11, 12, 13, 14],
            [20, 21, 22, 23, 24],
            [30, 31, 32, 33, 34]
        ]))


#Task: Powers of 2
def powers_of_two(n):
# Это называется «сдвиг влево», это разновидность побитового оператора сдвига. 
# По сути, он смотрит на двоичное представление числа и перемещает («сдвигает») его на заданное количество мест.
# В этом примере двоичное представление сдвигается один раз влево, что удваивает число.
    return [1 << i for i in range (n + 1)] #

print(powers_of_two(0))
print(powers_of_two(1))
print(powers_of_two(4))


#Task: DNA to RNA Conversion
def dna_to_rna(dna):
    return dna.replace('T', 'U')


print(dna_to_rna("TTTT"))
print(dna_to_rna("GCAT"))
print(dna_to_rna("GACCGCCGCC"))


# Task: Vowel Count
def get_count(sentence):
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0

    for char in sentence:
        if char in vowels:
            count += 1

    return count
# return sum(c in 'aeiou' for c in s)

print(get_count("aeiou"))
print(get_count("bcdfghjklmnpqrstvwxz y"))


# Task: Disemvowel Trolls
def disemvowel(string_):
    
    for char in 'aeiouAEIOU':
        string_ = string_.replace(char, '')

    return string_

print(disemvowel("This website is for losers LOL!"))


# Task: Find the divisors! 
def divisors(n):
    divisor = [i for i in range(2, int(n/2) + 1) if n%i == 0]
    
    if len(divisor) == 0:
        return f"{n} is prime"
    
    return divisor

print(divisors(15))
print(divisors(253))
print(divisors(24))
print(divisors(3))
print(divisors(13))

# Task: Remove the minimum
def remove_smallest(numbers):
    new_numbers = numbers[:]
    
    if new_numbers:
        new_numbers.remove(min(numbers))
    
    return new_numbers

print(remove_smallest([1, 2, 3, 4, 5]))
print(remove_smallest([]))
print(remove_smallest([1, 2, 3, 1, 1]))


# Task: Find the stay number
#def stray(arr):
#    numbers = {}

#    for n in arr:
#        if str(n) in numbers:
#            numbers[f'{n}'] = numbers[f'{n}'] + 1
#        else:
#             numbers[f'{n}'] = 1

#    for key, value in numbers.items():
#        if value == 1:
#            return key 
def stray(arr):
    for n in arr:
        if arr.count(n) == 1:
            return n

print(stray([1, 1, 1, 1, 1, 2]))

# Task: Money, money, money
def calculate_years(principal, interest, tax, desired):
    year = 0

    while principal < desired:
        n = principal * interest
        principal += n - (n * tax)
        year += 1

    return year


print(calculate_years(1000, 0.05, 0.18, 1100))
print(calculate_years(1000,0.01625,0.18,1200))
print(calculate_years(1000,0.05,0.18,1000))


# Task: Unique in order
def unique_in_order(sequence):
    chars = []
    char = ''
    for i in range(len(sequence)):
        if char != sequence[i]:
            char = sequence[i]
            chars.append(char)    

    return chars

print(unique_in_order(''))


# Task: Count the digit
def nb_dig(n, d):
    numbers = [i**2 for i in range(n + 1)]
    count = 0
    
    for number in numbers:
        count += str(number).count(str(d))
    
    return count

print(nb_dig(10, 1))
print(nb_dig(5750, 0))


# Round up to the next multiple of 5
def round_to_next(n):
#    if n == 0:
#        return n    
#    for i in range(n, n + 6):
#        if i % 5 == 0:
#            return i
    return n + (5 - n) % 5 
        
print(round_to_next(0))
print(round_to_next(3))
print(round_to_next(5))
print(round_to_next(21))
print(round_to_next(-5))


# Task: Sum of sequence
def sequence_sum(begin_number, end_number, step):
    return sum([i for i in range(begin_number, end_number + 1, step)])

print(sequence_sum(1, 5, 1))
print(sequence_sum(2, 2, 2))
print(sequence_sum(16, 15, 3))


# Task: Find the middle element
def gimme(array):
    return array.index(sorted(array)[1])


print(gimme([2,3,1]))


# Task: Make a function that does arithmetic
def arithmetic(a, b, operator):
    if operator == 'add':
        return a + b
    elif operator == 'subtract':
        return a - b
    elif operator == 'multiply':
        return a * b
    elif operator == 'divide':
        return a / b
    

print(arithmetic(1, 2, "add"))


# Task: Sort numbers
def solution(nums):
    return sorted(nums) if nums else []


print(solution([1,2,3,10,5]))
print(solution(None))


# Task: Double Every Other
def double_every_other(lst):
    return [val * 2 if i % 2 else val for i, val in enumerate(lst)]


print(double_every_other([1,2,3,4,5]))


#Task: SimpleFun#176: Reverse Letter
def reverse_letter(st):
    reverse_letters = [char for char in st[::-1] if char.isalpha()]
    return ''.join(reverse_letters)

print(reverse_letter("krishan"))
print(reverse_letter("ultr53o?n"))
print(reverse_letter("ab23c"))
print(reverse_letter("krish21an"))


# Task: Hamming Distance
def hamming(a, b):
    count = 0

    for i in range(len(a)):
        if a[i] != b[i]:
            count += 1

    return count


print(hamming("hello world","hello tokyo"))
print(hamming("old father, old artificer","of my soul the uncreated "))

# Task: Weird String Case
def to_weird_case(words):
    text_correct = []
    words_list = words.split()

    for word in words_list:
        word_correct = ''

        for i in range(len(word)):
            if i % 2 == 0:
                word_correct += word[i].upper()
            else:
                word_correct += word[i].lower()

        text_correct.append(word_correct)

    return ' '.join(text_correct)


print(to_weird_case('This'))
print(to_weird_case('is'))
print(to_weird_case('Weird string case'))


#Task: Quadrants
def quadrants(x, y):
    return 1 + 2*(y<0) + (x*y<0)

print(quadrants(1,2))
print(quadrants(-10,100))
print(quadrants(-1,-9))
print(quadrants(19,-56))


#Task: Fix string case
def solve(s):
    lower = 0
    upper = 0
    for char in s:
        if char.islower():
            lower += 1
        else:
            upper += 1
    
    if lower >= upper:
        return s.lower()
    else:
        return s.upper()

print(solve("coDe"))
print(solve("CODe"))


#Task: Descending Order
def descending_order(num: int) ->int:
    #list_num = []
    #list_num.extend(str(num))
    #list_num.sort(reverse=True)
    #numbers = ''.join(list_num)
    #return int(numbers)
    return int(''.join(sorted(str(num), reverse=True)))
    
print(descending_order(51))


#Rock Paper Scissor
def rps(p1, p2):
    moves = ["rock", "scissors", "paper"]
    outcomes = ["Draw!", "Player 1 won!", "Player 2 won!"] 
    
    difference = moves.index(p2) - moves.index(p1)
    return outcomes[difference]


# Name on billboard
def billboard(name, price=30):
    return sum(price for _ in name)

print(billboard('Python', 20))


# Surface Area and Volume Box
def get_size(w,h,d):
    area = 2 * (w * h + w * d + h * d)
    volume = w * d * h
    return [area, volume]

print(get_size(4, 2, 6))


#Formatting decimal places
def two_decimal_places(n):
    return round(n, 2)

print(two_decimal_places(12.23423543543))


#Find count of Most Frequent Item in an Array
def most_frequent_item_current(collection):
    # count = 0
    #
    # for num in collection:
    #     n = collection.count(num)
    #     if n > count:
    #         count = n
    #
    # return count
    return max([collection.count(item) for item in collection])

print(most_frequent_item_current([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))


# Formatting decimal places#1
def two_decimal_places(number):
    return int(number * 100) / 100

print(two_decimal_places(10.1289767789))
print(two_decimal_places(-7488.83485834983))
print(two_decimal_places(4.653725356))

# Stringy Strings
def stringy(size):
    return ('10' * size)[:size]

print(stringy(6))