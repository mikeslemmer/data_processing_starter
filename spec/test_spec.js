describe("Simple Array", function() {
  beforeEach(function() {
  });

  it("should be able to sort some numbers", function() {
    let a = sort_numbers([3,1,7,5]);
    expect(a[0]).toEqual(1);
    expect(a[1]).toEqual(3);
    expect(a[2]).toEqual(5);
    expect(a[3]).toEqual(7);
  });

  it("should be able to compute a mean", function() {
    let m = compute_mean([1,3,5,7,9]);
    expect(m).toEqual(5);
  });
});
