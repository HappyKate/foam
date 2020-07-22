import React from "react";
import Head from "next/head";

const title = "ППУ в г. Тобольске";
const desc = "ППУ в г. Тобольске";
const App = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="Description" content={desc} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="#" />
    </Head>
  );
};
export default App;
