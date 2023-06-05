import Image from "next/image"

export const HeaderBg = () => {
    return (
        <figure>
            <Image src={`/background-with-gradient.webp`} alt='todo background' width={1920} height={600} className='w-full h-52 lg:h-96 2xl:h-[28rem] object-cover object-top' priority />
        </figure>
    )
}