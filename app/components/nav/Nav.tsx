import Link from "next/link"
import Container from "../container/Container"
// import Image from "next/image"


const Nav = () => {
  return (
    <nav className="sticky top-0 w-full  bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 z-30 shadow-sm py-4 ">
        <div className="">
            <Container>
                <div className="flex items-center justify-between gap-3 md-gap-0">
                    <Link href={`/`} className="font-bold text-2xl">
                        {/* <Image src={`/logo.png`} alt='logo img' width={200} height={10} /> */}
                        Habibi
                    </Link>
                    <div className="hidden md:block">Search</div>
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>CartCount</div>
                        <div>UserMenu</div>
                    </div>
                </div>
            </Container>
        </div>
    </nav>
  )
}

export default Nav