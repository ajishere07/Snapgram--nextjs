import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  PaperAirplaneIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

const Post = ({ username, profileImg, postContent, caption, id }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5 ">
        <img
          src={profileImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3 "
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={postContent} className="object-cover w-full" alt="" />
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold">{username} </span>
        {caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:right-0 outline-none"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-500">Post</button>
      </form>
    </div>
  );
};

export default Post;
