stack = []

def fact(n):
    if(n == 1):
        return 1
    else:
        return n*fact(n-1)

def iterfact(n):
    fact=1
    count = n
    while(count != 1):
        fact=fact*count
        count -= 1
    return fact

print(fact(5))

print(iterfact(5))