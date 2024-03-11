import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { VideoBGComponent } from "./components";

export const metadata: Metadata = {
    title: "::Tools::",
    description: "some tools",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh">
            <body className="relative h-screen w-screen">
                <VideoBGComponent />
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
