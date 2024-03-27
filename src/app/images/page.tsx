import Image from "next/image";
import { Conversion } from "./components";
export default function ImagesPage() {
    return (
        <div className="relative flex h-full w-full flex-col items-center  overflow-hidden bg-gradient-to-b from-[#00f7] to-[#000000]">
            <div className="relative z-[99] mt-32 text-[20px]">
                <div className="rounded-[40px] bg-[#1e2339] text-white">
                    <input
                        className="h-0 w-0 opacity-0"
                        type="radio"
                        name="item"
                        id="conversion"
                    />
                    <label
                        className="inline-block px-8 py-1 text-3xl uppercase italic"
                        htmlFor="conversion"
                    >
                        conversion
                    </label>
                    <input
                        className="h-0 w-0 opacity-0"
                        type="radio"
                        name="item"
                        id="conversion"
                    />
                    <label
                        className="inline-block px-8 py-1 text-3xl uppercase italic"
                        htmlFor="unknow1"
                    >
                        unknow
                    </label>
                    <input
                        className="h-0 w-0 opacity-0"
                        type="radio"
                        name="item"
                        id="conversion"
                    />
                    <label
                        className="inline-block px-8 py-1 text-3xl uppercase italic"
                        htmlFor="unknow2"
                    >
                        unknow
                    </label>
                </div>
            </div>
            <div className="z-[99]  mt-5">
                <Conversion />
            </div>
            <BackgroundComponent />
        </div>
    );
}

function BackgroundComponent() {
    return (
        <>
            <div
                style={{
                    clipPath:
                        "polygon(0 0, calc(100vw - 30vh) 0, 100% 30vh, calc(100vw - 70vh) 100% ,0 100%)",
                    // "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
                }}
                className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#0a1042]  to-[#0a1042bb] font-black text-[#B9BABA]"
            >
                <span className="absolute right-0 top-0 z-[10] inline-block origin-top-right -rotate-45 pr-[12vw]   text-[30vh] leading-[0.75] -tracking-widest">
                    {"IT'SIMAGES"}
                </span>
                <div
                    className="absolute left-0 top-0  z-[9] h-full w-full "
                    style={{
                        backgroundImage:
                            "linear-gradient(to right bottom, #032077 15%, #0725CB 20%)",
                        clipPath: "polygon(0 0, 50vh 0, 55vh 5vh , 0 60vh)",
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
        </>
    );
}
