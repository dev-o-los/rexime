import Hero03 from "@/components/hero-03/hero-03";
import Banner from "@/components/home/Banner";
import CircularGallery from "@/components/home/CircularGallery";
import Faq from "@/components/home/faq";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import LiquidEther from "@/components/home/LiquidEther";
import LogoCloudNew from "@/components/logos-07/LogoCloudNew";

export default async function Home() {
  return (
    <div>
      <div className="h-screen w-full relative">
        <Banner />
        <Hero03 />
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <LogoCloudNew />
      <div style={{ height: "600px", position: "relative" }} className="mb-52">
        <CircularGallery
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}
