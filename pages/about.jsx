const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h4>My name is Charnice Tatum. I am a Blockchain Engineer looking to help other companies build user friendly applications and smart contracts.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
