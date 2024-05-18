export const Requests = () => {
  const championNames = async () => {
    return fetch("http://localhost:5000/champions")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch champions");
        }
        return await res.json();
      })
      .catch((error) => {
        console.log("Error type: ", error);
        throw error;
      });
  };

  return { championNames };
};
