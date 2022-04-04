const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h4>My name is Charnice Tatum. I am a Blockchain Developer looking to help other companies build user friendly web3 applications and smart contracts.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
