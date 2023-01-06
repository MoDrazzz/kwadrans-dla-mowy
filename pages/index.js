import Navigation from 'components/organisms/Navigation/Navigation';
import Head from 'next/head';
import Hero from 'components/organisms/Hero/Hero';
import About from 'components/organisms/About/About';
import Services from 'components/organisms/Services/Services';
import Statistics from 'components/organisms/Statistics/Statistics';
import Entries from 'components/organisms/Entries/Entries';
import Contact from 'components/organisms/Contact/Contact';
import Footer from 'components/organisms/Footer/Footer';
import { createClient } from 'contentful';

const client = createClient({
  space: 'b1212y5qc9na',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'AH1cQLwJtd5Bld11NR1O9SBlL6fR-5iBRtvYPz4gmhA',
});

const Home = ({ content }) => {
  return (
    <>
      <Head>
        <title>Kwadrans dla mowy | Pracownia neurologopedyczno-lingwistyczna</title>
        <meta name="description" content="Kwadrans dla mowy - pracownia neurologopedyczno-lingwistyczna założona w 2023 roku. Zofia Lisiecka." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <Hero contentData={content.heroScreen} />
        <About />
        <Services />
        <Statistics />
        <Entries />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const contentTypes = await client.getEntries();

  const content = contentTypes.items.reduce((obj, item) => {
    return Object.assign(obj, {
      [item.sys.contentType.sys.id]: item.fields,
    });
  }, {});

  return {
    props: {
      content,
    },
  };
}
