import React, { FormEvent, useEffect, useRef, useState } from "react";

import Image from "next/image";

import ResourceCard from "../common/ResourceCard";
import { contentApi } from "@/api/resourcesApi";
import Cookies from "js-cookie";
import { NextRouter, useRouter } from "next/router";
import Pagination from "../common/Pagination";
import RecentPosts from "../common/RecentPosts";

type Resource = {
  index: number;
  image: string;
  title: string;
  category: string;
  category_id: string;
  date: string;
  description: string;
  id: number
  name: string
  featureImageFileItemIsPublic: string
  createdOnUtc: string
  bodyContent: string
};


function ResourcesPage({ response }: { response: any[] }) {
  const [filteredItems, setFilteredItems] = useState<Resource[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(132);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const resourceRef = useRef<HTMLDivElement>(null);
  const [isLoader, setIsLoader] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [category, setCategory] = useState("Medical Service Tips");
  const [itemsPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0)
  const router: NextRouter = useRouter();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1);
  };

  const handleFilterClick = (id: number, name: string) => {
    const cookieValue = JSON.stringify({
      Id: id,
    });
    Cookies.set('_DetailsID', cookieValue);
    setSelectedFilter(id);

    setCategory(name)
  };

  useEffect(() => {
    const cookieValue = JSON.stringify({
      Id: 132,
    });
    Cookies.set('_DetailsID', cookieValue);
  }, [])


  useEffect(() => {
    ; (async () => {
      const contentData = await contentApi({ selectedFilter: selectedFilter, pageIndex: currentPage, pageSize: itemsPerPage })
      setTotalPages(contentData.total);
      setFilteredItems(contentData.data)
      setPreviewData(contentData.data)
    })();
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  }, [selectedFilter, currentPage])

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSearchValue("");
  };

  const handleSearch = (e: any) => {
    const value = e.target.value
    setSearchValue(value)
    // search filter 
    if (value.length > 0) {
      const searchedData = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredItems(searchedData);
    } else {
      setFilteredItems(previewData);
    }
  }

  const handleDetailsPage = (id: number) => {
    router.push(`/details/${id}`)
  }

  function extractDescription(content: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = content;
    const firstSpan = tempElement.querySelector('span');
    const descriptionText = firstSpan ? firstSpan.textContent || '' : '';
    return descriptionText;
  }

  function convertDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    return formattedDate;
  }

  console.log(response);
  

  return (
    <>
      {isLoader && <div className="flex justify-center items-center h-screen w-full bg-transparent absolute  backdrop-blur z-50 ">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-16 w-16  "></div>
      </div>}
      <div className="container flex flex-col-reverse items-start justify-center gap-8 px-3 pb-5 mx-auto md:flex-row md:justify-between md:gap-0 ">

        <div
          className="flex flex-col justify-center items-center w-full md:w-[70%]"
          ref={resourceRef}
        >
          <div className="flex flex-col items-center w-full md:items-stretch">
            <h1 className=" font-bold text-5xl leading-[65px] text-center lg:text-start lg:pl-9  xl:pl-[120px] 2xl:pl-6 text-black">
              Resources
            </h1>
            <div className=" flex  justify-center md:mr-11 bg-[#419886] rounded-xl my-2.5">
              <ul className="flex flex-col md:flex-row w-60 xs:w-80  md:max-w-[80%] my-4 gap-4 md:w-full items-center justify-center md:items-start  md:justify-start flex-wrap">
                {response?.map((item, index) => {
                  const { name, id } = item;
                  const isActive = selectedFilter === id;

                  return (
                    <li
                      key={index}
                      className={`text-base hover:cursor-pointer capitalize w-40 2xl:w-fit  ${isActive ? "text-[#FFD669]" : "text-white"
                        }`}
                      onClick={() => handleFilterClick(id, name)}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mr-5">
            {filteredItems.length > 0 ? (
              filteredItems.map((item: any, index) => {
                const { name, featureImageFileItemIsPublic, createdOnUtc, bodyContent, id } = item;
                const newData = convertDate(createdOnUtc)
                return (
                  <ResourceCard
                    key={index}
                    image={featureImageFileItemIsPublic ? `${featureImageFileItemIsPublic}` : "card-1-image"}
                    category={category}
                    date={newData}
                    title={name}
                    description={extractDescription(bodyContent)}
                    id={id}
                  />
                );
              })
            ) : (
              <div className="max-w-xs my-8 text-2xl font-bold md:mx-5 md:max-w-sm xl:max-w-2xl 2xl:max-w-4xl ">
                {searchValue.length > 0 ? (
                  <p className="break-words">
                    {`No data found for search term "${searchValue}".`}
                  </p>
                ) : (
                  <p className="break-words">{`No data found `}</p>
                )}
              </div>
            )}

          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalPages / itemsPerPage)}
            onPageChange={handlePageChange}
          />

        </div>
        <div className="w-full md:w-[30%] h-full mt-[75px]  flex flex-col-reverse md:flex-col gap-6 md:gap-8">
          <form className="flex" onSubmit={(event) => handleSearchSubmit(event)}>
            <input
              className="block w-full px-4 py-3 border-l border-gray-300 outline-none border-y rounded-l-md "
              type="text"
              name="search"
              placeholder="Search for pages.."
              id=""
              value={searchValue}
              onChange={(e) => handleSearch(e)}
            />
            <button className="bg-[#24403B] p-3 hover:cursor-pointer rounded-r-md">
              <Image
                src="/images/icons/search-icon.svg"
                height="35"
                width="35"
                alt="search-icon"
              />
            </button>
          </form>
          <div className="flex flex-col gap-5 px-3 xs:px-0">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-bold uppercase">recent posts</h1>
              <div className="flex flex-col gap-5">
                {previewData
                  .slice(0, 3)
                  .map((item: any, index: number, arr) => {
                    const { name, featureImageFileItemIsPublic, createdOnUtc, bodyContent, id } = item;
                    const newData = convertDate(createdOnUtc)
                    return (
                        <RecentPosts
                          key={index}
                          image={featureImageFileItemIsPublic ? `${featureImageFileItemIsPublic}` : "card-1-image"}
                          category={category}
                          date={newData}
                          title={name}
                          description={extractDescription(bodyContent)}
                          id={id}
                          arr={arr}
                          index={index}
                          postClick={()=>{}}
                        />
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-10 ">
              <h1 className="text-lg font-bold uppercase">Category Name</h1>
              <div className="md:py-2">
                <button className="py-2.5  transition-all duration-300 px-5 hover:shadow-btn-shadow border rounded-[20px]  border-gray-400 inline-block font-medium">
                  {category}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesPage;
