import { ICollectionItem } from "@/models/collection_types";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SingleProduct(props: { item: ICollectionItem }) {
  const item = props.item;
  const publication = item.publication;
  const priceInfo = publication.priceInfo;
  return (
    <Link href={process.env.NEXT_PUBLIC_API_URL ?? ''} className="flex flex-col gap-2 flex-wrap cursor-pointer">
      <div className="relative w-44 h-44">
        <Image src={publication.media[0].uri} alt={publication.title} fill />
        <div className="absolute left-0 bottom-0 w-fit text-center flex justify-center items-center gap-2 text-xs h-fit bg-green-700 text-white p-1">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.51758 5.8005C6.86529 5.06262 7.85506 3.84331 8.48691 2.14258C9.38558 3.07652 9.52518 4.05833 8.9057 5.08803C8.28623 6.11772 7.15685 6.35521 5.51758 5.8005Z"
              fill="#B3E4DC"
            />
            <path
              d="M0.758032 4.01976L2.39715 8.01003L2.51732 8.154C2.67454 8.26256 2.88629 8.21966 2.99028 8.05818L3.57949 7.10477C6.45332 7.60582 9.25924 5.85012 9.28627 3.81066C7.68582 4.88134 6.3503 5.35081 4.91925 4.9369L5.55977 3.90045C5.60045 3.83729 5.62012 3.76209 5.61584 3.68608C5.60491 3.49175 5.44349 3.34219 5.25531 3.35202L1.0467 3.51949C0.677455 3.51961 0.677353 3.84328 0.758032 4.01976Z"
              fill="white"
            />
          </svg>
          리턴 가능
        </div>
      </div>

      <div className="font-light text-md w-44">{publication.title}</div>

      <div className="text-lg font-medium">
        {priceInfo.discountRate && priceInfo.discountRate > 0 && <span className="text-red-600">{priceInfo.discountRate}%</span>}
       {priceInfo.discountPrice}
      </div>

      <div className="text-xs">
        <StarFilled /> {publication.rating}
      </div>
    </Link>
  );
  return (
    <div className="css-1uikien">
      <div className="css-1489hrt">
        <div typeof="m" className="css-n9g88t">
          <div className="css-0">
            <div typeof="m" className="css-1drsoe3">
              <img src="/common/return-new.svg" alt="" />
              리턴 가능
            </div>
          </div>
          <div typeof="m" className="css-tdbqpt"></div>
        </div>
        <div className="css-fc8ze7">
          <img
            src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/0f8c33e8-d474-44f7-9fa6-7d15e6a96bd0.jpeg"
            data-src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/0f8c33e8-d474-44f7-9fa6-7d15e6a96bd0.jpeg"
            className="css-17k8yqf"
          />
        </div>
      </div>
      <div className="css-hljoma">브리츠 BA-R9 SoundBar</div>
      <div className="css-1nc1eyv">
        <span>47%</span>15,900
      </div>
      <div className="css-1olijnw">
        <div className="css-1s4vgyd">
          <div className="css-1wbq61a">깜짝할인</div>
        </div>
        <div className="css-10fjvtr">
          <div className="css-ov1ktg">
            <img
              src="/star/star-darkgray.svg"
              alt="별점"
              width="12px"
              height="12px"
            />
            4.5
          </div>
        </div>
      </div>
      <div className="css-1tnlfr6">
        <img
          src="https://prod-testvalley.s3.ap-northeast-2.amazonaws.com/static/preface_icon/delivery.png"
          alt=""
        />
        한정특가
      </div>
    </div>
  );
}

export default SingleProduct;
