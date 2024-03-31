/**
 *
 * @param {string} url
 * @param {string} token
 * @param {string} method
 * @param {object} payload
 * @returns
 */
const fetchWrapper = async (path, token, method, payload) => {
  const baseUrl = `https://grav-labs-5d2f91941bbb.herokuapp.com`;
  let url = new URL(baseUrl + path);

  if (method === "GET" && payload) {
    Object.keys(payload).forEach(key => url.searchParams.append(key, payload[key]));
  }

  let requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...(token && !["/login", "/signup"].includes(path) && { Authorization: token }),
    },
  };

  if (method !== "GET") {
    requestOptions.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      if (response.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
        return;
      }
      throw new Error('Response not OK');
    }

    if (response.headers.get('content-type')?.includes('stream')) {
      // Create a ReadableStream from the response body
      const reader = response.body.getReader();

      // Create a function to process the stream
      const processStream = async (onChunk) => {
        let result = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = new TextDecoder("utf-8").decode(value);
          result += chunk;
          onChunk(chunk); // Call the onChunk callback with each chunk of data
        }
        return result;
      };

      // Return an object with the processStream function
      return { processStream };
    } else {
      // Return the parsed JSON response
      return await response.json();
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchWrapper;