import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useEagerConnect from '../../../hooks/useEagerConnect';

type Props = {}

function Validator(Child: React.FC) {
    const ValidatedComp = ({ }: Props) => {
        const router = useRouter();
        const { active } = useWeb3React();
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            console.log("check ", active)

            if (!active) {
                setLoading(true);
                router.push("/")
            } else {

                setLoading(false);
            }


        }, [active])


        return <>
            {
                loading && <h1 className='text-white font-semibold text-4xl'>Loading....</h1>
            }

            {
                !loading && <Child />
            }

        </>
    }
    return ValidatedComp;

}

export default Validator