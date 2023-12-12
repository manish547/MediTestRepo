import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4">
            <ul className="inline-flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                        <button
                            className={`px-3 py-1 rounded font-bold ${currentPage === index 
                                    ? "bg-[#419886] text-white"
                                    : "bg-white text-gray-900 hover:bg-gray-200"
                                }`}
                            onClick={() => onPageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
