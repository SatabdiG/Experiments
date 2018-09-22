def return_smallest(arr):
    small = arr[0]
    small_index = 0
    for i in range(0, len(arr)-1):
        if arr[i] < small:
            small = arr[i]
            small_index = i
    return small_index




def selection_sort(arr):
    newarr = []
    for i in range(0, len(arr)-1):
        smallest = return_smallest(arr)
        newarr.append(arr.pop(smallest))
    return newarr


print(selection_sort([1,5,3,8,2,10,7]))


