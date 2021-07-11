import { Link } from "react-router-dom";

import { UilSignout } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilCog } from '@iconscout/react-unicons'


export default function Menu() {


    return (
        <div className="origin-top-right absolute right-16 mt-40 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
                <Link to="#" className="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"> Profile <UilUser className="ml-1" /></Link>
                <Link to="#" className="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Settings  <UilCog className="ml-1" /></Link>
                <button type="button" className="text-gray-700 flex w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                    Sign out <UilSignout className="ml-1" />
                </button>
            </div>
        </div>
    )
}