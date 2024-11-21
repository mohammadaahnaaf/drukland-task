import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="mt-auto">
            <div className="max-w-[1320px] px-2 border-t border-[#292929] text-black w-full mx-auto grid lg:flex items-center justify-center lg:justify-between py-4 text-sm">
                <p className='flex w-full'>All rights reserved © 2024 | Drukland.de</p>
                <div className="lg:flex grid gap-4 w-full text-center lg:text-left">
                    <Link href="#">Terms of Use</Link>
                    <Link href="#">Sitemap</Link>
                    <Link href="#">Company information</Link>
                    <Link href="#" className="h-auto p-0 !text-center">
                        Cookie settings
                    </Link>
                </div>
            </div>
        </footer>
    )
}