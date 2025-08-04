import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/logoMPM.webp"
                        alt="Logo MPM FTUI"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-black text-2xl font-semibold">MPM FTUI</h1>
                </div>

                <ul className="flex space-x-6">
                <li><Link href="/" className="text-black hover:text-gray-400">Home</Link></li>
                <li><Link href="/about" className="text-black hover:text-gray-400">About</Link></li>
                <li><Link href="/contact" className="text-black hover:text-gray-400">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}