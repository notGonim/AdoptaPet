import { Link } from 'react-router-dom'
import error from '../assets/error.svg'
export default function NotFound() {

    return (
        <div className="conainer   flex-col flex justify-center items-center ">
            <img src={error} alt="404" className="w-6/12 mt-12" />
            <Link to='/' className="text-blue-700 m-10" >Back To Home</Link>
        </div>
    )
}