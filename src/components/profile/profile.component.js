import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import useAuthListener from '../../hooks/useAuth.hook'


export default function ProfileComp() {

    const { ...user } = useAuthListener()
    const { displayName } = { ...user }
    return (

        <div className="flex items-center justify-center">
            <div className="bg-white w-1/3 mt-10 rounded-lg">
                <div className="flex items-center justify-center pt-10 flex-col">
                    <img src="https://avatarfiles.alphacoders.com/128/thumb-128984.png" alt="logo" className="rounded-full w-32" />
                    <h1 className="text-gray-800 font-semibold text-xl mt-5">{displayName}</h1>
                    <h1 className="text-gray-500 text-sm">Cairo, Egypt</h1>
                    <h1 className="text-gray-500 text-sm p-4 text-center">
                        I have felt cats rubbing their faces against mine and touching my cheek with claws carefully sheathed. These things, to me, are expressions of love.
                    </h1>
                </div>
                <div className="flex justify-between p-4">
                    <div>
                        <Link to='pets' className="text-xs text-green-400 border-2 py-1 px-2 border-green-400">My Pets</Link>
                    </div>
                    <div>
                        <Link to='/edit' className="text-xs text-blue-400 border-2 py-1 px-2 border-blue-400">Edit</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-3 mb-6 flex-col">
                    <h1 className="text-xs text-gray-500">Get Connected</h1>
                    <div className="flex mt-5">
                        <UilFacebookF className="text-blue-700 mr-5 cursor-pointer" />
                        <UilTwitter className="text-blue-700 mr-5 cursor-pointer" />
                        <UilInstagram className="text-blue-700 mr-5 cursor-pointer" />
                        <UilGithub className="text-blue-700 mr-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>

    )
}