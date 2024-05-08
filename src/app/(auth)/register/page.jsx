"use client";
import { register } from "@/service/register";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const route= useRouter()
  const handleregister = async(userInfo) => {
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
      firstname: userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      gender: userInfo.get("gender"),
      profile_url: "string",
    }

    const respone = await register(newUserInfo);
    console.log(respone)
    if(respone.status==200){
      route.push("/login")
    }
    
  }
  return (
    <>
      <div className="justify-center items-center flex box-border h-screen w-full border-4  pt-20">
        <div className="w-4/5 h-4/5">
          <div>
            <Image
              width={200}
              height={200}
              src="/assets/icons/logo.svg"
              className="h-8 mb-16"
              alt="Flowbite Logo"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <form className="mx-auto" action={handleregister}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-5">
                  <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  className="p-2 w-full rounded-[8px] border"
                  type="text"
                  name="firstname"
                  placeholder="Enter your name"
                />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="">Last Name</label>
                    <input
                      name="lastname"
                      type="text"
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="LastName "
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="">Email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="">Gender</label>
                    <input
                      name="gender"
                      type="text"
                      id="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="">Password</label>
                    <input
                      name="password"
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="**************"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="">Confirm Password</label>
                    <input
                      name="conpassword"
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="**************"
                      required
                    />
                  </div>
                </div>
                <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
              </form>
            </div>
            <Image width={350} height={550} src={"/assets/icons/sign-up.svg"} />
          </div>
         
        </div>
      </div>
    </>
  );
}
