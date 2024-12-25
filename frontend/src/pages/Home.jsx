import { Link } from "react-router-dom"

const Home = () =>{
    return(
       <div>
        <div className="bg-cover bg-bottom bg-[url(/images/img1.jpg)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400">
            <img className="W-6 ml-8 h-15 w-20" src='/images/logo.jpg'/>
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className="text-[40px] font-semibold">Get Started with Uber</h2>
                <Link to='/login' className=" flex item-center justify-center w-full bg-black text-white py-3 rounded mt-2">Continue</Link>
            </div>
       </div>
    </div>
    )
}
export default Home