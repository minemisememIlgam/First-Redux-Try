import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import Post from "./components/Post";
function App() {
  return (
    <div className="conteiner">
      <div className="row">
        <div className="col">
          <h2>Synchronní Příspěvky</h2>
          <PostForm />
        </div>
        <div className="row">
          <div className="col">
            <Posts posts={[1, 2, 3, 4]} />
          </div>
          <div className="col">
            <h2>Asynchronní Příspěvky</h2>
            <FetchedPosts posts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
