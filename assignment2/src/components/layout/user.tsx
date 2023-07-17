import { Outlet } from 'react-router-dom'
import Footer from './footer'
import { useLocalStorage } from "../../hooks"
const UserLayout = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <>
        <header className='bg-red-500 h-[70px]'>
            <div className="container mx-auto flex items-center">
                <img className='w-[68px] mt-[4px] ml-[90px]' src="/logo.png" alt="" />
                <input className='ml-[90px] pl-[20px] grow h-[40px] rounded-xl' type="text" placeholder='Search' />
                <p className="text-white pl-[20px]">xin chào {user && user.lastName}</p>
            </div>
            
        </header>
        {/* Content */}
        <Outlet />
        <Footer/>

    </>
}

export default UserLayout