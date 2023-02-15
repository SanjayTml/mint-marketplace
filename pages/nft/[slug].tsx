import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Account, Asset, Collection } from "../../typing";
import { supabase } from "../../supabase";
import AssetCard from "../../components/AssetCard";

interface Props {
  thisCollection: Collection;
  assets: [Asset];
  account: Account;
}

function Collection({ thisCollection, assets, account }: Props) {
  console.log("Current slug");
  console.log(thisCollection, assets);

  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="bg-gray-100">
      <Header />
      {thisCollection ? (
        <>
          <img
            className="w-full h-40 object-cover"
            src={thisCollection.details.banner_url}
            alt="post-image"
          />
          <section className="max-w-6xl mx-auto p-4">
            <h2 className="font-light text-gray-500">Collections/{slug}</h2>
            <div className="flex justify-between">
              <h1 className="text-3xl mb-3">{thisCollection.name}</h1>
              <p>{account.address}</p>
            </div>
            <p className="text-md font-light text-gray-700">
              {thisCollection.details.description}
            </p>
          </section>

          {/* NFTs */}
          <section className="my-4">
            {assets ? (
              <div className="flex justify-between">
                <h1 className="text-1xl"></h1>
              </div>
            ) : (
              <div className="mt-10 flex justify-center items-center">
                <p className="text-2xl">Couldn't retrieve NFTs info.</p>
              </div>
            )}

            <div className="mx-auto border-t grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {assets?.map((asset) => (
                <AssetCard {...asset}/>
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-center">
          <p>Couldn't retrieve collection info.</p>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Collection;

//Server side rendering of the assets
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const currentCollection = await supabase
    .from("collections")
    .select()
    .eq("slug", params?.slug)
    .limit(1)
    .single();

  const thisCollection = currentCollection.data;
  const relatedAssets = await supabase
    .from("assets")
    .select()
    .eq("collection_id", thisCollection?.id);

  const assets = relatedAssets.data;

  const relAccount = await supabase
    .from("accounts")
    .select()
    .eq("id", assets?.[0].owner_id)
    .single();

  const account = relAccount.data;
  console.log("Account", account);

  return {
    props: {
      thisCollection,
      assets,
      account,
    },
  };
};
