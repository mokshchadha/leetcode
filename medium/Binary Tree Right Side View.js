const rightSideView = function (root) {
  const result = [];
  const bfs = (node) => {
    const q = [node];
    while (q.length) {
      const size = q.length;
      for (let i = 0; i < size; i++) {
        const curr = q.shift();
        if (i === size - 1) {
          result.push(curr.val);
        }

        if (curr.left) {
          q.push(curr.left);
        }
        if (curr.right) {
          q.push(curr.right);
        }
      }
    }
  };

  if (root === null) {
    return result;
  }
  bfs(root);
  return result;
};
