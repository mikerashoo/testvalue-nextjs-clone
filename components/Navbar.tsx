import {
  BellOutlined,
  DownloadOutlined,
  MenuOutlined,
  NotificationOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Divider, Input } from "antd";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex md:hidden gap-4 flex-row justify-between items-center py-4 px-4 border-b">
        <Image
          height={36}
          width={125}
          src={"/logo-mobile-new.svg"}
          alt="logo"
        />
        <div className="text-2xl flex gap-4">
          <BellOutlined /> <SearchOutlined  />
        </div>
      </div>
      <div className="hidden md:flex gap-4 flex-row justify-center items-center py-4 border-b">
        <Image height={36} width={100} src={"/logo-new.svg"} alt="logo" />
        <p className="primary text-primary" typeof="primary">
          <MenuOutlined /> 카테고리
        </p>
        <div className="w-96 flex mx-16">
          <Input
            placeholder="살까말까 고민된다면 검색해보세요!"
            size={"large"}
            prefix={<SearchOutlined />}
          />
        </div>

        <div className="flex h-fit flex-row justify-center items-center">
          <Image width={32} height={32} src="/home-event.svg" alt="Home Event Image" />
          <p className="border-l-2 border-l-slate-400 ml-2 px-2 ">
            로그인 / 회원가입
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
