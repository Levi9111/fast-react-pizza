import { useSelector } from "react-redux";
import CreateUser from "../Features/User/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="mb-8 text-xl text-stone-700 font-bold md:text-3xl">
        The best pizza.
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
