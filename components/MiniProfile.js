import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  const { demoImage, setDemoImage } = useState(
    "https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg?resize=768%2C432"
  );
  console.log(session);
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px] object-cover"
        src={session ? session?.user?.image : demoImage}
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold ">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">welcome to snapgram</h3>
      </div>

      <button
        className="text-blue-400 text-sm font-semibold"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
