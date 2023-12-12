import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React from 'react'

interface CardProps {
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    id: number;
    arr: any;
    index: number;
    postClick:any
}

const RecentPosts = ({
    image,
    category,
    date,
    title,
    description,
    id,
    arr,
    index,
    postClick
}: CardProps) => {
    const router: NextRouter = useRouter();

    const handleDetailsPage = (id: number, image: string, category: string, date: string, title: string, description: string) => {
        const data = {
            id,
            image,
            category,
            date,
            title,
            description
        }
        localStorage.setItem('postsDetails', JSON.stringify(data));
        router.push(`/details/${id}`)
        postClick()
    }

    return (
        <React.Fragment >
            <div className="flex gap-4 pb-2" >
                {/* image */}
                <Image
                    src={`/images/resource-card/${image ?? ""}.png`}
                    className="flex-shrink-0 object-cover rounded-md cursor-pointer"
                    height={90}
                    width={90}
                    alt={"card-1-image"}
                    onClick={() => handleDetailsPage(id, image, category, date, title, description)}
                />
                {/* dscription */}
                <div className="flex flex-col justify-between ">
                    <p className="overflow-hidden text-lg line-clamp-2 cursor-pointer" onClick={() => handleDetailsPage(id, image, category, date, title, description)}>
                        {title ?? ""}
                    </p>
                    <div className="flex items-center gap-1">
                        <Image
                            src="/images/icons/tag.svg"
                            height="18"
                            width="18"
                            alt="tag-logo"
                            className="-rotate-90 hover:cursor-pointer"
                        />
                        <p className="text-gray-500 hover:cursor-pointer">
                            {category}
                        </p>
                    </div>
                </div>
            </div>
            {index !== arr.length - 1 ? (
                <hr className="mx-5 border-gray-200" />
            ) : (
                <hr className=" mt-5 mb-3 border-gray-400 " />
            )}
        </React.Fragment>
    )
}

export default RecentPosts