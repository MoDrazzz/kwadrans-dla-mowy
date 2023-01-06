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
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const Home = ({ content }) => (
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
      <About contentData={content.aboutScreen} />
      <Services contentData={content.servicesScreen} />
      <Statistics contentData={content.statistics} />
      <Entries contentData={content.entriesScreen} formData={content.servicesScreen} />
      <Contact contentData={content.contactScreen} />
      <Footer contentData={content.footer} />
    </main>
  </>
);

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
    revalidate: 60,
  };
}
