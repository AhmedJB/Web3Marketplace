import React from 'react';
import steps1 from '../../../assets/StepsImages/Steps1.png'
import StepsCard from './StepsCard';
import steps2 from '../../../assets/StepsImages/Steps2.png'
import steps3 from '../../../assets/StepsImages/Steps3.png'

type Props = {};

function Steps({ }: Props) {
  const StepsData = [
    { image: steps1, title: 'connect your wallet', subtitle: 'Start the upload by creating an account' },
    { image: steps2, title: 'Upload your Product ', subtitle: 'Fill out the required information and pricing and you are set' },
    { image: steps3, title: 'Start Selling & Growing', subtitle: 'Choose Between Auctions, Fixed-Price Listings, And Declining-Price Listings. You Choose How You Want To Sell Your NFTs!' },

  ];

  const limitedStepsData = StepsData.slice(0, 3); // Limit to maximum of 3 items

  return (
    <>
      <div className='container mx-auto py-8'>
        <div className='mx-36 flex flex-col items-center '>
          <div className='text-yellow text-[32px] barlow font-semibold'>Get Started In 3 Steps</div>
          <div className='grid grid-cols-3 gap-12 py-8'>
            {limitedStepsData.map((Step, index) => (
              <StepsCard key={index} title={Step.title} image={Step.image} subtitle={Step.subtitle} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Steps;
