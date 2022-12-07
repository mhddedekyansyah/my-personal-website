import Head from 'next/head';
import Image from 'next/image';
import BottomNavBar from '../components/bottomNavBar';
import Header from '../components/header';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';
import * as Scroll from 'react-scroll';
import About from '../components/about';
import Skills from '../components/skills';
export default function Home() {
  let scroll = Scroll.animateScroll;

  let handleScrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Head>
        <title>Dedek Yansyah</title>
        <meta name="description" content="Mhd Dedek Yansyah" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </Head>

      <div className="container mx-auto max-w-6xl">
        <Header />
        <Hero />
        <About />
        <Skills />
      </div>
      <BottomNavBar />
      <button className="bottom-24 fixed right-8 bg-primary rounded-md py-3 px-4 shadow-xl" onClick={handleScrollToTop}>
        <i className="uil uil-angle-up text-white"></i>
      </button>
    </>
  );
}
