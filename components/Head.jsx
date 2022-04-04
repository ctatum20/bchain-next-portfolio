import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Charnice Tatum is an avid blockchain developer building web3 applications and smart contracts you'd love to use"
      />
      <meta
        name="keywords"
        content="charnice, charnice tatum, tatum, web developer, blockchain developer, charnice blockchain developer, charnice web developer, charnice developer, mern stack, charnice portfolio"
      />
      <meta property="og:title" content="Charnice Tatum's Portfolio" />
      <meta
        property="og:description"
        content="A blockchain developer building web3 applications and smart contracts that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Charnice Tatum',
};
