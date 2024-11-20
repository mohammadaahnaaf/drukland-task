import Link from "next/link"
import { Button } from "@drukland/components/ui/button"
import { Checkbox } from "@drukland/components/ui/checkbox"
import { Input } from "@drukland/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@drukland/components/ui/navigation-menu"

import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react'
import Image from "next/image"
import axios from "axios"
import { useState } from "react"
import { toast } from "@drukland/hooks/use-toast"
import { api_url } from "@drukland/config"

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


      <header className="bg-white border-b">
        <div className="bg-[#DDDDDD] border-b">
          <div className="max-w-[1320px] px-2 w-full text-xs mx-auto flex md:justify-end justify-center gap-4 py-3">
            <Link href="/faq" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </Link>
            <Link href="/inquiry" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
              <Mail className="h-4 w-4" />
              Send Inquiry
            </Link>
            <Link href="/support" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
              <MessageCircle className="h-4 w-4" />
              Live Support
            </Link>
            <Link href="/contact" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
              <Phone className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>
        <div className="max-w-[1320px] px-2 w-full mx-auto flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-extrabold">
            Drukland.de
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <NavigationMenuLink asChild>
                      <Link href="#">Business Solutions</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <NavigationMenuLink asChild>
                      <Link href="#">Our Products</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <div className="relative xl:w-[565px] w-full">
              <Input type="search" placeholder="Search" className="pl-8 !rounded-xl !ring-1 !ring-black/70" />
              <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2">
                <span className="sr-only">Search</span>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_174_21)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4408 10.9422C10.5337 10.8492 10.6439 10.7755 10.7653 10.7252C10.8867 10.6748 11.0169 10.6489 11.1483 10.6489C11.2797 10.6489 11.4098 10.6748 11.5312 10.7252C11.6526 10.7755 11.7629 10.8492 11.8558 10.9422L15.7058 14.7922C15.8934 14.9797 15.9989 15.2341 15.999 15.4994C15.9991 15.7646 15.8938 16.0191 15.7063 16.2067C15.5188 16.3944 15.2644 16.4998 14.9991 16.4999C14.7339 16.5 14.4794 16.3947 14.2918 16.2072L10.4418 12.3572C10.3488 12.2643 10.2751 12.1541 10.2247 12.0327C10.1744 11.9113 10.1485 11.7811 10.1485 11.6497C10.1485 11.5183 10.1744 11.3882 10.2247 11.2668C10.2751 11.1454 10.3488 11.0351 10.4418 10.9422H10.4408Z" fill="#292929" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 12.5C7.22227 12.5 7.93747 12.3577 8.60476 12.0813C9.27205 11.8049 9.87837 11.3998 10.3891 10.8891C10.8998 10.3784 11.3049 9.77205 11.5813 9.10476C11.8577 8.43747 12 7.72227 12 7C12 6.27773 11.8577 5.56253 11.5813 4.89524C11.3049 4.22795 10.8998 3.62163 10.3891 3.11091C9.87837 2.60019 9.27205 2.19506 8.60476 1.91866C7.93747 1.64226 7.22227 1.5 6.5 1.5C5.04131 1.5 3.64236 2.07946 2.61091 3.11091C1.57946 4.14236 1 5.54131 1 7C1 8.45869 1.57946 9.85764 2.61091 10.8891C3.64236 11.9205 5.04131 12.5 6.5 12.5ZM13 7C13 8.72391 12.3152 10.3772 11.0962 11.5962C9.87721 12.8152 8.22391 13.5 6.5 13.5C4.77609 13.5 3.12279 12.8152 1.90381 11.5962C0.684819 10.3772 0 8.72391 0 7C0 5.27609 0.684819 3.62279 1.90381 2.40381C3.12279 1.18482 4.77609 0.5 6.5 0.5C8.22391 0.5 9.87721 1.18482 11.0962 2.40381C12.3152 3.62279 13 5.27609 13 7Z" fill="#292929" />
                  </g>
                  <defs>
                    <clipPath id="clip0_174_21">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>

              </Button>
            </div>
            <Button variant="ghost" size="icon" className='!p-0'>
              <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7391 17.7609H23.1304V13.6484C23.1304 13.1652 22.9364 12.7011 22.594 12.3587L18.7935 8.55818C18.4511 8.21579 17.987 8.02177 17.5038 8.02177H15.8261V6.19569C15.8261 5.18753 15.0082 4.3696 14 4.3696H1.82609C0.817935 4.3696 0 5.18753 0 6.19569V18.3696C0 19.3777 0.817935 20.1957 1.82609 20.1957H2.43478C2.43478 22.212 4.07065 23.8479 6.08696 23.8479C8.10326 23.8479 9.73913 22.212 9.73913 20.1957H14.6087C14.6087 22.212 16.2446 23.8479 18.2609 23.8479C20.2772 23.8479 21.913 22.212 21.913 20.1957H23.7391C24.0739 20.1957 24.3478 19.9218 24.3478 19.587V18.3696C24.3478 18.0348 24.0739 17.7609 23.7391 17.7609ZM6.08696 22.0218C5.0788 22.0218 4.26087 21.2038 4.26087 20.1957C4.26087 19.1875 5.0788 18.3696 6.08696 18.3696C7.09511 18.3696 7.91304 19.1875 7.91304 20.1957C7.91304 21.2038 7.09511 22.0218 6.08696 22.0218ZM18.2609 22.0218C17.2527 22.0218 16.4348 21.2038 16.4348 20.1957C16.4348 19.1875 17.2527 18.3696 18.2609 18.3696C19.269 18.3696 20.087 19.1875 20.087 20.1957C20.087 21.2038 19.269 22.0218 18.2609 22.0218ZM21.3043 14.1087H15.8261V9.84786H17.5038L21.3043 13.6484V14.1087Z" fill="#292929" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className='!p-0'>
              <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5216 14.1087C15.5955 14.1087 18.0868 11.6563 18.0868 8.63045C18.0868 5.60457 15.5955 3.15219 12.5216 3.15219C9.44769 3.15219 6.95638 5.60457 6.95638 8.63045C6.95638 11.6563 9.44769 14.1087 12.5216 14.1087ZM16.4173 15.4783H15.6912C14.7259 15.9148 13.652 16.1631 12.5216 16.1631C11.3912 16.1631 10.3216 15.9148 9.35204 15.4783H8.62595C5.39986 15.4783 2.78247 18.0548 2.78247 21.2304V23.0109C2.78247 24.1451 3.71725 25.0652 4.86943 25.0652H20.1738C21.3259 25.0652 22.2607 24.1451 22.2607 23.0109V21.2304C22.2607 18.0548 19.6433 15.4783 16.4173 15.4783Z" fill="#292929" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className='!p-0'>
              <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0435 12.4179V13.0942C25.0435 13.6545 24.5893 14.1087 24.029 14.1087H23.6908L22.587 21.8352C22.4442 22.8348 21.5882 23.5773 20.5785 23.5773H5.16071C4.151 23.5773 3.29494 22.8348 3.1521 21.8352L2.04834 14.1087H1.71017C1.14988 14.1087 0.695679 13.6545 0.695679 13.0942V12.4179C0.695679 11.8576 1.14988 11.4034 1.71017 11.4034H4.55671L9.07036 5.19716C9.50976 4.59303 10.3557 4.45941 10.9599 4.89881C11.5641 5.33821 11.6976 6.18417 11.2582 6.78835L7.90183 11.4034H17.8373L14.4809 6.7883C14.0415 6.18417 14.1752 5.33817 14.7793 4.89877C15.3834 4.45937 16.2295 4.59294 16.6689 5.19711L21.1825 11.4034H24.029C24.5893 11.4034 25.0435 11.8576 25.0435 12.4179ZM13.8841 19.8575V15.1232C13.8841 14.5629 13.4299 14.1087 12.8696 14.1087C12.3093 14.1087 11.8551 14.5629 11.8551 15.1232V19.8575C11.8551 20.4178 12.3093 20.872 12.8696 20.872C13.4299 20.872 13.8841 20.4178 13.8841 19.8575ZM18.6184 19.8575V15.1232C18.6184 14.5629 18.1642 14.1087 17.6039 14.1087C17.0436 14.1087 16.5894 14.5629 16.5894 15.1232V19.8575C16.5894 20.4178 17.0436 20.872 17.6039 20.872C18.1642 20.872 18.6184 20.4178 18.6184 19.8575ZM9.14978 19.8575V15.1232C9.14978 14.5629 8.69559 14.1087 8.13529 14.1087C7.575 14.1087 7.1208 14.5629 7.1208 15.1232V19.8575C7.1208 20.4178 7.575 20.872 8.13529 20.872C8.69559 20.872 9.14978 20.4178 9.14978 19.8575Z" fill="#292929" />
              </svg>
            </Button>
          </div>
        </div>
      </header>


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

      {/* Footer */}
      <footer className="mt-auto">
        <div className="max-w-[1320px] px-2 border-t border-[#292929] text-black w-full mx-auto grid lg:flex items-center justify-center lg:justify-between py-4 text-sm">
          <p>All rights reserved © 2024 | Drukland.de</p>
          <div className="lg:flex grid gap-4 w-full text-center lg:text-left">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/sitemap">Sitemap</Link>
            <Link href="/company">Company information</Link>
            <Button variant="link" className="h-auto p-0">
              Cookie settings
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}