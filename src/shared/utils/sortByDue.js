const sortByDue = (arr) => {
  return arr.sort((a, b) => {
    return (Date.parse(a.dueDate) - Date.parse(b.dueDate));
  });
};

export default sortByDue;
