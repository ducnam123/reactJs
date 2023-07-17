import React from 'react';
import { Card } from 'antd';
import { IProduct } from '../models';
import { Link } from "react-router-dom"

const { Meta } = Card;

type Props = {
  data: IProduct
}

const Product = ({data}: Props) => {
    return <Link to={`product/${data.id}`} className="block rounded-lg p-4 shadow-sm shadow-indigo-100 ">

  <img
    alt="Home"
    src={data.images?.[0].base_url}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Name</dt>
        <dd className="font-medium">{data.name}</dd>
        
      </div>

      <div className="flex">
        <dt className="sr-only">Price</dt>

  <dd className="font-medium">{data.original_price}đ</dd>

        <u className="text-sm text-gray-500">{data.price}đ</u>

       
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500"></p>

          <p className="font-medium">5 bình luận</p>
        </div>
      </div>



    </div>
  </div>
</Link>

}

export default Product

