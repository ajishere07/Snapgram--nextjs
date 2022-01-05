import { useState } from "react";

import Story from "./Story";
const StoriesSection = () => {
  const [suggestion, setSuggestion] = useState([
    {
      username: "arjun",
      avatar:
        "https://3.bp.blogspot.com/-4GNp65J5OK8/UVvEtx9xaQI/AAAAAAAAKRc/N-d1Kj03qzc/s1600/Arjuna-in-the-Mahabharata.jpg",
      id: 1,
    },
    {
      username: "karn",
      avatar:
        "https://qphs.fs.quoracdn.net/main-qimg-c6334669aeb80c7455eb4505fc559e07-lq",
      id: 2,
    },
    {
      username: "dronacharya",
      avatar: "https://bharathgyanblog.files.wordpress.com/2017/08/84.jpg",
      id: 3,
    },
    {
      username: "spiderman",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
      id: 4,
    },
    {
      username: "arjun",
      avatar:
        "https://3.bp.blogspot.com/-4GNp65J5OK8/UVvEtx9xaQI/AAAAAAAAKRc/N-d1Kj03qzc/s1600/Arjuna-in-the-Mahabharata.jpg",
      id: 5,
    },
    {
      username: "karn",
      avatar:
        "https://qphs.fs.quoracdn.net/main-qimg-c6334669aeb80c7455eb4505fc559e07-lq",
      id: 6,
    },
    {
      username: "dronacharya",
      avatar: "https://bharathgyanblog.files.wordpress.com/2017/08/84.jpg",
      id: 7,
    },
    {
      username: "spiderman",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
      id: 8,
    },
    {
      username: "arjun",
      avatar:
        "https://3.bp.blogspot.com/-4GNp65J5OK8/UVvEtx9xaQI/AAAAAAAAKRc/N-d1Kj03qzc/s1600/Arjuna-in-the-Mahabharata.jpg",
      id: 9,
    },
    {
      username: "karn",
      avatar:
        "https://qphs.fs.quoracdn.net/main-qimg-c6334669aeb80c7455eb4505fc559e07-lq",
      id: 10,
    },
    {
      username: "dronacharya",
      avatar: "https://bharathgyanblog.files.wordpress.com/2017/08/84.jpg",
      id: 11,
    },
    {
      username: "spiderman",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
      id: 12,
    },
  ]);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default StoriesSection;
