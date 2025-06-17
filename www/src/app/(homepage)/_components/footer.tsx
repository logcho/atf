import Image from "next/image"
export default function Footer(){
    return (
        <footer className="flex flex-col items-center justify-center bg-black h-80 w-full">
            <Image
                src="/images/atf_logo.png"
                alt="logo"
                height={200} // smaller on mobile
                width={200}
                className="object-contain" // bigger on md+
            />
        </footer>
    )
}