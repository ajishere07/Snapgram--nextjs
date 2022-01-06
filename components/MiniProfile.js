const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px] object-cover"
        src="https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg?resize=768%2C432"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold ">Spidey</h2>
        <h3 className="text-sm text-gray-400">welcome to snapgram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;
