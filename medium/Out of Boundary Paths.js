const MOD = 1e9 + 7;
const findPaths = function (m, n, maxMove, startRow, startColumn) {
  const dir = [0, -1, 0, 1, 0];
  const isOutOfBoundary = (x, y) => {
    return x < 0 || y < 0 || x == m || y == n;
  };

  const dp = new Map();
  const vis = new Map();

  const ways = (x, y, mm) => {
    if (isOutOfBoundary(x, y)) return 1;
    if (mm == 0) return 0;

    const key = [x, y, mm].join(":");
    if (vis.get(key) == true) return 0;
    if (dp.has(key)) return dp.get(key);

    let total = 0;
    for (let i = 1; i <= 4; i++) {
      vis.set(key, true);
      total = (total + ways(x + dir[i], y + dir[i - 1], mm - 1)) % MOD;
      vis.set(key, false);
    }

    dp.set(key, total);
    return total;
  };

  return ways(startRow, startColumn, maxMove);
};
