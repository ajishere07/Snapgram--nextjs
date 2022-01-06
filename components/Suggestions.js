import { useState } from "react";
const Suggestions = () => {
  const [suggestion, setSuggestion] = useState([
    {
      username: "arjun",
      avatar:
        "https://3.bp.blogspot.com/-4GNp65J5OK8/UVvEtx9xaQI/AAAAAAAAKRc/N-d1Kj03qzc/s1600/Arjuna-in-the-Mahabharata.jpg",
      id: 1,
      companyName: "apple",
    },
    {
      username: "karn",
      avatar:
        "https://qphs.fs.quoracdn.net/main-qimg-c6334669aeb80c7455eb4505fc559e07-lq",
      id: 2,
      companyName: "apple",
    },
    {
      username: "dronacharya",
      avatar: "https://bharathgyanblog.files.wordpress.com/2017/08/84.jpg",
      id: 3,
      companyName: "apple",
    },
    {
      username: "spiderman",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
      id: 4,
      companyName: "apple",
    },
    {
      username: "arjun",
      avatar:
        "https://3.bp.blogspot.com/-4GNp65J5OK8/UVvEtx9xaQI/AAAAAAAAKRc/N-d1Kj03qzc/s1600/Arjuna-in-the-Mahabharata.jpg",
      id: 5,
      companyName: "apple",
    },
    {
      username: "karn",
      avatar:
        "https://qphs.fs.quoracdn.net/main-qimg-c6334669aeb80c7455eb4505fc559e07-lq",
      id: 6,
      companyName: "apple",
    },
  ]);
  return (
    <div className="mt-4 ml-10 ">
      <div className="flex justify-between text-sm mb-5 ">
        <h3 className="text-sm font-bold text-gray-400">Suggestions For you</h3>
        <button className="text-gray-600 font-semibold"> See all</button>
      </div>
      {suggestion.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-gray-400 text-xs">
              Works at {profile.companyName}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
