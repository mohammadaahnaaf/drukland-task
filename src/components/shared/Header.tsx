import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Sidebar } from './Sidebar'

export const Header = () => {
    return (
        <header className="bg-white border-b">
            <div className="bg-[#DDDDDD] border-b hidden md:flex">
                <div className="max-w-[1320px] px-2 w-full text-xs mx-auto flex md:justify-end justify-center gap-4 py-3">
                    <Link href="#" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
                        <HelpCircle className="h-4 w-4" />
                        FAQ
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
                        <Mail className="h-4 w-4" />
                        Send Inquiry
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
                        <MessageCircle className="h-4 w-4" />
                        Live Support
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-[#0B0B0B] hover:text-primary">
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

                <div className="md:flex hidden items-center gap-4">
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
                <div className="md:hidden flex">
                    <Sidebar />
                </div>
            </div>
        </header>
    )
}