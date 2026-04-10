const URL_API = "https://jsonplaceholder.typicode.com/todos";

export async function API() {
  try {
    const response = await fetch(URL_API);

    const data = await response.json();

    const mappingData = data
      .filter((value) => value.id <= 5)
      .map((value) => {
        return {
          id: value.id,
          title: value.title,
          status: "Belum Selesai",
          tanggal: new Date().toLocaleDateString("id-ID"),
        };
      });

    return mappingData;
  } catch (error) {
    console.error(error);
  }
}
