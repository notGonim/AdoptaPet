import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import Menu from "../menu/menu.component";
export default function MainHeader() {


    
    return (
        <header className="lg:px-10 bg-blue-700 flex flex-wrap items-center lg:py-0 py-2    ">
            <div className="flex-1 flex justify-between items-center">
                <Link to={ROUTES.DASHBOARD}>
                    <img src={process.env.PUBLIC_URL + "favicon.ico"} alt="logo" className="bg-auto bg-no-repeat bg-center py-1 " />
                </Link>
            </div>
            <label for="menu-toggle" className="pointer-cursor lg:hidden block">
                <svg className="fill-current m-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input class="hidden" type="checkbox" id="menu-toggle" />
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to={ROUTES.DASHBOARD}>Home</Link></li>
                        <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to={ROUTES.SHELTERS}>Shelters</Link></li>
                        <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to={ROUTES.STORIES}>Stories</Link></li>
                    </ul>
                </nav>
                <Link to="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                    <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://avatarfiles.alphacoders.com/128/thumb-128984.png" alt="Pic" />
                </Link>
            </div>
            <Menu />
        </header>
    )
}


/*
- To Change the profile based on gmail pic or the first character of username
*/