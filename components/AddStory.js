import { PlusIcon } from "@heroicons/react/outline";
const AddStory = ({ img }) => {
  console.log(img);
  return (
    <div className="relative">
      <img
        src={img}
        alt="profile pic"
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 duration-150 ease-in-out"
      />
      <PlusIcon className="absolute bottom-4 right-0 bg-blue-400 w-5 p-1 rounded-full text-white" />
      <p className="text-xs w-14 truncate text-center">Add Story</p>
    </div>
  );
};

export default AddStory;
