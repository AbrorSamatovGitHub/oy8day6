import Link from 'next/link'
import React from 'react'

// interface dataProps {
//     id: number;
//     name: string;
// }[]
// const DataPage = () => [
//     {
//         id: 1,
//         name: "Обуна бўлиш"
//     },
//     {
//         id: 2,
//         name: "Э-Хисоб"
//     },
//     {
//         id: 3,
//         name: "Китобларим"
//     },
//     {
//         id: 4,
//         name: "Сақланганлар"
//     },
//     {
//         id: 5,
//         name: "Созламалар"
//     },
//     {
//         id: 6,
//         name: "Тунги режим"
//     }
// ]
const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex py-[50px]  items-start justify-between '>
            <div className='shadow p-7 pr-[80px] rounded-sm flex flex-col gap-3 '>
                <div>
                    <Link href={'/users/subscribe'}>Обуна бўлиш </Link>
                </div>
                <div>
                    <Link href={`/users/payment`} >Э-Хисоб</Link>
                </div>
                <div>
                    <Link href={`/users/books`} >Китобларим</Link>
                </div>
                <div>
                    <Link href={`/users/storage`} >Сақланганлар</Link>
                </div>
                <div>
                    <Link href={`/users/settings`} >Созламалар</Link>
                </div>
                <div>
                    <Link href={`/users/mode`} >Тунги режим</Link>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default UserLayout
