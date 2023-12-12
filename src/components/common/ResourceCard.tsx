import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

interface CardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  id: number
}

interface LongTextProps {
  content: string;
  limit: number;
}

const ResourceCard = ({
  image,
  category,
  date,
  title,
  description,
  id
}: CardProps) => {
  const router: NextRouter = useRouter();

  const LongText = ({ content, limit }: LongTextProps) => {
    if (content.length <= limit) {
      return <div>{content}</div>;
    }
    const toShow = content.substring(0, limit) + "...";
    return <div>{toShow}</div>;
  };


  const handleDetailsPage = (id:number, image:string, category:string, date:string, title:string, description:string) => {
    console.log(id, image, category, date, title, description);
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
  }

  return (
    <div className="max-w-[300px] relative h-[480px] my-4 mr-4 rounded overflow-hidden shadow-lg border border-gray-300 shadow-btn-shadow ">
      <div className="relative">
        <Image
          src={`/images/resource-card/${image ?? ""}.png`}
          className="w-full h-[200px] object-cover cursor-pointer"
          height={200}
          width={200}
          alt={image}
          onClick={() => handleDetailsPage(id, image, category, date, title, description)}
        />
        <div>
          <span className="absolute top-2 right-0 bg-[#24403B] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:cursor-pointer">
            {category ?? ""}
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="text-sm block py-2 text-gray-500">{date ?? ""}</span>
        <div className="font-bold text-xl mb-2  overflow-hidden line-clamp-2 cursor-pointer " onClick={() => handleDetailsPage(id, image, category, date, title, description)}>
          <LongText content={title ?? ""} limit={30} />
        </div>
        <div className="text-gray-700 text-base overflow-hidden line-clamp-3">
          <LongText content={description ?? ""} limit={65} />
        </div>
      </div>
      <button
        onClick={() => handleDetailsPage(id, image, category, date, title, description)}
        className="absolute items-center gap-1 flex bottom-2 left-5 hover:cursor-pointer py-2.5">
        More
        <Image
          src="/images/icons/chevron-down-black.svg"
          height="6"
          width="10"
          alt="chevron-right"
          className="flex-shrink  h-3 hover:animate-pulse"
        />
      </button>
    </div>
  );
};

export default ResourceCard;
