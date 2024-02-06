import { Button, Image } from 'antd'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-primary text-purple-800 text-2xl'>{process.env.NEXT_PUBLIC_API_URL}
    <Button type="primary">Button</Button>
    <Image
    width={200}
    height={200}
    className='object-fill'
    src="https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1704879436539-%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_PC_%EA%B8%B0%EB%B3%B8_PC%EA%B8%B0%EA%B8%B0%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%AA%A8%EC%9D%8C%EC%A0%84.png"
  />

    </div>
  )
}
