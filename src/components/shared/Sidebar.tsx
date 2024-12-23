"use client"

import * as React from "react"

import { Button } from "@drukland/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@drukland/components/ui/drawer"
import { LogOut, Logs, X } from "lucide-react"
import { Input } from "../ui"

export function Sidebar() {

    return (
        <Drawer direction='right'>
            <DrawerTrigger asChild>
                <Button variant="outline"><Logs /></Button>
            </DrawerTrigger>
            <DrawerContent className="h-full bg-white text-black/80">
                <div className="mx-auto w-full px-5 h-full">

                    <DrawerHeader className="flex justify-between relative">
                        <DrawerTitle className="text-2xl font-extrabold text-left">Drukland</DrawerTitle>
                        <DrawerClose asChild>
                            <Button variant="link" className="absolute !p-0 -right-0 top-3"><X /></Button>
                        </DrawerClose>
                    </DrawerHeader>

                    <div className="flex flex-col gap-4 h-[calc(100vh-150px)]">
                        <div className="relative w-full">
                            <Input type="search" placeholder="Search" className="pl-8 w-full !rounded-xl !ring-1 !ring-black/70" />
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
                        <DrawerClose asChild>
                            <Button variant="link">Business</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="link">Products</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="link">About Us</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="link">Faq</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="link">Send Inquery</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="link">Live Support</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="link">Contact</Button>
                        </DrawerClose>
                    </div>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button><LogOut />
                                <span>Logout</span>
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
