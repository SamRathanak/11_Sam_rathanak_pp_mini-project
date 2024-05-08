"use client"
import { signIn } from 'next-auth/react'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
export default function LoginPage() {
  const router = useRouter();
  // defind handle login
  async function handleLogin(userInfo){
    // define structure object
    const newUserInfo = {
      email:userInfo.get("email"),
      password:userInfo.get("password")
    }
// calling next auth service and passing "newUserInfo"
const res = await signIn("credentials",{
  redirect:false,
  ...newUserInfo
})
console.log(res)
  if(res.status==200){
    router.push("/dashboard")
    }
  }
  return (
    <main>
      <div className="justify-center items-center flex box-border h-screen w-full p-4 border-4  ">
        <div className="w-4/5 h-4/5">
          <div>
          <Image
            width={200}
            height={200}
            src="/assets/icons/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          </div>
          <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
              <form className="max-w-sm mx-auto" action={handleLogin}>
        <h2 className="text-2xl mt-6 mb-6">Login</h2>
        <div className="mb-5">
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
          <input
            name="password"
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="**************"
            required
          />

          <button
            type="submit"
            className="ml-2 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-40 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <div className="flex mt-3">
            <p className="text-gray-400">Didn't have account yet?</p>
            <Link
              href={"/register"}
            > <p className="text-blue-600">Register</p> </Link>
          </div>
          <div className="my-6 border-b text-center">
            <div className="leading-none px-4 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Continue with
            </div>
          </div>
          <div className="">

          </div>
          <button
  type="button"
  className="ml-2 my-6 text-gray-400 bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm border border-gray-400 sm:w-auto px-40 py-2.5 text-center dark:bg-gray-400">
  Google
  </button>
        </div>
      </form>
              </div>
              <Image 
              className=""
              width={350}
              height={500}
              src={"assets/icons/login.svg"}
              />
          </div>
          <p className="text-gray-400">@2024 My office All Rights Reserved</p>
        </div>
      </div>
    </main>
  );
}
