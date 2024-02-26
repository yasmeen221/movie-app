
import { useSelector } from "react-redux";
import MoveWatch from "./MoveWatch";


const WatchLists = () => {
  const moveWatch = useSelector((state) => state.watchLists.list);

  console.log(moveWatch);

  return (
    <div>
      <MoveWatch movie={moveWatch}/>
    
    </div>
  );
};

export default WatchLists;
