import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});


test("bubble-sort", function () {
    const arr = [6,5,4,3,2,1];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});

