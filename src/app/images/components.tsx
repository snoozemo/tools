"use client";

import { useRef } from "react";
export function Conversion() {
    // 将图片转换成选择的格式
    const fileRef = useRef<HTMLInputElement>(null);
    const toRef = useRef<HTMLSelectElement>(null);
    const convert = async () => {
        // 使用 canvas 转换图片格式并下载
        const file = fileRef.current?.files?.[0];
        const to = toRef.current?.value;
        if (!file) {
            return;
        }
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0, img.width, img.height);
            // 转换为 toRef 所选格式
            const blob = canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob!);
                const a = document.createElement("a");
                a.href = url;
                a.download = file.name.replace(/\.[^/.]+$/, "") + "." + to;
                a.click();
                URL.revokeObjectURL(url);
            });
        };
    };
    return (
        <div className="text-white">
            {/* input 图片格式的选择 如何限制选择文件的格式 */}
            <input ref={fileRef} type="file" accept="image/*" name="" id="" />
            {/* output 图片格式的选择 */}
            to
            <select ref={toRef} className="text-black" name="" id="">
                <option selected value="png">
                    image/png
                </option>
                <option value="jpeg">image/jpeg</option>
                <option value="gif">image/gif</option>
                <option value="webp">image/webp</option>
                <option value="apng">image/apng</option>
                <option value="ico">image/ico</option>
            </select>
            <button
                onClick={convert}
                className="ml-4 rounded-sm border bg-white p-1 px-3 text-black"
            >
                转换
            </button>
        </div>
    );
}
