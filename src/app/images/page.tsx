import Image from "next/image";
export default function ImagesPage() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#00f7] to-[#000000]">
            <div
                style={{
                    clipPath:
                        "polygon(0 0, calc(100vw - 30vh) 0, 100% 30vh, calc(100vw - 70vh) 100% ,0 100%)",
                    // "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
                }}
                className="relative h-full w-full bg-gradient-to-br from-[#0a1042]  to-[#0a1042bb] font-black text-[#B9BABA]"
            >
                <span className="absolute right-0 top-0 z-[10] inline-block origin-top-right -rotate-45 pr-[12vw]   text-[30vh] leading-[0.75] -tracking-widest">
                    {"IT'SIMAGES"}
                </span>
                <div
                    className="absolute left-0 top-0  z-[9] h-full w-full bg-[#01076D]"
                    style={{
                        backgroundImage:
                            "linear-gradient(right bottom, #0008 10%, #131dd4 100%)",
                        // clipPath: "polygon(0 0, 50vh 0, 55vh 5vh , 0 60vh)",
                    }}
                ></div>
                <div
                    className="absolute left-0 top-0  z-10 h-full w-full bg-white opacity-95"
                    style={{
                        clipPath: "polygon(0 0, 40vh 0, 0 40vh)",
                    }}
                ></div>
            </div>
            <Image
                style={{
                    mixBlendMode: "screen",
                }}
                className="absolute -right-[20vw] top-0 z-[11]  h-full w-full rotate-180"
                alt=""
                width={1920}
                height={1080}
                src="/fv.webp"
            />
            <Image
                style={{
                    filter: "invert(100%)",
                    mixBlendMode: "screen",
                }}
                className="absolute left-[-20vw] top-12 z-10 "
                alt=""
                width={1920}
                height={1080}
                src="/fv.webp"
            />
        </div>
    );
}
