const bestHand = function (r, s) {
  const ranksMap = _map(r);
  const suitsMap = _map(s);

  if (isFlush(suitsMap)) return "Flush";
  else if (is3OfAKind(ranksMap)) return "Three of a Kind";
  else if (isPair(ranksMap)) return "Pair";
  return "High Card";
};

const isFlush = (suitsMap) => Object.keys(suitsMap).length === 1;

const is3OfAKind = (ranksMap) => Object.values(ranksMap).find((e) => e >= 3);

const isPair = (ranksMap) => Object.values(ranksMap).find((e) => e === 2);

const _map = (arr) =>
  arr.reduce((a, e) => (a[e] ? { ...a, [e]: a[e] + 1 } : { ...a, [e]: 1 }), {});
