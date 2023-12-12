import { postTabbar } from "@/api/resourcesApi";
import ResourcesPage from "@/components/resources";
import { GetServerSideProps } from "next";
import React from "react";

interface PageProps {
  response: any; 
}

interface Props {
  response: any
}

function resources({response}: Props) {
  return (
    <main>
      <ResourcesPage response={response.data} />
    </main>
  );
}

export default resources;

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

  /* Api calling */
  const { req } = context;
  const { _siteContentID } = req.cookies
  if (_siteContentID) {
    const parsedValue = JSON.parse(_siteContentID);

    let entityType = parsedValue.entityType ? +parsedValue.entityType : null;

    if (typeof entityType === "number") {
      const response = await postTabbar({ changeLang: (context?.locale === "en-gb" ? 1 : context?.locale === "zh-cn" ? 2 : 0), entityType })
      
      return { props: { response } }
    } else {
      return { props: { response: [], } }
    }
  } else {
    
    return { props: { response: [], } }
  }
}