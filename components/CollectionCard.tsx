import Link from "next/link";
import React from "react";
import { Collection } from "../typing";

function CollectionCard(collection: Collection) {
  return (
    <Link key={collection.id} href={`/nft/${collection.slug}`}>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img
            className="h-60 w-full object-cover"
            src={collection.details.thumbnail_url}
            alt={collection.slug}
          />
        </div>
        <div className="mt-1 p-1">
          <h2 className="text-slate-700">{collection.name}</h2>
        </div>
        <div className="mt-1 flex items-end justify-between">
          <p className="text-lg font-bold text-blue-500">
            {collection.collection_type}
          </p>
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <button className="text-sm">Collection</button>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CollectionCard;
