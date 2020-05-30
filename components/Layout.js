import Head from "next/head";
import layout from "../components/layout.module.css";
import Link from "next/link";

export const siteTitle = "Form";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>{siteTitle} - Code Nuggets</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Code Nuggets" content="React &" />
        <meta
          property="og:image"
          content={`https://cl.ly/5f610f7cd882/download/Screen%252520Shot%2525202020-05-20%252520at%25252010.37.11%252520AM.png/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https://cl.ly/5f610f7cd882/download/Screen%252520Shot%2525202020-05-20%252520at%25252010.37.11%252520AM.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <body>{children}</body>
    </div>
  );
}
