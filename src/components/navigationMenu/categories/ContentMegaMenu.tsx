import { Link } from "react-router-dom";

const ContentMegaMenu = () => {
  return (
    <div className="absolute right-0 mt-1 w-full h-[450px] bg-zinc-50 border shadow-md rounded-lg overflow-hidden">
      <div className="grid grid-cols-12 h-full bg-red-400 ">
        <div className="col-span-2 bg-green-400 overflow-y-auto flex flex-col justify-start items-start gap-4 p-4">
          <Link to="#">Test 1</Link>
          <Link to="#">Test 2</Link>
          <Link to="#">Test 3</Link>
          <Link to="#">Test 4</Link>
          <Link to="#">Test 5</Link>
          <Link to="#">Test 6</Link>
          <Link to="#">Test 7</Link>
          <Link to="#">Test 8</Link>
          <Link to="#">Test 9</Link>
          <Link to="#">Test 10</Link>
          <Link to="#">Test 11</Link>
          <Link to="#">Test 12</Link>
          <Link to="#">Test 13</Link>
          <Link to="#">Test 14</Link>
          <Link to="#">Test 15</Link>
          <Link to="#">Test 16</Link>
        </div>
        <div className="col-span-10 bg-yellow-400 overflow-y-auto p-4">
          <p>
            result 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentMegaMenu;
