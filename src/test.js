
function sort_numbers(a) {
  var swapped;
  do {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return a;
}


function compute_mean(a) {
  return a.reduce(function(acc, val) { return acc + val; }, 0) / a.length;
}


