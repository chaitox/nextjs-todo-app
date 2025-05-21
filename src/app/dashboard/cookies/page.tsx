import { TabBar } from '@/components/cookes/TabBar'
import { cookies } from 'next/headers'
import React from 'react'


export default async function CoquisPage() {
    const cookiesStore = await cookies()
    const selectedTab = cookiesStore.get('selectedTab')?.value??'1'
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <span className='text-3xl'>Tabs</span>
            </div>
            <TabBar currentTab={+selectedTab}/>
        </>


    )
}
