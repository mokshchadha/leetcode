const helper = (preorder, map, p1, p2, i1, i2) => {
  if (p1 >= p2 || i1 >= i2) return null;
  const inorderIdx = map.get(preorder[p1]);
  const leftSubtreeSize = inorderIdx - i1;
  return new TreeNode(
    preorder[p1],
    helper(preorder, map, p1 + 1, p1 + leftSubtreeSize + 1, i1, inorderIdx),
    helper(preorder, map, p1 + leftSubtreeSize + 1, p2, inorderIdx + 1, i2)
  );
};

const buildTree = (preorder, inorder) => {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) map.set(inorder[i], i);
  return helper(preorder, map, 0, preorder.length, 0, inorder.length);
};
