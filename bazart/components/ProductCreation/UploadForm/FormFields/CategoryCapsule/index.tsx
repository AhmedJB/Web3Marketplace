import React from 'react';

interface CategoryCapsuleProps {
    id: number;
    title: string;
    imageUrl: string;
    active?: boolean;
    setCategory: (c: number) => void
}

const CategoryCapsule: React.FC<CategoryCapsuleProps> = ({ id, title, imageUrl, active, setCategory }) => {

    return (
        <div
            onClick={() => setCategory(id)}
            className={`relative w-[150px] h-[190px] rounded-lg overflow-hidden cursor-pointer
            ${active ? " border-4 border-white" : ""}
            `}
            style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}
        >
            <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center transition-opacity duration-300 hover:opacity-80">
                <h2 className="text-white text-center font-bold text-xl">{title}</h2>
            </div>
        </div>
    );
};

export default CategoryCapsule;