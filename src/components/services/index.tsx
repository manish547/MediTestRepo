import React from "react";
import Image from "next/image";

import HealthScreeningTabBar from "./HealthScreeningTabBar";
import ServiceQualification from "./ServiceQualification";
import HealthScreening from "../home/HealthScreening";
import AdsPoster from "./AdsPoster";
import Hero from "../common/Hero";
import FAQ from "./FAQ";

function ServicePage() {
  return (
    <div>
      <Hero
        image="services-hero-poster"
        title="Book Your Health Screening"
        description=" We deliver quality healthcare service in clinics and at your doorstep"
        isNavigator={true}
        isDark={false}
        isPricing={true}
      />
      <div className="container px-3 mx-auto sm:px-0">
        <HealthScreening />
      </div>
      <div className="relative px-3 sm:px-0">
        <Image
          src="/images/services/health-screening-tab-blob.svg"
          height="300"
          width="240"
          alt="line-shape"
          className="absolute left-0 inline-block -z-20 top-1/3"
        />
        <div className="md:container z-30 px-3 mx-auto sm:px-0">
          <HealthScreeningTabBar />
        </div>
      </div>
      <div className="md:container px-3 xs:px-8 md:px-3 mx-auto my-2 sm:px-0">
        <AdsPoster />
      </div>
      <div className="md:container px-3 mx-auto my-2 sm:px-0">
        <ServiceQualification />
      </div>
      <div className="md:container px-3 mx-auto my-5 sm:px-0">
        <FAQ />
      </div>
    </div>
  );
}

export default ServicePage;
