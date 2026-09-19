import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import TrustBar from "../components/TrustBar";
import ProblemSection from "../sections/ProblemSection";
import BenefitsSection from "../sections/BenefitsSection";
import ProductSelector from "../sections/ProductSelector";
import OrderSection from "../sections/OrderSection";
import FounderSection from "../sections/FounderSection";
import WhyParentsLove from "../sections/WhyParentsLove";
import FAQSection from "../sections/FAQSection";
import FinalOffer from "../sections/FinalOffer";
import Footer from "../components/Footer";
import TestimonialSection from "../sections/TestimonialSection";
import Orders from "../sections/Orders";
import HowItWorks from "../sections/HowItWorks";
import CollectionShowcase from "../sections/CollectionShowCase";
import UrgencySection from "../sections/UrgencySection";

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Navbar />

      <main>
        <Hero />

        <TrustBar />

        <TestimonialSection />

        <OrderSection />

        <ProblemSection />

        <ProductSelector />

        <BenefitsSection />

        <HowItWorks />

        <CollectionShowcase />

        <WhyParentsLove />

        <Orders />

        <FounderSection />

        <FAQSection />

        <FinalOffer />
        
        <UrgencySection />
      </main>

      <Footer />
    </div>
  );
};

export default OrderPage;