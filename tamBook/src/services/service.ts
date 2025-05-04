export async function saveData(data: any, url: string, type: string) {
  try {
    const loginResponse = await fetch(url, {
      method: type,
      headers: {
        accept: "*/*",
       // "Content-Type": "application/json",
       ...(type.toUpperCase() === "DELETE" ? {} : { "Content-Type": "application/json" }),
      },
      ...(type.toUpperCase() !== "DELETE" && {
        body: JSON.stringify({
          ...data,
        }),
      }),
    });
    const contentType = loginResponse.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      return null;
    }
    const loginData = await loginResponse.json();
    return loginData.token || loginData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getTableData(url: string) {
  try {
    const dataResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await dataResponse.json();
    return data.items ? data.items : data;
  } catch (error) {
    console.error("Error:", error);
  }
}
