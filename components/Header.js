import Image from "next/image";
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid"
import { signIn,signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
            <a href="https://www.instagram.com/nuann1803/">
            <Image 
            src="https://links.papareact.com/ocw" 
            layout="fill"
            objectFit="contain"
            />
            </a>
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image 
            src="https://links.papareact.com/jjm" 
            layout="fill"
            objectFit="contain"
            />
        </div>
        {/* Middle - Search input field */}
        <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500"/>
            </div>
            <input 
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" 
            type="text" 
            placeholder="Search" />
        </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
            <a href="https://www.instagram.com/nuann1803/">
        <HomeIcon className="navBtn" />
        </a>
        <MenuIcon className="h-6 md:hidden cursor-pointer" />
        <>
        <a className="pt-2" href="https://www.instagram.com/nuann1803/">
        <div className="relative navBtn">
        <svg aria-label="Messenger" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fill-rule="evenodd"></path></svg>
        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">9+</div>
        </div>
        </a>
        <svg onClick={() => setOpen(true)} className="navBtn _ab6-" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
        <a href="https://www.instagram.com/nuann1803/">
        <svg aria-label="Find People" className="navBtn _ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
        </a>
        <a href="https://www.instagram.com/nuann1803/">
        <HeartIcon className="navBtn" />
        </a>
        <a href="https://www.instagram.com/nuann1803/">
        <img 
        src="https://upanh.cf/6mhgeizbi4.jpg" 
        alt="profile pic" 
        className="h-6 w-6 rounded-full cursor-pointer" />
        </a>
        </>
        
        </div>
    </div>
</div>
  )
}

export default Header