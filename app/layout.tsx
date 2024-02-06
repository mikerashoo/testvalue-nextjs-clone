import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd'; 
import theme from "@/theme/themeConfig";
 

// Import css files
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testvalley clone",
  description: "Developed by Mikiyas Birhanu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={theme}>
    <html lang="en">
      <body><AntdRegistry>{children}</AntdRegistry></body>
    </html>
    </ConfigProvider>
  );
}
 