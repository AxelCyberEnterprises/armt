const backendURL = "https://api.armt.ng/api/contact";

export const sendContactForm = async (data) => {
  return fetch(`${backendURL}`, {
    // Construct URL dynamically
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
};
