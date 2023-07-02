import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import of the CoverFlow component
const DynamicCoverflow = dynamic(() => import('react-coverflow'), { ssr: false });

interface CoverFlowCarouselProps {
  title: string;
  imgSrc: string;
}

const categories: CoverFlowCarouselProps[] = [
  {
    title: 'ACCESSORIES',
    imgSrc: 'https://i.pinimg.com/564x/89/d1/73/89d173bbfa1ad62f1bb501630a7ee12e.jpg',
  },
  {
    title: 'APPAREL',
    imgSrc: 'https://i.pinimg.com/564x/e7/8f/6f/e78f6fe0fa254fcd11e1ff78f82b6ba8.jpg',
  },
  {
    title: 'HOMEWARE',
    imgSrc: 'https://i.pinimg.com/564x/fe/27/3f/fe273f3927a701ced8f2f97b7542ee42.jpg',
  },
  {
    title: 'CRAFTSMAN',
    imgSrc: 'https://i.pinimg.com/564x/91/8a/9d/918a9dfcb0fa48f101d4fe8b95b1c1a1.jpg',
  },
  {
    title: 'ARTIFACTS',
    imgSrc: 'https://i.pinimg.com/564x/a0/b5/e8/a0b5e87c8e7631fa245894be7006bf29.jpg',
  },
  {
    title: 'ENTERTAINMENT',
    imgSrc: 'https://i.pinimg.com/564x/1c/cc/86/1ccc86da76b028b09308fc5d3df24dd0.jpg',
  },
];

const CoverflowCarousel: React.FC = () => {
  return (
    <DynamicCoverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableScroll
      clickable
      active={0}
    >
      {categories.map((category, index) => (
        <div key={index}>
          <img src={category.imgSrc} alt={category.title} style={{ display: 'block', width: '100%' }} />
          <p style={{position: 'absolute', top: '10px', width: '100%', textAlign: 'center'}}>{category.title}</p>
        </div>
      ))}
    </DynamicCoverflow>
  );
};

export default CoverflowCarousel;
