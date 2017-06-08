describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
  });
    it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
      it('handles an empty array', function(){
    expect( mergeSort([5,2,3,4,6,1,7]) ).toEqual( [1,2,3,4,5,6,7] );
  });
        it('handles an empty array', function(){
    expect( mergeSort([1,-1,0]) ).toEqual( [-1, 0, 1] );
  });
});