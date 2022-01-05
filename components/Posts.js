import Post from "./Post";
const Posts = () => {
  const dummydata = [
    {
      id: 1,
      username: "iron man",
      userImg:
        "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
      image:
        "https://images.indianexpress.com/2021/08/what-if-episode-3-tony-stark-1200.jpg",
      caption: "Demo post",
    },
    {
      id: 2,
      username: "Captain America",
      userImg:
        "https://cdn.mos.cms.futurecdn.net/5z9Tg5GxgKLVXe2Qs2YXb3-970-80.jpg.webp",
      image:
        "https://cdn.mos.cms.futurecdn.net/5z9Tg5GxgKLVXe2Qs2YXb3-970-80.jpg.webp",
      caption: "Demo post",
    },
  ];
  return (
    <div>
      {dummydata.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          profileImg={post.userImg}
          postContent={post.image}
          caption={post.caption}
        />
      ))}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
};

export default Posts;
