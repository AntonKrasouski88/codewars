# Task: square avery digit

import math
from collections import Counter


def square_digits(num):
    new_num = ''

    for c in str(num):
        print(c)
        new_num += f'{int(c) ** 2}'

    return new_num


print(square_digits(9119))
print(square_digits(0))


# Task: If you can't sleep, just count sheep!!
def count_sheep(n):
    string = ''
    for i in range(1, n + 1):
        string += f'{i} sheep...'
    return string


print(count_sheep(3))
print(count_sheep(0))

# def count_sheep(n):
# return ''.join(f"{i} sheep..." for i in range(1,n+1))


# Task: CSV representation of array
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

# def to_csv_text(array):
#    return '\n'.join(','.join(map(str,line)) for line in array)


print(to_csv_text([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]))


# Task: Powers of 2
def powers_of_two(n):
    # Это называется «сдвиг влево», это разновидность побитового оператора сдвига.
    # По сути, он смотрит на двоичное представление числа и перемещает («сдвигает») его на заданное количество мест.
    # В этом примере двоичное представление сдвигается один раз влево, что удваивает число.
    return [1 << i for i in range(n + 1)]


print(powers_of_two(0))
print(powers_of_two(1))
print(powers_of_two(4))


# Task: DNA to RNA Conversion
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
    divisor = [i for i in range(2, int(n/2) + 1) if n % i == 0]

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
# def stray(arr):
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
print(calculate_years(1000, 0.01625, 0.18, 1200))
print(calculate_years(1000, 0.05, 0.18, 1000))


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


print(gimme([2, 3, 1]))


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
def solution_sorted(nums):
    return sorted(nums) if nums else []


print(solution_sorted([1, 2, 3, 10, 5]))
print(solution_sorted(None))


# Task: Double Every Other
def double_every_other(lst):
    return [val * 2 if i % 2 else val for i, val in enumerate(lst)]


print(double_every_other([1, 2, 3, 4, 5]))


# Task: SimpleFun#176: Reverse Letter
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


print(hamming("hello world", "hello tokyo"))
print(hamming("old father, old artificer", "of my soul the uncreated "))

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


# Task: Quadrants
def quadrants(x, y):
    return 1 + 2*(y < 0) + (x*y < 0)


print(quadrants(1, 2))
print(quadrants(-10, 100))
print(quadrants(-1, -9))
print(quadrants(19, -56))


# Task: Fix string case
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


# Task: Descending Order
def descending_order(num: int) -> int:
    # list_num = []
    # list_num.extend(str(num))
    # list_num.sort(reverse=True)
    # numbers = ''.join(list_num)
    # return int(numbers)
    return int(''.join(sorted(str(num), reverse=True)))


print(descending_order(51))


# Rock Paper Scissor
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
def get_size(w, h, d):
    area = 2 * (w * h + w * d + h * d)
    volume = w * d * h
    return [area, volume]


print(get_size(4, 2, 6))


# Formatting decimal places
def two_decimal_places_2(n):
    return round(n, 2)


print(two_decimal_places_2(12.23423543543))


# Find count of Most Frequent Item in an Array
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


# Grasshopper - Combine strings
def combine_names(first_name, last_name):
    return f"{first_name} {last_name}"


# Comfortable words
def comfortable_word(word):
    left_keys = ['q', 'w', 'e', 'r', 't', 'a', 's',
                 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
    right_keys = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']
    l = True if word[0] in left_keys else False

    for char in word[1:]:
        if char in left_keys and l:
            return False
        if char in right_keys and not l:
            return False
        l = not l

    return True


print(comfortable_word('yams'))
print(comfortable_word('test'))


# Find the unique number
def find_uniq(arr):
    numbers = {}
    for el in arr:
        if el in numbers:
            numbers[el] += 1
        else:
            numbers[el] = 1

    for key, value in numbers.items():
        if value == 1:
            return key


print(find_uniq([1, 1, 1, 2, 1, 1]))


# Highest Scoring Word
def high(x):
    # letters = 'abcdefghijklmnopqrstuvwxyz'
    # words = x.split()
    # counter = {}
    # max_word = ['', 0]
    #
    # for word in words:
    #     counter[word] = 0
    #     for char in word:
    #         counter[word] += letters.find(char) + 1
    #     if max_word[1] < counter[word]:
    #         max_word[0] = word
    #         max_word[1] = counter[word]
    #
    # return max_word[0]
    words = x.split(' ')
    lists = []
    for i in words:
        scores = [sum([ord(char) - 96 for char in i])]
        lists.append(scores)
    return words[lists.index(max(lists))]


print(high('man i need a taxi up to ubud'))


# Build Tower
def tower_builder(n_floors):
    tower = []
    star = '*'

    for i in range(n_floors, 0, -1):
        if n_floors == i:
            tower.append(star * (2 * i - 1))
        else:
            space = ' ' * (n_floors - i)
            st = star * (2 * i - 1)
            tower.append(f"{space}{st}{space}")

    tower.reverse()
    return tower


print(tower_builder(6))
print(tower_builder(1))


# ASCII Total
def uni_total(s):
    return sum([ord(char) for char in s])


print(uni_total('aaa'))


# Break camelCase
def solutions(s):
    correct_string = ''

    for char in s:
        if char.isupper():
            correct_string += ' ' + char
        else:
            correct_string += char

    return correct_string


print(solutions("helloWorld"))
print(solutions("camelCase"))
print(solutions("breakCamelCase"))


# Sort the odd
def sort_array(source_array):
    arr = []
    index = []
    for i in range(len(source_array)):
        if source_array[i] % 2 == 1:
            arr.append(source_array[i])
            index.append(i)
    arr.sort()

    for i in range(len(index)):
        source_array[index[i]] = arr[i]

    return source_array


print(sort_array([5, 3, 2, 8, 1, 4]))


# Find the missing letter
def find_missing_letter(chars):
    # chars_string = ''.join(chars).lower()
    # alphabet = 'abcdefghijklmnopqrstuvwxyz'
    # start_index = alphabet.find(chars_string[0])
    # end_index = alphabet.find(chars_string[len(chars_string) - 1])
    # string = alphabet[start_index:end_index]
    # find_char = ''
    #
    # for el in string:
    #     if el in chars_string:
    #         continue
    #     else:
    #         find_char = el
    #
    # return find_char.upper() if chars[0].isupper() else find_char
    for x in range(1, len(chars)):
        if ord(chars[x]) - ord(chars[x - 1]) != 1:
            return chr(ord(chars[x]) - 1)


print(find_missing_letter(['a', 'b', 'c', 'd', 'f']))
print(find_missing_letter(['O', 'Q', 'R', 'S']))


# Random case
def random_case(x):
    from random import randint
    string = ''
    for char in x:
        num = randint(0, 1)
        if num == 1:
            string += char.upper()
        else:
            string += char.lower()
    return string


print(random_case('Lorem ipsum dolor sit amet, consectetur adipiscing elit'))


# Product of Maximus of Array
def max_product(lst, n_largest_elements):
    # num = 1 if len(lst) > 0 else 0
    # lst.sort()
    # for el in lst[len(lst) - n_largest_elements:]:
    #     num *= el
    # return num
    from functools import reduce
    from operator import mul
    from heapq import nlargest
    return reduce(mul, nlargest(n_largest_elements, lst))


print(max_product([10, 8, 7, 9], 3))
print(max_product([0]*10, 5))
print(max_product([8, 6, 4, 6], 3))


# Strong Number (Special Numbers Series #2)
def strong_num(number):
    from math import factorial
    num_list = [factorial(int(el)) for el in str(number)]

    if sum(num_list) == number:
        return "STRONG!!!!"

    return "Not Strong !!"


print(strong_num(40585))


# ReOrdering
def re_ordering(text):
    # words_list = text.split()
    # correct_text = []
    # for word in words_list:
    #     if word[0].istitle():
    #         correct_text.insert(0, word)
    #     else:
    #         correct_text.append(word)
    #
    # return ' '.join(correct_text)
    return ' '.join(sorted(text.split(), key=str.islower))


print(re_ordering("jojo ddjajdiojdwo ana G nnibiial"))


# Who ate the cookie
def cookie(x):
    # name = ''
    # if type(x) == str:
    #     name = "Zach"
    # elif type(x) == int or type(x) == float:
    #     name = "Monica"
    # else:
    #     name = "the dog"
    #
    # return f"Who ate the last cookie? It was {name}!"
    return f'Who ate the last cookie? It was {"Zach" if type(x) is str else "Monica" if type(x) in [int, float] else "the dog"}!'


# Remove the time
def shorten_to_date(long_date):
    return long_date[0:long_date.find(',')]


print(shorten_to_date("Monday February 2, 8pm"))


# Special number (Special number Series #5)
def special_number(number):
    return "Special!!" if max(str(number)) <= "5" else "NOT!!"


print(special_number(9))
print(special_number(1))


# SpeedCode #2 - Array Madness
def array_madness(a, b):
    return sum([el**2 for el in a]) > sum([el**3 for el in b])


print(array_madness([4, 5, 6], [1, 2, 3]))


# Enumerable Magic#1 - True for All
def _all(seq, fun):
    for el in seq:
        if not fun(el):
            return False

    return True


# Contamination #1 - String
def contamination(text, char):
    return char * len(text)


print(contamination("abc", "z"))
print(contamination("", "z"))
print(contamination("abc", ""))
print(contamination("//case", " "))


# Fix your code before the garden dies
def rain_amount(mm):
    if (mm >= 40):
        return f"You need to give your plant {mm - 40} mm of water"
    else:
        return "Your plant has had more than enough water for today!"


# Proof Read
def proofread(st):
    char_list = [char.lower() for char in st]
    flag = True

    for i in range(len(char_list) - 1):
        if char_list[i] == 'i' and char_list[i + 1] == 'e' and flag:
            char_list[i], char_list[i + 1] = char_list[i + 1], char_list[i]
            flag = False
        else:
            flag = True

        if i == 0:
            char_list[0] = char_list[0].upper()

        if (char_list[i] == '.' and i != len(char_list) - 1):
            char_list[i + 2] = char_list[i + 2].upper()

    return ''.join(char_list)


print(proofread("SHe wEnt CaNoIenG. Edsfsdfsdf fsf sfd."))


# Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
def replace_exclamation(st):
    return ''.join('!' if c in 'aeiouAEIOU' else c for c in st)


print(replace_exclamation("ABCDE"))

# Task hexlet Ascending sequence


def is_continuous_sequence(source):
    if len(source) < 2:
        return False
    for x, y in zip(source, source[1:]):
        if (y - x) != 1:
            return False
    return True


# Query String
def build_query_string(query_string):
    words = []
    for key, value in query_string.items():
        words.append(f'{key}={value}')

    return '&'.join(sorted(words))


print(build_query_string({'per': 10, 'page': 1}))


# Scrabble


def scrabble(sentence, word):
    counter_chars = Counter(sentence.lower())
    for letter, count in Counter(word.lower()).items():
        if counter_chars[letter] < count:
            return False

    return True


print(scrabble('rkqodlw', 'wworld'))
print(scrabble('scriptingjava', 'JavaScript'))


# Opposite number
def opposite(number):
    return number * -1


print(opposite(0))
print(opposite(1))
print(opposite(-3.543))


# Century from Year
def century(year):
    num = year/100
    if num == int(num):
        return int(num)
    else:
        return int(num + (1 - (num - int(num))))


print(century(1705))
print(century(1700))


# Reversed String
def solution(string):
    return string[::-1]


print(solution("world"))


def maskify(cc):
    return '#' * (len(cc) - 4) + cc[-4:]


print(maskify('SF$SDfgsd2eA'))
print(maskify('SF'))


# Remove First and Last Character
def remove_char(s):
    return s[1:-1]


print(remove_char("hello"))


# Create phone number
def create_phone_number(n):
    # number = ''.join([str(el) for el in n ])
    # return f'({(number[0:3])}) {number[3:6]}-{number[6:]}'
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)


print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


# How many arguments
def args_count(*args, **kwargs):
    return len(args) + len(kwargs)


print(args_count(32, a1=12))
print(args_count())


# Leap Years
def is_leap_year(year):
    return year % 4 == 0 and (not year % 100 == 0 or year % 400 == 0)


print(is_leap_year(2020))
print(is_leap_year(2100))
print(is_leap_year(2000))


# Growth of a Population
def nb_year(p0, percent, aug, p):
    from math import floor
    years = 0
    while p0 < p:
        p0 = p0 + floor(p0 * percent/100) + aug
        years += 1

    return years


print(nb_year(1500, 5, 100, 5000))
print(nb_year(1500000, 2.5, 10000, 2000000))
print(nb_year(1500000, 0.25, 1000, 2000000))


# Perfect Number Verifier


def is_perfect_solution(n):
    if n < 2 or n % 2 != 0:
        return False

    divisors_sum = 1
    sqrt_n = int(math.sqrt(n))

    for i in range(2, sqrt_n + 1):
        if n % i == 0:
            divisors_sum += i
            if i != n // i:
                divisors_sum += n // i

    return divisors_sum == n


print(is_perfect_solution(1))
print(is_perfect_solution(28))
print(is_perfect_solution(25))


# Abbreviate a Two Word Name
def abbrev_name(name):
    words = name.split()
    return f"{words[0][0]}.{words[1][0]}".upper()


print(abbrev_name("Sam Harris"))


# List Filtring
def filter_list(l):
    numbers = [el for el in l if type(el) is not str]
    return numbers


print(filter_list([1, 2, 'a', 'b']))


# Shortest Word
def find_short(s):
    words = [len(el) for el in s.split()]
    return min(words)


print(find_short("bitcoin take over the world maybe who knows perhaps"))


# Sum of positive
def positive_sum(arr):
    return sum([i for i in arr if i > 0])


print(positive_sum([1, 2, 3, 4, 5]))
print(positive_sum([]))


# Build a square
def generate_shape(n):
    return '/n'.join('+' * n for _ in range(n))


print(generate_shape(3))


# Playing with digits
def dig_pow(n, p):
    str_nums = str(n)
    sum = 0
    for i in range(len(str_nums)):
        sum += int(str_nums[i]) ** (p + i)
    return int(sum / n) if sum % n == 0 else -1


print(dig_pow(89, 1))
print(dig_pow(92, 1))
print(dig_pow(46288, 3))
print(dig_pow(41, 5))
print(dig_pow(114, 3))
print(dig_pow(8, 3))


# Smallest value of an array
def find_smallest(numbers, to_return):
    return min(numbers) if to_return == 'value' else numbers.index(min(numbers))


print(find_smallest([5, 4, 3, 2, 1], "index"))


# Perfect numbers
def is_perfect(number: int):
    if number % 2 != 0:
        return False
    count = 1
    for num in range(2, number//2 + 1):
        if number % num == 0:
            count += num
    return count == number


print(is_perfect(6))
print(is_perfect(28))
print(is_perfect(0))


# Degrees of three
def is_power_of_three(number: int):
    from math import log
    if not number or number < 3:
        return False
    degrees = log(number, 3)
    return degrees == int(degrees)


print(is_power_of_three(3))
print(is_power_of_three(2))
print(is_power_of_three(9))
print(is_power_of_three(0))
print(is_power_of_three(1))


# Fizz Buzz
def fizz_buzz(begin: int, end: int):
    result = ''
    for num in range(begin, end + 1):
        if num % 3 == 0 and num % 5 == 0:
            result += f'FizzBuzz '
        elif num % 3 == 0:
            result += f'Fizz '
        elif num % 5 == 0:
            result += f'Buzz '
        else:
            result += f'{str(num)} '
    return result.rstrip()


print(fizz_buzz(1, 5))
print(fizz_buzz(11, 20))


# Happy Ticket
def is_happy_ticket(series):
    result = [int(num) for num in series]
    middle = len(result)//2
    first_part = sum(result[0:middle])
    second_part = sum(result[middle:])
    return first_part == second_part


print(is_happy_ticket('123123'))  # True
print(is_happy_ticket('341801'))  # False


# Classification of segments
line1 = ((5, 1), (20, 10))


def is_degenerated(line):
    return line[0][0] == line[1][0] and line[0][1] == line[1][1]


def is_horizontal(line):
    return line[0][0] != line[1][0] and line[0][1] == line[1][1]


def is_vertical(line):
    return line[0][0] == line[1][0] and line[0][1] != line[1][1]


def is_inclined(line):
    return line[0][0] != line[1][0] and line[0][1] != line[1][1]


print(is_degenerated(line1))
print(is_horizontal(line1))
print(is_vertical(line1))
print(is_inclined(line1))

# Set the alarms up


def set_the_alarms_up(time_str, n):
    hours, minutes = map(int, time_str.split(":"))
    count_minutes = hours * 60 + minutes
    time_list = []
    time_list.append(time_str)
    for _ in range(1, n):
        count_minutes += 5
        hours = (count_minutes // 60) % 24
        minutes = count_minutes % 60
        time_list.append(f"{hours:02d}:{minutes:02d}")

    return time_list


print(set_the_alarms_up("23:55", 3))


# Do you speak English
def sp_eng(sentence):
    return 'english' in sentence.lower()


print(("english")) # True
print(("egnlish")) # False
print(("engliish")) # False
print(("1234egn lis;h")) # False
print(("1234english ;k")) # True
print(("English")) # True
print(("eNgliSh")) # True
print(("1234#$%%eNglish ;k9")) # True
print(("EGNlihs")) # False
print(("1234englihs**")) # False


#Remove Elements
def remove_every_other(my_list):
    return my_list[::2]

print(remove_every_other(['Hello', 'Goodbye', 'Hello Again', 'Hello', 'Smile']))


# Remove First and Last Character Part Two
def array(string):
    return " ".join(string.split(',')[1:-1]) or None


print(array('1,2,3,4,5'))
print(array(''))
print(array('1'))
print(array('1, 2'))

# Remove BMW
def remove_bmw(string):
    if type(string) != str:
        return TypeError("This program only works for text.")
    return "".join([el for el in list(string) if el not in "bmwBMW"])
    
print(remove_bmw("bmwvolvoBMW"))


# Pairs og integers from 0 to n
def generate_pairs(n):
    return [[i, j] for i in range(n + 1) for j in range(i, n + 1)]

print(generate_pairs(2))
print(generate_pairs(0))


# Challenge: True without return
solve = lambda: True # type: ignore
