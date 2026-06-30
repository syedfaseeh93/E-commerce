import { useNavigate } from "react-router-dom"

const AddressCard = () => {

  const navigate=useNavigate();
  const HandleAddressCard=()=>{
    navigate('/deliveryaddress')
  }
  return (
    <div onClick={HandleAddressCard} className='border border-gray-200 shadow-md rounded-md cursor-pointer p-8 space-y-4  my-4'>
        <h1 className='font-bold text-xl py-2'>Syed Faseeh</h1>
        <div>
        <p className='font-semibold text-gray-600 '>12-71/8,near school</p>
        <p className='font-semibold text-gray-600 '>Shantinagar,Patancheru</p>
        <p className='font-semibold text-gray-600 pb-2'>Hyderabad,Telangana</p>
        </div>
        <p className='font-bold'>7993897591</p>
    </div>
  )
}

export default AddressCard