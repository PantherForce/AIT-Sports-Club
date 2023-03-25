import Head from "next/head";
import { useRouter } from "next/router";


const DOMAIN = "";


export default function Meta({
  title = "Ait Sports club",
  description = "Ait sports club website",
  image = ``,
}: {
  title?: string;
  description?: string;
  image?: string;
  }) {
  
   const router = useRouter();

   let routeName = router.pathname.substr(1);
   if (routeName.length === 0) {
     routeName = "Home";
   }
  

  return (
    <Head>
      <title>{`${routeName} | Ait`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@steventey" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
      />
    </Head>
  );
}
