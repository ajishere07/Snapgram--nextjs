import Posts from "./Posts";
import StoriesSection from "./StoriesSection";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <StoriesSection />
        <Posts />
      </section>

      <section>
        {/* mini profile */}
        {/* suggestion */}
      </section>
    </main>
  );
};

export default Feed;
// left Sec
//   Stories
// post
// right Secs
//   mini profile
// suggestion
