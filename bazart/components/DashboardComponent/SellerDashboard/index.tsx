import React from 'react'
import CapsuleComponent from '../CapsuleComponent'
import ChartComponent from '../ChartComponent'
import capsule from '../../../assets/PayementImages/capsule.svg';
import capsule1 from '../../../assets/PayementImages/capsule2.svg';
import DataTable from '../../Utils/Table/DataTable';
import { demoProducts, demoTransactions } from '../../../demoData/tabledata';
import { productsHeader, transactionsHeader } from '../../../constants/headers';
import Validator from '../../HOC/Validator';

type Props = {}

function SellerDashboard({ }: Props) {



    return <>
        <div className="flex w-full gap-6 ">

            <div className="flex flex-col">
                <CapsuleComponent
                    icon={<img src={capsule.src} alt="UP Icon" className="h-6 w-6" />} // Use the imported SVG icon
                    value="$108,560.93"
                    percentage="13.02%"
                />

                <CapsuleComponent
                    icon={<img src={capsule1.src} alt="UP Icon" className="h-9 w-9" />} // Use the imported SVG icon
                    value="$108,560.93"
                    percentage="13.02%"
                />
            </div>



            <div className='w-full  flex flex-col'>
                <ChartComponent />
                {<div className="w-full">
                    <DataTable title="Products Inventory" headers={productsHeader} products={demoProducts} />
                </div>}
                {<div className="w-full">
                    <DataTable title="Transactions History" headers={transactionsHeader} transactions={demoTransactions} />
                </div>}
            </div>






        </div>




    </>

}

export default Validator(SellerDashboard)