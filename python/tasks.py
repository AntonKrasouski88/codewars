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