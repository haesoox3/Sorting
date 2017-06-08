
describe('Bubble Sort', function(){
  it('handles an array', function(){
    expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
  });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an odd array', function(){
    expect( bubbleSort([5,2,3,4,6,1,7]) ).toEqual( [1,2,3,4,5,6,7] );
  });
  it('handles a negative array', function(){
    expect( bubbleSort([1,-1,0]) ).toEqual( [-1, 0, 1] );
  });
});

// before(function () {
//   spyOn(swap, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('getting to the center of tootsiepop involves exactly three licks', function () {
//   bubbleSort([5,2,3,1]);
//   expect(swap.calls.count()).toEqual(3);
// });

// before(function () {
//   spyOn(Array.prototype, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('number of swaps', function () {
//   var sorted = bubbleSort([]);
//   expect(Array.prototype.swap.getTimesCalled()).toEqual(0);
// });
//   before(function () {
//   spyOn(Array.prototype, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
