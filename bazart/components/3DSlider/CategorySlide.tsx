//CategorySlide.tsx
import React from 'react';

interface CategorySlideProps {
    image: string;
}

const CategorySlide: React.FC<CategorySlideProps> = ({ image }) => (
  <img src={image} alt="" />
);

export default CategorySlide;

