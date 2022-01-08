import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  SearchIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { signOut, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const navigate = useRouter();
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b bg-white z-50 sticky top-0 ">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div
          className="relative hidden lg:inline-grid  w-24 cursor-pointer"
          onClick={() => navigate.push("/")}
        >
          <Image
            src="/../public/SnapGram.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
          onClick={() => navigate.push("/")}
        >
          <Image
            src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle-sec */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-3">
          <HomeIcon className="navBtn" onClick={() => navigate.push("/")} />
          <MenuIcon className="h-10 md:hidden cursor-pointer " />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-1 bg-red-400 w-5 h-5 animate-pulse text-white flex items-center justify-center rounded-full">
                  3
                </div>
              </div>

              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                // src="https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg?resize=768%2C432"
                src={session.user.image}
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer object-cover "
                alt="profile pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
