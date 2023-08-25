export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);


    list.insertAt(80,0)
    list.insertAt(2,1)
    expect(list.get(0)).toEqual(80)
    expect(list.get(1)).toEqual(2)

    list.insertAt(72,list.length)
    expect(list.get(list.length - 1)).toEqual(72)
    do { list.removeAt(0) } while (list.length > 0)
    list.insertAt(100,0)
    expect(list.get(0)).toEqual(100)
}
