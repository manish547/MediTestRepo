import { isHTMLFormatted } from '@/api/PageContentApi';
import { contentApi, postTabbar } from '@/api/resourcesApi';
import RecentPosts from '@/components/common/RecentPosts';
import { log } from 'console';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaShare, FaTwitter } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

interface PageProps {
    response: any;
}

interface Props {
    response: any
    postTabResponse: any
}

const detailsID = ({ response, postTabResponse }: Props) => {
    const router = useRouter();
    const { detailsID } = router.query;
    const currentID = parseInt(detailsID as string, 10);
    const [postData, setPostData] = useState(response?.data)
    const [searchValue, setSearchValue] = useState("");
    const [selectedPost, setSelectedPost] = useState<any>();


    const handleDetailsPage = (id: number) => {
        router.push(`/details/${id}`)
    }
    // /details/${id}
    const handleSearch = (e: any) => {
        const value = e.target.value
        setSearchValue(value)
        // search filter 
        if (value.length > 0) {
            const searchedData = postData?.filter((item: any) =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setPostData(searchedData);
        } else {
            setPostData(response?.data);
        }
    }

    useEffect(() => {
        const postData = localStorage.getItem('postsDetails')
        if (postData) {
            setSelectedPost(JSON.parse(postData));
        }
    }, [])

    const postClick = () => {
        console.log('postClick');
        const postData = localStorage.getItem('postsDetails')
        if (postData) {
            setSelectedPost(JSON.parse(postData));
        }
    }

    function extractDescription(content: string): string {
        if (typeof document !== 'undefined') {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = content;
            const firstSpan = tempElement.querySelector('span');
            const descriptionText = firstSpan ? firstSpan.textContent || '' : '';
            return descriptionText;
        } else {
            return '';
        }
    }

    function convertDate(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        return formattedDate;
    }

    const handleShare = () => {
        // Replace this with your actual share functionality
        // For example, you can use the Web Share API
        if (navigator.share) {
            navigator.share({
                title: 'Shared Title',
                text: 'Shared Text',
                url: 'https://example.com',
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            console.warn('Web Share API not supported. Consider providing an alternative sharing method.');
            // You might want to implement a fallback sharing method here.
            // For example, you can open a new window with a shareable link or use a third-party sharing library.
        }
    };

    return (
        <>
            <div className='w-full py-10 flex items-center justify-between gap-5 px-10'>
                <Link href={`/details/${currentID - 1}`} className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow">
                    <IoArrowBack className='w-5 h-5' />
                    GO back
                </Link>

                <Link href={`/details/${currentID + 1}`} className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow">
                    Next Page
                    <IoArrowForward className='w-5 h-5' />
                </Link>
            </div>
            <div className=' w-full flex flex-col-reverse xl:flex-row items-start justify-center gap-10  pb-10'>
                <div className=' w-full flex items-center justify-center flex-col px-10 '>
                    <div className='flex flex-col items-start justify-center gap-7 border-b border-[#f3f3f3] pb-5 '>
                        <Image
                            src={`/images/resource-card/${selectedPost?.image ?? ""}.png`}
                            className=" w-[900px] h-[640px] object-cover cursor-pointer"
                            height={640}
                            width={950}
                            alt={selectedPost?.image}
                        />
                        <div className='flex flex-col items-start justify-center gap-3 w-full'>
                            <div><span className='text-[#1f1f1f] leading-9 text-3xl font-medium '>{selectedPost?.title}</span></div>
                            <div className='flex items-center justify-center gap-5'>
                                <span className='text-[#777] text-base '>{selectedPost?.date}</span>
                                <div className="flex items-center gap-1">
                                    <Image
                                        src="/images/icons/tag.svg"
                                        height="18"
                                        width="18"
                                        alt="tag-logo"
                                        className="-rotate-90 hover:cursor-pointer"
                                    />
                                    <p className='text-[#777] text-base '>
                                        {selectedPost?.category}
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-full'>

                                <button className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow" onClick={handleShare}>
                                    <FaShare className='w-5 h-5' />
                                    Share
                                </button>
                                <button className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow" onClick={handleShare}>
                                    <FaTwitter className='w-5 h-5' />
                                    Tweet
                                </button>
                                <button className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow">
                                    <AiFillLike className='w-5 h-5' />
                                    Like 10
                                </button>
                            </div>
                        </div>
                    </div>

                    {response?.data?.length > 0 ? response?.data?.map((item: any, index: number) => {
                        const { id, bodyContent } = item;

                        if (id == detailsID) {

                            return isHTMLFormatted(bodyContent) ? (
                                <div key={index} dangerouslySetInnerHTML={{ __html: bodyContent ?? "" }} className='w-full md:w-[1000px] px-10 md:px-[100px] pt-12' />
                            ) : (
                                <Image
                                    src={`/images/resource-card/card-1-image.png`}
                                    className="w-full h-[200px] object-cover"
                                    height={200}
                                    width={200}
                                    alt={"image"}
                                />
                            );
                        }
                        return null;
                    }) : <div>No Blog Found</div>}
                </div>
                <div className="w-full px-10 xl:px-0 xl:w-[30%] h-full mt-0  flex flex-col-reverse md:flex-col gap-6 md:gap-8">
                    <form className="flex" >
                        <input
                            className="border-y border-l block w-full border-gray-300 outline-none py-3 px-4 rounded-l-md "
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
                            <h1 className="uppercase font-bold text-lg">recent posts</h1>
                            <div className="flex flex-col gap-5">
                                {postData?.map((item: any, index: number, arr: any) => {
                                    const { name, featureImageFileItemIsPublic, createdOnUtc, bodyContent, id } = item;

                                    const newData = convertDate(createdOnUtc)
                                    return (
                                        <RecentPosts
                                            key={index}
                                            image={featureImageFileItemIsPublic ? `${featureImageFileItemIsPublic}` : "card-1-image"}
                                            category={selectedPost?.category}
                                            date={newData}
                                            title={name}
                                            description={extractDescription(bodyContent)}
                                            id={id}
                                            arr={arr}
                                            index={index}
                                            postClick={postClick}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 pb-10 ">
                            <h1 className="text-lg font-bold uppercase">Category Name</h1>
                            <div className="md:py-2">
                                <button className="py-2.5  transition-all duration-300 px-5 hover:shadow-btn-shadow border rounded-[20px]  border-gray-400 inline-block font-medium">
                                    {selectedPost?.category}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default detailsID

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    /* Api calling */
    const { req } = context;
    const { _DetailsID, _siteContentID } = req.cookies

    if (_DetailsID && _siteContentID) {
        const parsedValue = JSON.parse(_DetailsID);
        let entityType = +parsedValue.Id;

        const parsedID = JSON.parse(_siteContentID);
        let tabbarId = +parsedID.entityType

        if (typeof entityType === "number") {
            const response = await contentApi({ selectedFilter: entityType, pageIndex: 0, pageSize: 20 })
            const postTabResponse = await postTabbar({ changeLang: (context?.locale === "en-gb" ? 1 : context?.locale === "zh-cn" ? 2 : 0), entityType: tabbarId })
            return { props: { response, postTabResponse } }
        } else {
            return { props: { response: [], postTabResponse: [] } }
        }
    } else {

        return { props: { response: [], postTabResponse: [] } }
    }
}