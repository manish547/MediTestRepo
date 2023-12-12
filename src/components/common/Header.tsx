import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";

interface SubrouteTypes {
  [key: string]: string;
};

const Header = ({ handleNavData }: { handleNavData: any[] }) => {
  const router: NextRouter = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [openMenuSubIndex, setOpenMenuSubIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);
  const [openMobileSubIndex, setOpenMobileSubIndex] = useState<boolean>();
  const [openMobileMenuSubIndex, setOpenMobileMenuSubIndex] = useState<boolean>();
  const [isMobile, setIsMobile] = useState(false);
  const [navData, setNavData] = useState<any[]>([])
  const [handlelangModal, setHandlelangModal] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoader(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoader(false);
    };

    // Listen for route changes
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      // Remove event listeners when the component unmounts
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  useEffect(() => {
    setNavData(handleNavData);
  }, [handleNavData])

  const handlechangeLang = (value: string) => {
    router.push("/", undefined, { locale: value })
  };

  const handleSubroute: SubrouteTypes = {
    '/health-checkup': 'services/health-check',
    '/corporate-solutions': 'services/private-hospital',
    '/membership-packages': 'services/membership-packages',
    '/medii-journey': 'about',
    '/team': 'about',
    '/health-screening': 'services/health-screening',
    '/service/fertility-well-women-screening': 'services/female-health-check',
    '/service/fertility-well-men-screening': 'services/mens-health-check',
    '/service/fertility-std-infectious-disease-test': 'services/medical-report',
    '/service/fertility-sexual-health': 'services/men-women-health-check',
    '/service/enrolment-health': 'services/enrolment-health-check',
    '/service/cancer-screening': 'services/cancer-screening',
    '/treatment-abroad': 'treatment-abroad'
  };

  return (
    <>
      {isLoader && <div className="flex justify-center items-center h-screen w-full bg-transparent absolute  backdrop-blur ">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-16 w-16  "></div>
      </div>}
      <header className="w-full p-2 relative">
        <div className="w-full sm:container px-3 lg:px-12 sm:mx-auto">
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-center justify-between w-full xs:flex-row">
              <Link href="/" className="flex items-center px-2 py-4 -ml-4 shrink-0">
                <Image
                  src="/images/icons/medii-logo.png"
                  height="100"
                  width="100"
                  alt="medii-logo"
                />
              </Link>
              <div className="items-center flex-grow hidden ml-2 space-x-4 md:flex">
                {/* links */}
                {navData.map((navItem, index): any => {
                  const { name, href, dropdownItems, siteContentId, entityType } = navItem;
                  return (
                    <div
                      key={index}
                      className="relative xl:mx-4"
                      onMouseEnter={() => setOpenMenuIndex(index)}
                      onMouseLeave={() => setOpenMenuIndex(null)}
                    >
                      <Link href={`${href === "/about-medii" ? "/about" : href}`}>
                        <span
                          // onClick={() => Cookies.set('_siteContentID', siteContentId)}

                          onClick={() => {
                            const cookieValue = JSON.stringify({
                              ContentId: siteContentId,
                              entityType: entityType
                            });
                            Cookies.set('_siteContentID', cookieValue);
                          }}

                          className={`block px-1 md:px-4 py-2 whitespace-nowrap font-Quicksand text-sm xl:text-base  
                        ${router.pathname === href
                              ? "text-[#3A7065] font-bold"
                              : "text-gray-700 hover:text-[#3A7065] font-medium "
                            }
                          `}
                        >
                          {name}
                        </span>
                      </Link>
                      {dropdownItems?.length > 0 && openMenuIndex === index && (
                        <div className="absolute flex flex-col jus top-full  left-0  shadow-hero-shadow rounded-sm py-2.5 bg-white text-gray-700 w-56 z-10">
                          {dropdownItems.map((dropdownItem: any, i: number) => (
                            <div
                              onMouseEnter={() => setOpenMenuSubIndex(i)}
                              onMouseLeave={() => setOpenMenuSubIndex(null)}
                              key={i}>
                              <button
                                className="text-start w-full"
                                onClick={() => {
                                  // Cookies.set('_siteContentID', dropdownItem.siteContentId)
                                  const cookieValue = JSON.stringify({
                                    ContentId: dropdownItem.siteContentId,
                                    entityType: dropdownItem.entityType
                                  });
                                  Cookies.set('_siteContentID', cookieValue);

                                  const subroute = handleSubroute[dropdownItem.linkTo];
                                  const pathToPush = subroute ? `/${subroute}` : '/services';
                                  router.push(pathToPush);
                                  setOpenMenuIndex(null);
                                  setOpenMenuSubIndex(null)
                                }}
                              >
                                <span className="block px-4 py-2 text-sm hover:bg-gray-100 w-full ">
                                  {dropdownItem.subname}
                                </span>
                              </button>
                              {dropdownItem.hasChild && openMenuSubIndex === i && <div className="absolute top-4 -right-[177px] flex flex-col shadow-hero-shadow rounded-sm py-2.5 bg-white text-gray-700 w-44 z-10">
                                {
                                  dropdownItem.ThirdlevalMenu.map((thirdLevelItem: any, j: number) => (
                                    <div key={j}>
                                      {thirdLevelItem?.length > 0 && thirdLevelItem.map((thirdlevale: any, f: number) => (
                                        <div className="bg-white"
                                          onMouseEnter={() => setOpenSubIndex(f)}
                                          onMouseLeave={() => setOpenSubIndex(null)}
                                          key={f}
                                        >
                                          <button
                                            className="text-start w-full"
                                            onClick={() => {
                                              // Cookies.set('_siteContentID', thirdlevale.siteContentId)
                                              const cookieValue = JSON.stringify({
                                                ContentId: thirdlevale.siteContentId,
                                                entityType: thirdlevale.entityType
                                              });
                                              Cookies.set('_siteContentID', cookieValue);

                                              const subroute = handleSubroute[thirdlevale.linkTo];
                                              const pathToPush = subroute ? `/${subroute}` : `${thirdlevale.linkTo}`;
                                              router.push(pathToPush);
                                              setOpenMenuIndex(null);
                                              setOpenMenuSubIndex(null)
                                              setOpenSubIndex(null)
                                            }}
                                          >
                                            <span className="block px-4 py-2 text-sm hover:bg-gray-100 w-full">
                                              {thirdlevale.subname}
                                            </span>
                                          </button>
                                          {thirdlevale.hasChild && openSubIndex === f && <div className="absolute -right-[177px] top-4 flex flex-col shadow-hero-shadow rounded-sm py-2.5 bg-white text-gray-700 w-44 z-10">
                                            {
                                              thirdlevale.FourlevalMenu?.map((fourlevalitems: any, h: number) => (
                                                <div key={h}>
                                                  {fourlevalitems?.length > 0 && fourlevalitems.map((fourleval: any, m: number) => (
                                                    <div className="bg-white w-full " key={m}>
                                                      <button
                                                        className="text-start w-full"

                                                        onClick={() => {
                                                          // Cookies.set('_siteContentID', fourleval.siteContentId);
                                                          const cookieValue = JSON.stringify({
                                                            ContentId: fourleval.siteContentId,
                                                            entityType: fourleval.entityType
                                                          });
                                                          Cookies.set('_siteContentID', cookieValue);

                                                          const subroute = handleSubroute[fourleval.linkTo];
                                                          const pathToPush = subroute ? `/${subroute}` : `${fourleval.linkTo}`;
                                                          router.push(pathToPush);
                                                          setOpenMenuIndex(null);
                                                          setOpenMenuSubIndex(null)
                                                          setOpenSubIndex(null)
                                                        }}
                                                      >
                                                        <span className="block px-4 py-2 text-sm hover:bg-gray-100 w-full">
                                                          {fourleval.subname}
                                                        </span>
                                                      </button>
                                                    </div>
                                                  ))
                                                  }
                                                </div>
                                              ))
                                            }

                                          </div>}
                                        </div>
                                      )
                                      )}
                                    </div>

                                  ))
                                }
                              </div>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* login section */}
              <div className="flex items-center space-x-4 md:hidden lg:flex shrink-0 relative ">
                <a href={`${process.env.NEXT_PUBLIC_PORTAL_URL}/online-booking`} target="_blank" className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow">
                  Book Online
                </a>
                <button className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow">
                  sigh in
                  {/* user icon */}
                  <Image
                    src="/images/icons/user-icon.svg"
                    height="20"
                    width="20"
                    alt="user-icon"
                  />
                </button>

                <Image
                  src="/images/icons/theme-icon.svg"
                  height="38"
                  width="38"
                  alt="theme"
                  className="hidden md:block hover:cursor-pointer"
                  onClick={() => setHandlelangModal(!handlelangModal)}
                />
                <Image
                  src="/images/icons/Cosmetology-icon.svg"
                  height="38"
                  className="hidden md:block  border-[#2e5049] border-2 rounded-full hover:cursor-pointer"
                  width="38"
                  alt="face"
                />
                <div className="block md:hidden" id="mobile-navigator">
                  <button
                    className="flex items-center flex-shrink-0 text-gray-800 hover:text-gray-600 focus:outline-none"
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  >
                    <Image
                      src={`/images/icons/${isMobileNavOpen
                        ? "mobile-navigator-close"
                        : "mobile-navigator-line"
                        }.svg`}
                      height="40"
                      width="35"
                      alt="navigator"
                      className="flex-grow flex-shrink-0"
                    />
                  </button>
                </div>
                {handlelangModal && <div className="absolute right-5 top-12 shadow-btn-shadow flex  flex-col items-center justify-center gap-2 py-2 bg-white rounded-md ">

                  <span
                    className="hover:bg-gray-500 px-3 hover:font-semibold hover:text-white cursor-pointer "
                    onClick={() => { handlechangeLang("en-gb"); setHandlelangModal(false) }}
                  >
                    English
                  </span>
                  <span
                    className="hover:bg-gray-500 px-3 hover:font-semibold hover:text-white cursor-pointer"
                    onClick={() => { handlechangeLang("zh-cn"); setHandlelangModal(false) }}
                  >
                    Chinese
                  </span>
                </div>}
              </div>
            </div>
          </div>

        </div>
        {isMobileNavOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-start py-2 space-y-1 ">
              {navData.map((navItem, index): any => {
                const { name, href, dropdownItems, siteContentId, entityType } = navItem;
                return (
                  <div
                    key={index}
                    className="relative w-full"
                    onMouseEnter={() => !isMobile && setOpenMenuIndex(index)}
                    onMouseLeave={() => !isMobile && setOpenMenuIndex(null)}
                  >
                    <button
                      onClick={() => {
                        router.push(`${href === "/about-medii" ? "/about" : href}`);
                        setIsMobileNavOpen(false);
                        setOpenMobileMenuSubIndex(false);
                        setOpenMobileSubIndex(false);
                      }}
                      className="flex items-center justify-between w-full"
                    >
                      <span
                        // onClick={() => Cookies.set('_siteContentID', siteContentId)}
                        onClick={() => {
                          const cookieValue = JSON.stringify({
                            ContentId: siteContentId,
                            entityType: entityType
                          });
                          Cookies.set('_siteContentID', cookieValue);
                        }}

                        className={`block px-4 py-2 text-base font-medium ${router.pathname === href
                          ? "text-[#3A7065]"
                          : "text-gray-700 hover:text-[#3A7065]"
                          }`}
                      >
                        {name}
                      </span>

                      {dropdownItems.length > 0 && (
                        <Image
                          src="/images/icons/chevron-right.svg"
                          height="6"
                          width="10"
                          alt="chevron-right"
                          className={`flex-shrink h-3 mr-4 ${openMenuIndex === index && "rotate-90"
                            }`}
                          onClick={(event) => {
                            openMenuIndex === index
                              ? setOpenMenuIndex(null)
                              : setOpenMenuIndex(index);
                            setOpenMobileMenuSubIndex(false);
                            event.stopPropagation();
                          }}
                        />
                      )}
                    </button>
                    {dropdownItems.length > 0 && openMenuIndex === index && (
                      <div className="flex justify-center w-full px-5">
                        <div className="flex flex-col  top-full shadow-hero-shadow rounded-lg my-3 py-2.5 bg-white text-gray-700 w-full z-10 ">
                          {dropdownItems.map((dropdownItem: any, i: number) => (
                            <div
                              key={i}
                            >
                              <button
                                className="text-start w-full flex items-center justify-between  hover:bg-gray-100"

                                onClick={() => {
                                  // Cookies.set('_siteContentID', dropdownItem.siteContentId)

                                  const cookieValue = JSON.stringify({
                                    ContentId: dropdownItem.siteContentId,
                                    entityType: dropdownItem.entityType
                                  });
                                  Cookies.set('_siteContentID', cookieValue);

                                  const subroute = handleSubroute[dropdownItem.linkTo];
                                  const pathToPush = subroute ? `/${subroute}` : '/services';
                                  router.push(pathToPush);
                                  setOpenMenuIndex(null);
                                  setIsMobileNavOpen(false);
                                  setOpenMobileMenuSubIndex(false);
                                  setOpenMobileSubIndex(false);
                                }}

                              >
                                <span className="block px-4 py-2 text-sm hover:bg-gray-100 w-full">
                                  {dropdownItem.subname}
                                </span>
                                {dropdownItem.hasChild && (
                                  <Image
                                    src="/images/icons/chevron-right.svg"
                                    height="6"
                                    width="10"
                                    alt="chevron-right"
                                    className={`flex-shrink h-3 mr-4 ${openMobileMenuSubIndex && "rotate-90 "
                                      }`}
                                    onClick={(event) => {
                                      setOpenMobileMenuSubIndex(!openMobileMenuSubIndex); setOpenMobileSubIndex(false);
                                      event.stopPropagation();
                                    }}
                                  />
                                )}
                              </button>
                              {dropdownItem.hasChild && openMobileMenuSubIndex && <div className="flex justify-center w-full px-5">
                                <div className="flex flex-col  top-full shadow-hero-shadow rounded-lg my-3 py-2.5 bg-white text-gray-700 w-full z-10">

                                  {dropdownItem.ThirdlevalMenu.map((thirdLevelItem: any, j: number) => (
                                    <div key={j}>
                                      {
                                        thirdLevelItem?.length > 0 && thirdLevelItem.map((thirdlevale: any, f: number) => (
                                          <div
                                            key={f}
                                          >
                                            <button
                                              className="text-start w-full flex items-center justify-between hover:bg-gray-100"
                                              onMouseEnter={() => setOpenSubIndex(f)}

                                              onClick={() => {
                                                // Cookies.set('_siteContentID', thirdlevale.siteContentId)

                                                const cookieValue = JSON.stringify({
                                                  ContentId: thirdlevale.siteContentId,
                                                  entityType: thirdlevale.entityType
                                                });
                                                Cookies.set('_siteContentID', cookieValue);

                                                const subroute = handleSubroute[thirdlevale.linkTo];
                                                const pathToPush = subroute ? `/${subroute}` : `${thirdlevale.linkTo}`;
                                                router.push(pathToPush);
                                                setOpenMenuIndex(null);
                                                setIsMobileNavOpen(false);
                                                setOpenMobileMenuSubIndex(false);
                                                setOpenMobileSubIndex(false);
                                              }}
                                            >
                                              <span className="block px-4 py-2 text-sm hover:bg-gray-100 w-full">
                                                {thirdlevale.subname}
                                              </span>
                                              {thirdlevale.hasChild && (
                                                <Image
                                                  src="/images/icons/chevron-right.svg"
                                                  height="6"
                                                  width="10"
                                                  alt="chevron-right"
                                                  className={`flex-shrink h-3 mr-4 ${openMobileSubIndex && "rotate-90"
                                                    }`}
                                                  onClick={(event) => {
                                                    setOpenMobileSubIndex(!openMobileSubIndex)
                                                    event.stopPropagation();
                                                  }}
                                                />
                                              )}
                                            </button>
                                            {thirdlevale.hasChild && openMobileSubIndex && <div className="flex justify-center w-full px-5">
                                              <div className="flex flex-col  top-full shadow-hero-shadow rounded-lg py-2.5 bg-white text-gray-700 w-full z-10">
                                                {thirdlevale.FourlevalMenu?.map((fourlevalitems: any, h: number) => (
                                                  <div key={h}>
                                                    {
                                                      fourlevalitems?.length > 0 && fourlevalitems.map((fourleval: any, m: number) => (
                                                        <button
                                                          className="text-start w-full flex items-center justify-between hover:bg-gray-100"
                                                          key={m}
                                                          onClick={() => {
                                                            // Cookies.set('_siteContentID', fourleval.siteContentId);

                                                            const cookieValue = JSON.stringify({
                                                              ContentId: fourleval.siteContentId,
                                                              entityType: fourleval.entityType
                                                            });
                                                            Cookies.set('_siteContentID', cookieValue);

                                                            const subroute = handleSubroute[fourleval.linkTo];
                                                            const pathToPush = subroute ? `/${subroute}` : `${fourleval.linkTo}`;
                                                            router.push(pathToPush);
                                                            setOpenMenuIndex(null);
                                                            setIsMobileNavOpen(false);
                                                            setOpenMobileMenuSubIndex(false);
                                                            setOpenMobileSubIndex(false);
                                                          }}
                                                        >
                                                          <span className="block px-4 py-2 text-sm hover:bg-gray-100 w-full">
                                                            {fourleval.subname}
                                                          </span>
                                                        </button>
                                                      ))
                                                    }
                                                  </div>

                                                ))}
                                              </div>
                                            </div>
                                            }
                                          </div>
                                        ))
                                      }
                                    </div>

                                  ))}
                                </div>
                              </div>
                              }
                            </div>
                          ))}

                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <span className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-[#3A7065] cursor-pointer " onClick={() => handlechangeLang("en-gb")} >English</span>
              <span className="block px-4 py-2 text-base font-medium cursor-pointer text-gray-700 hover:text-[#3A7065]" onClick={() => handlechangeLang("zh-cn")}  >Chinese</span>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
