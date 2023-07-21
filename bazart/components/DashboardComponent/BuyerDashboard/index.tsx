import React from 'react'
import DataTable from '../../Utils/Table/DataTable'
import { transactionsHeader } from '../../../constants/headers'
import { demoTransactions } from '../../../demoData/tabledata'
import Validator from '../../HOC/Validator'

type Props = {}

function BuyerDashboard({ }: Props) {
    return <>
        <div className="w-full">
            <DataTable title="Transactions History" headers={transactionsHeader} transactions={demoTransactions} />
        </div>

    </>
}

export default Validator(BuyerDashboard);