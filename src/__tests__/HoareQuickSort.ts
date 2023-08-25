import hoare_quick_sort from "@code/HoareQuickSort";

test("quick-sort", function () {
    let arr = [9, 3, 7, 4, 69, 420, 42];

    arr = [1,1,1,0,0];
    hoare_quick_sort(arr);
    expect(arr).toEqual([0,0,1,1,1]);

    arr = [2,0,1];
    hoare_quick_sort(arr);
    expect(arr).toEqual([0,1,2]);


    debugger;
    arr = [9, 3, 7, 4, 69, 420, 42];
    hoare_quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
