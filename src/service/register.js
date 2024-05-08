"use server";
export const register = async (userInfo) => {
    console.log(userInfo);
     const res = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
    {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await res.json();
  return result;
};