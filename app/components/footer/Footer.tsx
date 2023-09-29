/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Container from "../container/Container"
import FooterList from "./FooterList"
import {MdFacebook} from "react-icons/md"
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-950 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="font-bold text-base mb-2">Shop Categories</h3>
                    <Link href={`/`}>Paintings</Link>
                    <Link href={`/`}>Artifacts</Link>
                    <Link href={`/`}>Flowers</Link>
                    <Link href={`/`}>Perfumes</Link>
                    <Link href={`/`}>Surprise & Packages</Link>
                </FooterList>
                <FooterList>
                    <h3 className="font-bold text-base mb-2">Customer Service</h3>
                    <Link href={`/`}>Contact Us</Link>
                    <Link href={`/`}>Shopping Policy</Link>
                    <Link href={`/`}>Returns & Exchange</Link>
                    <Link href={`/`}>FAQ's</Link>
                </FooterList>
                <FooterList>
                    <h3 className="font-bold text-base mb-2">About Us</h3>
                    <p className="mb-2">
                        Welcome to Teflon's Luxury Haven, an online art and painting store where exquisite craftsmanship meets sophistication. Discover a curated collection of timeless masterpieces that redefine luxury living. 
                    </p>
                    <p>&copy; {new Date().getFullYear()} Teflon Luxury Haven. All rights reserved</p>
                </FooterList>
                <FooterList>
                    <h3 className="font-bold text-base mb-2">Follow Us</h3>
                    <div className="flex gap-2">
                        <Link href={`/`}>
                            <MdFacebook size={24}/>
                        </Link>
                        <Link href={`/`}>
                            <AiFillInstagram size={24}/>
                        </Link>
                        <Link href={`/`}>
                            <FaSquareXTwitter size={24}/>
                        </Link>
                        <Link href={`/`}>
                            <AiFillYoutube size={24}/>
                        </Link>
                    </div>
                </FooterList>
            </div>

        </Container>
    </footer>
  )
}

export default Footer