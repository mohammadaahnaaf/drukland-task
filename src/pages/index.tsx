import Link from "next/link"
import { Button } from "@drukland/components/ui/button"
import { Checkbox } from "@drukland/components/ui/checkbox"
import { Input } from "@drukland/components/ui/input"

import Image from "next/image"
import axios from "axios"
import { useState } from "react"
import { toast } from "@drukland/hooks/use-toast"
import { api_url } from "@drukland/config"
import { Footer, Header } from "@drukland/components"

export default function HomePage() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    const data = {
      "email": email,
      "password": password
    }
    try {
      const res = await axios.post(`${api_url}/user/signin`, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      if (res.data.status === 'success') {
        toast({
          title: 'Success',
          description: 'You have successfully logged in'
        })
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.data?.form[0] || 'An error occurred');
        toast({
          title: err.response.data?.data?.form[0] || 'An error occurred',
          description: err.response.data?.data?.form[0] as string
        })
      } else {
        setError('An unexpected error occurred');
        toast({
          title: 'Error',
          description: 'Please try Again'
        })
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-[#292929] grid content-between">


      <Header />


      <main className="max-w-[1320px] px-2 mx-auto justify-center xl:justify-between items-center flex w-full py-8">
        <div className="xl:flex hidden relative items-center max-w-[796px] h-[640px] w-full justify-center rounded-lg bg-white p-12">
          <Image src='/cover.jpg' fill alt="cover-image" className="object-cover rounded-xl" />
        </div>


        <div className="w-full max-w-[404px] min-h-[521px] rounded-xl bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-extrabold">Drukland.de</h1>
            <h2 className="text-xl">Sign In to your account</h2>
            <p className="text-sm text-muted-foreground">
              Don&apos;t you have an account?{" "}
              <Link href="#" className="font-semibold text-primary">
                Register
              </Link>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1 group">
              <label htmlFor="email" className="text-sm group-focus-within:visible invisible duration-300 !font-bold">Email Address</label>
              <Input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" />
            </div>
            <div className="space-y-1 group">
              <label htmlFor="password" className="text-sm group-focus-within:visible invisible duration-300 group-focus-within:font-bold">Password</label>
              <Input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">
                I agree to all{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <Button type="submit"
              className="w-full bg-black text-white hover:bg-gray-800">Log in</Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-muted-foreground">or sign in with</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Link href='#'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.1468 1.12801H2.56541C2.1665 1.12395 1.78227 1.2783 1.49704 1.5572C1.2118 1.8361 1.04885 2.21676 1.04395 2.61566V20.268C1.04974 20.6664 1.21308 21.0462 1.49822 21.3243C1.78336 21.6025 2.16708 21.7564 2.56541 21.7523H20.1468C20.5457 21.7555 20.9297 21.6006 21.2148 21.3215C21.4999 21.0425 21.6629 20.6619 21.6683 20.263V2.61059C21.6611 2.21286 21.4973 1.83401 21.2124 1.55639C20.9275 1.27878 20.5446 1.12483 20.1468 1.12801Z" fill="#0076B2" />
                  <path d="M4.09793 8.8588H7.15946V18.7094H4.09793V8.8588ZM5.62954 3.9563C5.98068 3.9563 6.32393 4.06045 6.61587 4.25557C6.90781 4.45068 7.13533 4.72801 7.26962 5.05245C7.40392 5.3769 7.43898 5.73389 7.37035 6.07826C7.30172 6.42263 7.1325 6.73891 6.88408 6.98709C6.63567 7.23526 6.31923 7.40419 5.97479 7.47249C5.63036 7.54078 5.2734 7.50539 4.94908 7.37078C4.62477 7.23618 4.34766 7.0084 4.15282 6.71627C3.95798 6.42415 3.85416 6.08079 3.85449 5.72965C3.85494 5.25917 4.04215 4.80812 4.37499 4.4756C4.70783 4.14308 5.15906 3.9563 5.62954 3.9563ZM9.07988 8.8588H12.0146V10.2112H12.0552C12.4643 9.43696 13.4617 8.62044 14.9511 8.62044C18.0515 8.61368 18.6262 10.6541 18.6262 13.2998V18.7094H15.5647V13.9168C15.5647 12.7757 15.5444 11.3067 13.9739 11.3067C12.4034 11.3067 12.1363 12.5509 12.1363 13.8424V18.7094H9.07988V8.8588Z" fill="white" />
                </svg>
              </Link>
              <Link href='#'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.2465 9.67437H19.5202V9.63695H11.4057V13.2434H16.5012C15.7578 15.3428 13.7603 16.8498 11.4057 16.8498C8.41826 16.8498 5.99609 14.4277 5.99609 11.4402C5.99609 8.45268 8.41826 6.03051 11.4057 6.03051C12.7848 6.03051 14.0393 6.55074 14.9946 7.40051L17.5448 4.8503C15.9345 3.34957 13.7806 2.42407 11.4057 2.42407C6.42661 2.42407 2.38965 6.46103 2.38965 11.4402C2.38965 16.4193 6.42661 20.4563 11.4057 20.4563C16.3849 20.4563 20.4218 16.4193 20.4218 11.4402C20.4218 10.8356 20.3596 10.2455 20.2465 9.67437Z" fill="#FFC107" />
                  <path d="M3.42896 7.24363L6.39119 9.41605C7.19272 7.43161 9.13389 6.03051 11.4055 6.03051C12.7845 6.03051 14.0391 6.55074 14.9944 7.40051L17.5446 4.8503C15.9343 3.34957 13.7803 2.42407 11.4055 2.42407C7.94241 2.42407 4.93915 4.37921 3.42896 7.24363Z" fill="#FF3D00" />
                  <path d="M11.4055 20.4562C13.7343 20.4562 15.8504 19.565 17.4503 18.1157L14.6598 15.7543C13.7242 16.4659 12.5809 16.8507 11.4055 16.8498C9.0604 16.8498 7.06919 15.3545 6.31905 13.2677L3.37891 15.533C4.87107 18.4529 7.90138 20.4562 11.4055 20.4562Z" fill="#4CAF50" />
                  <path d="M20.2461 9.67438H19.5199V9.63696H11.4054V13.2434H16.5008C16.1453 14.2426 15.5047 15.1157 14.6584 15.7548L14.6598 15.7539L17.4502 18.1152C17.2528 18.2947 20.4215 15.9482 20.4215 11.4402C20.4215 10.8357 20.3593 10.2455 20.2461 9.67438Z" fill="#1976D2" />
                </svg>

              </Link>
              <Link href='#'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_12_91)">
                    <path d="M22.2725 11.4402C22.2725 5.46486 17.4285 0.62085 11.4532 0.62085C5.47792 0.62085 0.633911 5.46486 0.633911 11.4402C0.633911 16.8404 4.5904 21.3164 9.76271 22.128V14.5676H7.01562V11.4402H9.76271V9.05653C9.76271 6.34494 11.378 4.84714 13.8494 4.84714C15.0331 4.84714 16.2712 5.05846 16.2712 5.05846V7.72102H14.907C13.5629 7.72102 13.1437 8.55504 13.1437 9.4107V11.4402H16.1444L15.6647 14.5676H13.1437V22.128C18.3161 21.3164 22.2725 16.8404 22.2725 11.4402Z" fill="#1877F2" />
                    <path d="M15.6649 14.5676L16.1445 11.4402H13.1439V9.41072C13.1439 8.55498 13.563 7.72105 14.9071 7.72105H16.2713V5.05848C16.2713 5.05848 15.0332 4.84717 13.8494 4.84717C11.3781 4.84717 9.76284 6.34497 9.76284 9.05656V11.4402H7.01575V14.5676H9.76284V22.1281C10.3221 22.2157 10.8873 22.2597 11.4534 22.2595C12.0194 22.2597 12.5846 22.2157 13.1439 22.1281V14.5676H15.6649Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_91">
                      <rect width="21.6386" height="21.6386" fill="white" transform="translate(0.633911 0.62085)" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </form>
        </div>
      </main>


      <Footer />
    </div>
  )
}