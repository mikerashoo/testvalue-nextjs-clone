import { IMainShorticut } from '@/models/main_shortuct'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ShortcutLink(props: {shortcutData: IMainShorticut}) {
    const shortcutData = props.shortcutData
 
  return (
    <Link href={shortcutData.linkUrl} className='flex flex-col gap-2 justify-center items-center'>
        <div className='relative w-12 md:w-16 h-12 md:h-16'>
        <Image fill alt={shortcutData.title} className='object-contain' src={shortcutData.imageUrl} />

        </div>

        <p className='text-xs md:text-sm'>{shortcutData.title}</p>
    </Link>
  )
}

export default ShortcutLink