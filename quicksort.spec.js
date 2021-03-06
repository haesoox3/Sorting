describe('quick Sort', function(){
  it('handles an array', function(){
    expect( quickSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
  });
    it('handles an empty array', function(){
    expect( quickSort([]) ).toEqual( [] );
  });
      it('handles an odd array', function(){
    expect( quickSort([5,2,3,4,6,1,7]) ).toEqual( [1,2,3,4,5,6,7] );
  });
        it('handles a negative array', function(){
    expect( quickSort([1,-1,0]) ).toEqual( [-1, 0, 1] );
  });
});