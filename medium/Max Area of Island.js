const maxAreaOfIsland = function (grid) {
  const ones = [];
  let ans = 0;
  const n = grid.length,
    m = grid[0].length;
  const trav = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
    grid[i][j] = 0;
    return (
      1 + trav(i - 1, j) + trav(i, j - 1) + trav(i + 1, j) + trav(i, j + 1)
    );
  };
  grid.map((e, i) => {
    e.map((v, j) => (v == 1 ? ones.push([i, j]) : ""));
  });
  ones.map(([x, y]) => {
    ans = Math.max(ans, trav(x, y));
  });
  return ans;
};
