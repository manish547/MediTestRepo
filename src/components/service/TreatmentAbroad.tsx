import React from "react";
import Image from "next/image";
import Hero from "../common/Hero";
import PatientsSeeking from "./PatientsSeeking";
import RemoteConsultant from "./RemoteConsultant";
import WhyChooseMedii from "./WhyChooseMedii";
import MedicalTravelService from "./MedicalTravelService";
import ContactSection from "../common/ContactSection";
import WhyUk from "./WhyUk";

function TreatmentAbroad() {
  return (
    <div>
      <Hero
        image="contact-hero"
        title="TREATMENT ABROARD"
        description="Enjoy the hospitality of our local bilingual service team, bringing you the warmth and familiarity of home with an exceptional standard of attention and care"
        isNavigator={false}
        isDark={true}
        isPricing={true}
      />

      <div className="container mx-auto my-6">
        <PatientsSeeking />
      </div>
      <div className="relative">
        <Image
          src="/images/patients-seeking/blob.svg"
          height="100"
          width="100"
          alt="blob"
          className="absolute w-full top-[25rem] sm:top-36 md:top-80 lg:top-48 xl:top-3 2xl:-top-20  -z-10"
        />
        <div className="container mx-auto my-6">
          <RemoteConsultant />
        </div>
        <div className="relative">
          <Image
            src="/images/icons/why-uk-blob.svg"
            height="100"
            width="250"
            alt="blob"
            className="absolute h-full left-0 top-0 -z-10"
          />
          <div className="md:container mx-auto mt-6 mb-16 px-3 sm:px-0">
            <WhyUk />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/icons/why-medi-blob.svg"
            height="100"
            width="250"
            alt="blob"
            className="absolute h-full right-0 top-0 -z-10"
          />
          <div className="container mx-auto mt-6 ">
            <WhyChooseMedii />
          </div>
        </div>
        <div className="container mx-auto mt-6 px-3 sm:px-0">
          <MedicalTravelService />
        </div>
        <div className="container mx-auto my-6 px-3 sm:px-0">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default TreatmentAbroad;
