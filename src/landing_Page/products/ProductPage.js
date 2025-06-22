import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
// import Navbar from '../Navbar';
// import Footer from '../Footer';
function ProductPage() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
       
      <LeftSection
        imageURL="media/images/Weather-App.png"
        productName="Weather Application"
        productDescription=" At Xenova, we're not just building a trading platform — we're building other applications like 
        Web Weather Application. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection  imageURL="media/images/Facial_Recog.png"
        productName="Facial Recognition Using Machine Learning"
        productDescription="Our intelligent system leverages advanced machine learning algorithms to identify and authenticate users through facial data — ensuring enhanced security and seamless access to your trading dashboard.. "
        learnMore="" />
      <LeftSection
        imageURL="media/images/trading5.webp"
        productName="Xenova Power"
        productDescription="At Xenova, we’re not just building a trading app — we’re shaping a full-scale ecosystem that defines the future of investing. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection  imageURL="media/images/landing.svg"
        productName="Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.. "
        learnMore=""/>
      <LeftSection
        imageURL="media/images/trading6.jpg"
        productName="Xenova Mobile"
        productDescription="At Xenova, our vision goes beyond trading — we’re creating a comprehensive ecosystem to empower the next generation of investors.. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <>
      <div  style={{textAlign:"center"}} className="container mb-5">
      <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      </>
      <Universe />
      {/* <Footer/> */}
    </>
  );
}

export default ProductPage;
