"use client";

import { HTMLProps, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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
export const LeftDiv = styled.div`
    writing-mode: vertical-lr;
    height: 100vh;
    overflow: hidden;
    font-size: 248px;
    font-weight: 900;
    letter-spacing: -0.08em;
    color: #010101;
    line-height: 1;
    font-style: italic;
    display: flex;
    @media screen and (max-width: 768px) {
        display: none;
    }
    & > p {
        white-space: nowrap;
        animation: ${marquee} 30s linear infinite both alternate;
    }
    & span {
        display: inline-block;
        margin-bottom: 0.3em;
    }
    & span::first-letter {
        color: #747474 !important;
    }
`;
const CenterDiv = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    & > div {
        display: flex;
        flex-direction: column;
        & > * {
            transition: all 0.3s;
        }
    }
    @media screen and (max-width: 768px) {
        main:has(&) {
            flex-direction: column;
        }
    }
`;
const NavButton = styled.button<{
    $angle?: number;
    $content: string;
    $actived?: boolean;
    $hover: string[];
    $defaultColor?: string;
}>`
    z-index: ${(props) => `${props.$actived ? 999 : "auto"}`};
    width: auto;
    --pading: 0.4em 1.5em;
    letter-spacing: -0.08em;
    line-height: 1;
    font-weight: 900;
    font-size: 6vw;
    position: relative;
    outline: none;
    @media screen and (max-width: 768px) {
        font-size: 10vw;
    }
    padding: ${(props) => `${props.$actived ? "var(--pading)" : "none"}`};
    position: relative;
    /* transform-origin: 0% 50%; */
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
const RightDiv = styled.div`
    width: 20%;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: #fff;
    font-size: 24px;
    font-style: italic;
    position: relative;
    z-index: 11;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 16px;
    }
    & * {
        text-shadow: 0.1em 0.1em 0.1em #000;
    }
`;

export function LeftComponent({ children }: HTMLProps<HTMLDivElement>) {
    return (
        <LeftDiv>
            <p>{children}</p>
        </LeftDiv>
    );
}

export function CenterComponent(props: { setTips?: (arg: string[]) => void }) {
    const { setTips } = props;
    const [activedKey, setActivedKey] = useState(0);

    const navButtons = [
        {
            content: "IMAGES",
            angle: -10,
            title: "图片处理",
            description: "转换图片格式等小功能",
            hover: [
                "5% 25%, 95% 0, 70% 85%",
                "2% 15%, 98% 5%, 71% 90%",
                "0% 17%, 100% 3%, 73% 92%",
            ],
        },
        {
            content: "REPOSITORY",
            angle: 5,
            title: "仓库",
            description: "跳转到代码仓库",
            defaultColor: "#fffe",
            hover: [
                "5% 55%, 95% 0%, 80% 82%",
                "5% 45%, 98% 5%, 80% 85%",
                "3% 47%, 100% 3%, 82% 87%",
            ],
        },
        {
            content: "UNKONW",
            angle: -8,
            title: "未知",
            description: "未知",
            hover: [
                "5% 25%, 95% 0, 75% 85%",
                "4% 23%, 98% 5%, 76% 90%",
                "2% 25%, 100% 3%, 78% 92%",
            ],
        },
        {
            content: "UNKONW",
            angle: 5,
            title: "未知",
            description: "未知",
            defaultColor: "#fffe",
            hover: [
                "5% 40%, 95% 20%, 75% 85%",
                "3% 35%, 97% 18%, 73% 83%",
                "1% 37%, 99% 16%, 75% 85%",
            ],
        },
        {
            content: "UNKONW",
            angle: -8,
            title: "未知",
            description: "未知",
            hover: [
                "5% 39%, 95% 32%, 75% 93%",
                "3% 34%, 97% 37%, 75% 98%",
                "1% 36%, 99% 35%, 77% 100%",
            ],
        },
    ];

    return (
        <CenterDiv>
            <div>
                {navButtons.map((props, index) => (
                    <NavButton
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
        </CenterDiv>
    );
}

export function RightComponent(props: { tips: string[] }) {
    const { tips } = props;
    return (
        <RightDiv>
            <div className="pb-4">
                <p>{tips?.[0] || "unknow"}</p>
                <div className="flex items-center text-sm">
                    <span className="mr-[2px]">Description</span>
                    <span className="inline-block h-[1px] flex-1 bg-white shadow-sm"></span>
                </div>
                <p className="text-base">{tips?.[1] || "unknow"}</p>
            </div>
        </RightDiv>
    );
}

export function MainComponent() {
    const [tips, setTips] = useState<string[]>([]);
    useEffect(() => {
        console.log(tips);
    }, [tips]);
    return (
        <main className="relative flex h-screen w-screen bg-[#0E53BB] ">
            <div className="absolute left-0 top-0 h-screen w-screen bg-[#0E53BB]">
                <video
                    style={{ objectFit: "cover" }}
                    disablePictureInPicture
                    autoPlay
                    className="absolute left-0 top-0 h-full w-full bg-[#0E53BB]"
                    preload="auto"
                    loop
                    muted
                >
                    <source src="/fv_movie2.mp4" type="video/mp4" />
                </video>
                <video
                    onEnded={(e) => {
                        // 播放完毕隐藏
                        e.currentTarget.style.opacity = "0";
                    }}
                    style={{ objectFit: "cover" }}
                    className="absolute left-0 top-0 h-full w-full bg-[#0E53BB] transition-all"
                    preload="auto"
                    disablePictureInPicture
                    autoPlay
                    muted
                >
                    <source src="/fv_movie1.mp4" type="video/mp4" />
                </video>
            </div>
            <LeftComponent>
                <span>SOME</span>
                <span>TOOLS</span>
                <span>SOME</span>
                <span>TOOLS</span>
            </LeftComponent>
            <CenterComponent setTips={setTips} />
            <RightComponent tips={tips} />
        </main>
    );
}
