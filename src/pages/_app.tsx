import { navigationData } from "@/api/headerApi";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";
import type { AppProps, AppContext } from "next/app";

export interface NavigationData {
  id: number;
  name: string;
  href: string;
  dropdownItems: NavigationDataItem[];
}

export interface NavigationDataItem {
  subname: string;
  linkTo: string;
  dropdownItemsid: number;
  hasChild: boolean;
  ThirdlevalMenu: NavigationDataItem[];
}

export interface MyAppProps extends AppProps {
  data: NavigationData[];
}

interface AppInitialProps {
  data: NavigationData[];
}


App.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {

  const navigationDataResponse = await navigationData({ changeLang: (context.ctx.locale === "en-gb" ? 1 : context.ctx.locale === "zh-cn" ? 2 : 0), parentItemId: 0 })
  const data = navigationDataResponse;

  const subdataPromises = data.data?.length > 0 ? data.data.map(async (item: any) => {
    const dropdownItemsres = await navigationData({ changeLang: (context.ctx.locale === "en-gb" ? 1 : context.ctx.locale === "zh-cn" ? 2 : 0), parentItemId: item.id });
    const dropdownItems = dropdownItemsres.data;

    const newnevData = {
      name: item.name,
      href: item.siteNavPermalinkUrlExpression,
      siteContentId: item.siteContentId,
      entityType: item.entityType,
      dropdownItems: dropdownItems.length > 0 ? await Promise.all(dropdownItems.map(async (subItem: any) => {
        return ({
          subname: subItem.name,
          linkTo: subItem.siteNavPermalinkUrlExpression,
          dropdownItemsid: subItem.id,
          hasChild: subItem.hasChild,
          siteContentId: subItem.siteContentId,
          entityType: subItem.entityType,
          ThirdlevalMenu: subItem.hasChild ? await Promise.all(dropdownItems.map(async (submenuItem: any) => {
            if (submenuItem.hasChild) {

              const Thirdlevalres = await navigationData({ changeLang: (context.ctx.locale === "en-gb" ? 1 : context.ctx.locale === "zh-cn" ? 2 : 0), parentItemId: submenuItem.id });
              const Thirdleval = Thirdlevalres.data;

              return await Promise.all(Thirdleval?.map(async (submenuItem: any) => {
                return ({
                  subname: submenuItem.name,
                  linkTo: submenuItem.siteNavPermalinkUrlExpression,
                  dropdownItemsid: submenuItem.id,
                  hasChild: submenuItem.hasChild,
                  siteContentId: submenuItem.siteContentId,
                  entityType: submenuItem.entityType,
                  FourlevalMenu: submenuItem.hasChild ? await Promise.all(Thirdleval.map(async (fourthstep: any) => {

                    if (fourthstep.hasChild) {
                      const Fourthlevalres = await navigationData({ changeLang: (context.ctx.locale === "en-gb" ? 1 : context.ctx.locale === "zh-cn" ? 2 : 0), parentItemId: fourthstep.id });

                      const Fourthleval = Fourthlevalres.data;
                      return await Promise.all(Fourthleval?.map(async (fourthitem: any) => {
                        return ({
                          subname: fourthitem.name,
                          linkTo: fourthitem.siteNavPermalinkUrlExpression,
                          dropdownItemsid: fourthitem.id,
                          hasChild: fourthitem.hasChild,
                          siteContentId: fourthitem.siteContentId,
                          entityType: fourthitem.entityType,
                        })
                      }))
                    }
                  })) : []
                })
              }))
            }
          })) : []
        })
      })) : [],

    };
    return newnevData;
  }) : [];

  const subdata = await Promise.all(subdataPromises);
  return { data: subdata };
}

export default function App({ Component, pageProps, data }: MyAppProps) {

  return (
    <>
      <div className="sticky top-0 z-[100] bg-white">
        <Header handleNavData={data} />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
