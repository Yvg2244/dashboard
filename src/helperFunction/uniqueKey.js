export const getUniqueValues = (key,tickets) => {
    const uniqueValues = [...new Set(tickets.map(ticket => ticket[key]))];
    return uniqueValues;
  };
