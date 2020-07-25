const API_PATH = "https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices";

const getPlans = async () => {
  try {
    const jsonData = await fetch(API_PATH);
    const data = await jsonData.json();

    return data.shared ? data : { shared: { products: {} } };
  } catch (error) {
    alert(error);
  }
};

export { getPlans };
