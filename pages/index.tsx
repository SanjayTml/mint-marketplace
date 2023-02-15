import Head from "next/head";

import { supabase } from "../supabase"; // Imports Supabase client for interacting with Supabase API
import { Asset, Collection } from "../typing";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CollectionCard from "../components/CollectionCard";
import AssetCard from "../components/AssetCard";

interface Props {
  collections: [Collection];
  assets: [Asset];
}

export default function Home({ collections, assets }: Props) {
  const [nftCollections, setNFTCollections] = useState(collections);
  const [nftAssets, setNFTAssets] = useState(assets);
  const [filter, setFilter] = useState("");

  // Fetches all data from collections table in Supabase database
  async function fetchCollection() {
    const { data, error } = await supabase.from("collections").select();
    console.log(error);
    setNFTCollections(data);
  }

  // Fetches all data from assets table in Supabase database
  async function fetchAssets() {
    const { data, error } = await supabase.from("assets").select();
    console.log(error);
    setNFTAssets(data);
  }

  async function filterCollection(name: string) {
    let filterTitle = `%${name}%`;
    const collection = await supabase
      .from("collections")
      .select()
      .or(
        `name.ilike.${filterTitle},slug.ilike.${filterTitle},collection_type.ilike.${filterTitle}`
      ); // Filters collections table in Supabase database by name, slug, and collection_type using ilike operator (case insensitive)

    const asset = await supabase
      .from("assets")
      .select()
      .or(
        `name.ilike.${filterTitle},details.ilike.${filterTitle},chain.ilike.${filterTitle}`
      ); // Filters assets table in Supabase database by name, details, and chain using ilike operator (case insensitive)

    setNFTCollections(collection.data);
    setNFTAssets(asset.data);
  }

  //Fetch all data for home page initially
  useEffect(() => {
    fetchCollection();
    fetchAssets();
  }, []);

  const handleType = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const filter = event.target.filter.value;
    filterCollection(filter);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex min-h-screen flex-col max-w-7xl mx-auto items-center justify-center py-2">
        <Head>
          <title>Mint Marketplace</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="pt-14 items-center">
          <h1 className="text-center text-3xl font-bold text-gray-800">
            <span className="text-blue-600">Mint</span> Marketplace
          </h1>
          <h2 className="text-center"> The open collection of NFTs. </h2>
        </div>
        <div className="container pt-8 px-20 mx-auto">
          <form onSubmit={handleSubmit} className="rounded-lg p-4 shadow-md">
            <div className="mb-1 items-center sm:block lg:flex">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 p-2 focus:outline-gray-400"
                placeholder="Search ..."
                name="filter"
              />
              <select
                name="type"
                id="type"
                className="rounded-lg border lg:ml-1 p-2 border-gray-200 focus:outline-gray-400"
                onChange={handleType}
              >
                <option value="">Type</option>
                <option value="collections">Collection</option>
                <option value="assets">Asset</option>
              </select>
              <button
                type="submit"
                className="ml-2 sm:mt-2 lg:mt-0 rounded-lg bg-blue-500 p-2 px-4 text-white hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* NFTs */}
        <section className="py-5 my-10 border-t">
          {nftCollections || nftAssets ? (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filter == "assets" ? (
                <></>
              ) : (
                <>
                  {nftCollections?.map((collection) => (
                    <CollectionCard {...collection} />
                  ))}
                </>
              )}
              {filter == "collections" ? (
                <></>
              ) : (
                <>
                  {nftAssets?.map((asset) => (
                    <AssetCard {...asset} />
                  ))}
                </>
              )}
            </div>
          ) : (
            <div className="mt-10 flex justify-center items-center">
              <p className="text-2xl">
                No data obtained from database.
              </p>
            </div>
          )}
        </section>

        <Footer />
      </div>
    </div>
  );
}
