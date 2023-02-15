import Link from "next/link";
import React from "react";
import { Asset } from "../typing";

function AssetCard(asset: Asset) {
  
  const formatDate = new Date(asset.mint_date).toLocaleDateString();

  return (
    <Link key={asset.id} href="#">
      <article
        className="rounded-xl p-3 shadow-lg bg-white hover:shadow-xl hover:transform hover:scale-105 duration-300"
        title={formatDate}
      >
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img
            className="h-60 w-full object-cover"
            src={asset.img_url}
            alt={asset.chain}
          />
        </div>
        <div className="mt-1 p-1 flex justify-end">
          <h2 className="text-slate-700">{formatDate}</h2>
        </div>
        <div className="mt-2 flex items-end justify-between">
          {asset.last_sale_price ? (
            <p className="text-md font-bold text-blue-500">
              {asset.last_sale_currency} {asset.last_sale_price}
            </p>
          ) : (
            <p className="text-md font-bold text-green-500">Not Sold</p>
          )}
          <span className="text-md">{asset.chain}</span>
        </div>
      </article>
    </Link>
  );
}

export default AssetCard;
