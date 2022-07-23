const numMatchingSubseq = function (S, words) {
  var counter = 0;
  for (var i = 0; i < words.length; ++i) {
    counter = isSubsequence(words[i], S) ? counter + 1 : counter;
  }
  return counter;
};

const isSubsequence = function (s, t) {
  var pointer = 0;
  for (var i = 0; i < t.length; ++i) {
    var char = t[i];
    if (char === s[pointer]) {
      ++pointer;
    }
    if (pointer === s.length) {
      return true;
    }
  }
  return s === t;
};
