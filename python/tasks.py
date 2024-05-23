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
