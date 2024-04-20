export const updateObjectinArray = (items, itemId, objectPropName, newObjectProps) => {
  return items.map((u) => {
    if (u[objectPropName]=== itemId) {
      return { ...u, ...newObjectProps };
    }

    return u;
  });
};
// state.users.map((u) => {
//           if (u.id === action.userId) {
//             return { ...u, followed: true };
//           }
//           return u;
