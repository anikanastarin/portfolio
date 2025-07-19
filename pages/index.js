import Education from "@/components/Education";
import Header from "@/components/Header";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="" />
        <meta name="yandex-verification" content="" />

        <meta name="facebook-domain-verification" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" key="desc" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="" name="position" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="author" content="Anika Nastarin" />
        <meta name="owner" content="Anika Nastarin" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="copyright" content="Copyright © Anika Nastarin" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="msvalidate.01" content="" />
        <meta property="og:site_name" content="Anika Nastarin" />
        <meta property="og:description" content="" />
        <meta
          property="og:title"
          content="Anika Nastarin - Assistant School Teacher"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzacz6e0z/image/upload/v1752952708/website_nqn8us.png"
        />
        <meta property="fb:app_id" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:title"
          content="Anika Nastarin and an IT support engineer"
        />
        <meta
          name="twitter:description"
          content="Anika Nastarin - Assistant School Teacher"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dzacz6e0z/image/upload/v1752952708/website_nqn8us.png"
        />
        <meta
          name="keywords"
          content="Anika Nastarin - Assistant School Teacher"
        />
        <meta name="impact-site-verification" value="" />
        <link
          href="https://portfolio-blond-two-96.vercel.app"
          rel="canonical"
        />
        <meta
          content="https://portfolio-blond-two-96.vercel.app"
          property="og:url"
        />
        <meta
          content="Anika Nastarin - Assistant School Teacher"
          name="author"
        />
        <meta content="Anika Nastarin Portfolio" name="application-name" />
        <title>Anika Nastarin - Teacher</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="md:w-1/2 mx-auto min-h-screen px-10 py-5 rounded-lg shadow-2xl dark:shadow-amber-500 m-20">
        <Header />
        <Summary />
        <WorkExperience />
        <Publications />
        <Education />
        <Skills />
      </div>
    </>
  );
}
