import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image src={"/assets/S_logo_new.svg"} alt="Logo" className='w-28 cursor-pointer mr-14' width={5} height={5} />
                </Link>
                <div className="text-lg font-bold">My Portfolio</div>
                <ul className="flex space-x-6">                
                    {/* <li>
                        <Link href="/">
                            <p className="hover:text-gray-400">Home</p>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="#about">
                            <p className="hover:text-gray-400">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#experiences">
                            <p className="hover:text-gray-400">Experiences</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#work">
                            <p className="hover:text-gray-400">Work</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <p className="hover:text-gray-400">Contact</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <p className="hover:text-gray-400">Resume</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;