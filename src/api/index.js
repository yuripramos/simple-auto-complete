const fetchData = async (path) => {
  const response = await fetch(path);

  const newServerData = await response.json();

  return newServerData;
};

export { fetchData };
