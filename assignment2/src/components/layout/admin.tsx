import { Outlet } from 'react-router-dom'
import  footer  from './footer'
const AdminLayout = () => {
    return <> 
    <header className='bg-[#00B0D7] h-[64px]'>
            <div className="container mx-auto flex items-center ">
                <div>
                <img className='w-[57px] pt-[7px] ' src="/logo.png" alt="" />
                </div>
                
                <div className="ml-[20px] mr-[70px] pt-[10px]">
                    Dashboard
                </div>

               <div className="mr-[250px] pt-[10px]">
               <input className='rounded-lg grow bg-[url("/public\vector.png")] bg-no-repeat bg-left w-[533px] h-[34px]' type="text"  />
               </div>

               <div>
               <p className="flex pt-[10px]"><p className="pr-[10px]">xin chào</p> Nguyễn Đức Nam</p>
               </div>
               
            </div>
        </header>
        {/* Content */}
        <Outlet />
    
    </>
}

export default AdminLayout