const Story = ({ img, username }) => {
  console.log(img);
  return (
    <div>
      <img
        src={img}
        alt="profile pic"
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 duration-150 ease-in-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
