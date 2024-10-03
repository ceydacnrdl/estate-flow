import AboutCard from "@/components/AboutCard";
import Banner from "@/components/Banner";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ContactInfo />
      <AboutCard />
      <Gallery />
      <Footer />
    </div>
  );
}
