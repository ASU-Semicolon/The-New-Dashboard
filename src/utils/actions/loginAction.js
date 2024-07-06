export default async function action({ request }) {
  const data = await request.formData();
  const user = {
      phone: data.get("phone"),
      password: data.get("password"),
  };
  const response = await fetch(`${import.meta.env.VITE_URL}/api/users/signIn`, {
      method: request.method,
      body: JSON.stringify(user),
      headers: {
          "Content-Type": "application/json",
      },
  });
  console.log(response);
  if (response.status !== 201) {
      return response;
  }
  const responseData = await response.json();

  localStorage.setItem("token", responseData.data.Token);
  localStorage.setItem("role", responseData.data.User.Role);

  return redirect("/committees");
}
