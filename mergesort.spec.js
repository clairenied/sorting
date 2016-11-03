describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles a chill, regular array', function(){
    expect( mergeSort([0, 3, 5, 6, 22, 2, 4, 18, 9]) ).toEqual( [0, 2, 3, 4, 5, 6, 9, 18, 22] );
  });

  it('handles a different chill, regular array', function(){
    expect( mergeSort([2, 3, 4, 1, 6, 7, 9, 8, 0]) ).toEqual( [0, 1, 2, 3, 4, 6, 7, 8, 9] );
  });

  it('handles an even numbered array with multiple of the same value', function(){
    expect( mergeSort([2, 3, 4, 1, 1, 7, 9, 8, 0, 6]) ).toEqual( [0, 1, 1, 2, 3, 4, 6, 7, 8, 9] );
  });
});