const levelOrder = function (root) {
  if (!root || root.length < 1) return [];
  let level = [root];
  const ans = [];
  while (level.length) {
    const l = level.length;
    const curr = [];
    for (let i = 0; i < l; i++) {
      const temp = level.shift();
      if (temp?.val >= -1000) curr.push(temp.val);
      if (temp?.left) level.push(temp.left);
      if (temp?.right) level.push(temp.right);
    }
    ans.push(curr);
  }
  return ans;
};
