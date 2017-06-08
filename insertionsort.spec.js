describe('insertion Sort', function(){
  it('handles an array', function(){
    expect( insertionSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
  });
    it('handles an empty array', function(){
    expect( insertionSort([]) ).toEqual( [] );
  });
      it('handles an od array', function(){
    expect( insertionSort([5,2,3,4,6,1,7]) ).toEqual( [1,2,3,4,5,6,7] );
  });
        it('handles an negative array', function(){
    expect( insertionSort([1,-1,0]) ).toEqual( [-1, 0, 1] );
  });
});