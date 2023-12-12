import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import IndividualServicePage from "@/components/service";
import FemaleHealth from "@/components/service/FemaleHealth";
import MalesHealth from "@/components/service/MalesHealth";
import MenWomenhealth from "@/components/service/MenWomenhealth";
import EnrolmentHealth from "@/components/service/EnrolmentHealth";
import HealthCheck from "@/components/service/HealthCheck";
import CancerScreening from "@/components/service/CancerScreening";
import { pageContentData } from "@/api/PageContentApi";
import HealthScreening from "@/components/service/HealthScreening";

interface Props {
  serviceName: string;
  response: any
}

interface PageProps {
  response: any; // Replace 'any' with the actual type of your response data
}

function ServicePage({ serviceName, response }: Props) {
  console.log(serviceName);
  console.log(response);

  return (
    <main>
      {serviceName === "female-health-check" ? <FemaleHealth siteData={response?.medicalServiceSiteContent} /> :
        serviceName === "mens-health-check" ? <MalesHealth siteData={response?.medicalServiceSiteContent} /> :
          serviceName === "health-screening" ? <HealthScreening siteData={response?.medicalServiceSiteContent} /> :
            serviceName === "men-women-health-check" ? <MenWomenhealth siteData={response?.medicalServiceSiteContent} /> :
              serviceName === "enrolment-health-check" ? <EnrolmentHealth siteData={response?.medicalServiceSiteContent} /> :
                serviceName === "health-check" ? <HealthCheck /> :
                  serviceName === "cancer-screening" ? <CancerScreening siteData={response?.medicalServiceSiteContent} /> :
                    <IndividualServicePage siteData={response?.medicalServiceSiteContent} />}
    </main>
  );
}

export default ServicePage;

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

  const { params } = context;

  /* getFilteredData */
  const mainCategory: string = params?.service as string;

  /* Api calling */
  const { req } = context;
  const { _siteContentID } = req.cookies;
  if (_siteContentID) {
    const parsedValue = JSON.parse(_siteContentID);

    let siteContantId = +parsedValue.ContentId;

    if (typeof siteContantId === "number") {
      const contentID: number = 1;
      const response = await pageContentData({ contentID })
      return { props: { response, serviceName: mainCategory } }
    } else {
      return { props: { response: [], serviceName: mainCategory } }
    }

  } else {
    return { props: { response: [], serviceName: mainCategory } }
  }
}