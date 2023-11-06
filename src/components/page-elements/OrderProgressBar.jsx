import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { BsBagCheck } from 'react-icons/bs'
import { MdAccountCircle, MdOutlinePayment } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function OrderProgressBar({step}) {
  return (
    <div className='w-full relative mb-10 px-5'>
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_max-content]'>

    <div className='flex flex-row items-center relative'>
        <div className={`absolute w-full top-1/2 transform translate-y-1/2 border-t-2 ${step > 1 ? 'border-orange-400' : 'border-midnight-900'} z-10`}></div>
        <Link to='/koszyk' className={` ${step >= 1 ? 'bg-orange-400' : 'bg-midnight-900'} text-white p-3 w-max rounded-3xl relative z-20`}>
            <p className='text-midnight-900 text-xs font-medium absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2'>Koszyk</p>
            <BiShoppingBag className={`${step === 1 ? 'text-xl' : 'text-sm'}`}/>
        </Link>
    </div>
    <div className='flex flex-row items-center relative'>
        <div className={`absolute w-full top-1/2 transform translate-y-1/2 border-t-2 ${step > 2 ? 'border-orange-400' : 'border-midnight-900'} z-10`}></div>
        <Link to='/koszyk' className={` ${step >= 2 ? 'bg-orange-400' : 'bg-midnight-900'} text-white p-3 w-max rounded-3xl relative z-20`}>
        <p className='text-midnight-900 text-xs font-medium absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2'>Logowanie</p>
            <MdAccountCircle className={`${step === 2 ? 'text-xl' : 'text-sm'}`}/>
        </Link>
    </div>
    <div className='flex flex-row items-center relative'>
        <div className={`absolute w-full top-1/2 transform translate-y-1/2 border-t-2 ${step > 3 ? 'border-orange-400' : 'border-midnight-900'} z-10`}></div>
        <Link to='/koszyk' className={` ${step >= 3 ? 'bg-orange-400' : 'bg-midnight-900'} text-white p-3 w-max rounded-3xl relative z-20`}>
        <p className='text-midnight-900 text-xs font-medium absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2'>Dostawa</p>
            <TbTruckDelivery className={`${step === 3 ? 'text-xl' : 'text-sm'}`}/>
        </Link>
    </div>
    <div className='flex flex-row items-center relative'>
        <div className={`absolute w-full top-1/2 transform translate-y-1/2 border-t-2 ${step > 4 ? 'border-orange-400' : 'border-midnight-900'} z-10`}></div>
        <Link to='/koszyk' className={` ${step >= 4 ? 'bg-orange-400' : 'bg-midnight-900'} text-white p-3 w-max rounded-3xl relative z-20`}>
        <p className='text-midnight-900 text-xs font-medium absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2'>Płatność</p>
            <MdOutlinePayment className={`${step === 4 ? 'text-xl' : 'text-sm'}`}/>
        </Link>
    </div>
    <div className='flex flex-row items-center relative'>
        <Link to='/koszyk' className={` ${step === 5 ? 'bg-orange-400' : 'bg-midnight-900'} text-white p-3 w-max rounded-3xl relative z-20`}>
        <p className='text-midnight-900 text-xs font-medium absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2'>Potwierdzenie</p>
            <BsBagCheck className={`${step === 5 ? 'text-xl' : 'text-sm'}`}/>
        </Link>
    </div>  
   
    </div>
</div>
  )
}

export default OrderProgressBar
