"use client";

import { useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation";
import { NAV_BUTTON_LIST } from "./const";
import Image from "next/image";
export function MainComponent() {
    const [activedKey, setActivedKey] = useState(0);
    const router = useRouter();
    const tips: string[] = useMemo(() => {
        return [
            NAV_BUTTON_LIST[activedKey].title,
            NAV_BUTTON_LIST[activedKey].description,
        ];
    }, [activedKey]);

    return (
        <main className="relative flex h-screen w-screen flex-col md:flex-row">
            {/* left */}
            <div
                style={{
                    // mixBlendMode: "multiply",
                    writingMode: "vertical-lr",
                    // 对比度反转
                    // filter: "invert(100%)",
                }}
                className="hidden h-screen  overflow-hidden text-[248px] font-black italic leading-none tracking-[-0.08em] text-[#010101] md:flex"
            >
                <MarqueeDiv>
                    <FirstLetterSpan>SOME</FirstLetterSpan>
                    <FirstLetterSpan>TOOLS</FirstLetterSpan>
                    <FirstLetterSpan>SOME</FirstLetterSpan>
                    <FirstLetterSpan>TOOLS</FirstLetterSpan>
                </MarqueeDiv>
            </div>

            {/* center */}
            <div className="relative z-50 flex flex-1 items-center justify-center">
                <div className="flex flex-col">
                    {NAV_BUTTON_LIST.map((props, index) => (
                        <NavButton
                            onClick={() => props.to && router.push(props.to!)}
                            className={index % 2 == 1 ? "ml-8" : ""}
                            onMouseEnter={() => setActivedKey(index)}
                            key={index}
                            $actived={activedKey === index}
                            $content={props.content}
                            $hover={props.hover}
                            $angle={props.angle}
                            $defaultColor={props.defaultColor}
                        >
                            {props.content}
                        </NavButton>
                    ))}
                </div>
            </div>
            {/* right */}
            <div className="relative z-10  flex w-full max-w-60 flex-col justify-end p-14 text-2xl italic text-white md:w-1/5 md:p-0">
                <div className="pb-4">
                    <p>{tips?.[0] || "unknow"}</p>
                    <div className="flex items-center text-sm">
                        <span className="mr-[2px]">Description</span>
                        <span className="inline-block h-[1px] flex-1 bg-white shadow-sm"></span>
                    </div>
                    <p className="text-base">{tips?.[1] || "unknow"}</p>
                </div>
            </div>
        </main>
    );
}

const marquee = keyframes`
 to {
		transform: translateY(min(100cqh - 100%, 0px));
	}
`;
const scale = (path: string) => keyframes<{}>`
  to {
		clip-path: polygon(${path});
	}
`;
const MarqueeDiv = styled.div`
    white-space: nowrap;
    animation: ${marquee} 30s linear infinite both alternate;
`;
const FirstLetterSpan = styled.span`
    display: inline-block;
    margin-bottom: 0.3em;
    &::first-letter {
        color: #747474 !important;
    }
`;
type NavButtonProps = {
    $angle?: number;
    $content: string;
    $actived?: boolean;
    $hover: string[];
    $defaultColor?: string;
};
const NavButton = styled.button<NavButtonProps>`
    z-index: ${(props) => `${props.$actived ? 999 : "auto"}`};
    width: auto;
    --pading: 0.4em 1.5em;
    letter-spacing: -0.08em;
    line-height: 1;
    font-weight: 900;
    font-size: 6vw;
    position: relative;
    outline: none;
    transition: all 0.3s;
    mix-blend-mode: screen;
    @media screen and (max-width: 768px) {
        font-size: 10vw;
    }
    padding: ${(props) => `${props.$actived ? "var(--pading)" : "none"}`};
    position: relative;
    transform: rotate(${(props) => props.$angle || 0}deg);
    cursor: pointer;
    font-style: italic;
    color: ${(props) =>
        `${props.$actived ? "black" : props.$defaultColor || "#00ffff"}`};

    &::after,
    &::before {
        content: ${(props) =>
            `${props.$actived ? `"${props.$content}"` : "none"}`};
        position: absolute;
        padding: var(--pading);
        line-height: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: #ff0000;
        font-style: italic;
    }

    &::after {
        clip-path: polygon(${(props) => props.$hover[0]});
        background: #fff;
        transform: translate3d(0, 0, 0);
    }
    &::before {
        clip-path: polygon(${(props) => props.$hover[1]});
        animation: ${(props) => scale(props.$hover[2])} 0.3s infinite
            alternate-reverse;
        background: #ff2bff;
    }
`;
export function VideoBGComponent() {
    const ref = useRef<HTMLVideoElement>(null);
    const VideoProps: React.VideoHTMLAttributes<HTMLVideoElement> = {
        style: { objectFit: "cover" },
        disablePictureInPicture: true,
        className: "absolute left-0 top-0 h-full w-full -z-[1]",
        preload: "auto",
        muted: true,
    };
    return (
        <div className="absolute left-0 top-0 -z-50  h-screen w-screen">
            <video {...VideoProps} ref={ref} poster="/fv.webp" loop>
                <source src="/fv_movie2.webm" type="video/webm" />
            </video>
            <video
                {...VideoProps}
                autoPlay
                onEnded={(e) => {
                    // 播放完毕隐藏
                    e.currentTarget.style.opacity = "0";
                    ref.current?.play();
                }}
            >
                <source src="/fv_movie1.webm" type="video/webm" />
            </video>
            <Image
                style={{
                    mixBlendMode: "screen",
                }}
                className="absolute left-0 top-0 -z-[0] h-full w-full"
                alt=""
                width={1920}
                height={1080}
                src="/fv.webp"
            />
        </div>
    );
}
