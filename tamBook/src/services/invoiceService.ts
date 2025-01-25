
export async function saveData(data:any, url:string) {
  try {
    const loginResponse = await fetch(url, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    ...data
      }),
    });

    const loginData = await loginResponse.json();
    return loginData.token;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getTableData(url:string) {
  try {
    const dataResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await dataResponse.json();
    return data.items;
  
  } catch (error) {
    console.error("Error:", error);
  }
}



