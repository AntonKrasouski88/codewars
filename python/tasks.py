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
    str =''
    for i in range(1, n + 1):
        str += f'{i} sheep...'
    return str

print(count_sheep(3))
print(count_sheep(0))

#def count_sheep(n):
    #return ''.join(f"{i} sheep..." for i in range(1,n+1))



#Task: CSV representation of array
def to_csv_text(array):
    str = ''

    for arr in array:
        for i in range(0, len(arr)):
            if i == len(arr) - 1:
                str += f'{(arr[i])}'
                str += '\n'
            else:
                str += f'{(arr[i])},'

    return str[:-1]

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
    divisors = [i for i in range(2, int(n/2) + 1) if n%i == 0]
    
    if len(divisors) == 0:
        return f"{n} is prime"
    
    return divisors

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