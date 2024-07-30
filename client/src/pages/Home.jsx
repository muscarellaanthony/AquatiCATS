import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";
import Auth from '../utils/auth'
const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <div>{Auth.loggedIn() ? (<div>Logged in</div>) : (<div>Not logged in</div>)}</div> {/* remove later*/}
      <div className="w-full mainFont md:w-1/4 flex justify-center items-center text-yellow-500 rounded text-3xl md:text-4xl my-10">
        Recent Updates
      </div>
      <div className="card-cont flex justify-center">
        {/* TODO- turn this into a component once back end is hooked up */}
        <Card className="max-w-sm">
          <div className="mb-4 flex items-center justify-between ">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white flex flex-col">
              User's Name
            </h5>
            <div className="text-sm italic leading-none text-gray-900 dark:text-white flex flex-col">
              <h4>07/27/2024</h4>
              <h4>12:50AM EST</h4>
            </div>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink text-2xl mx-4 text-gray-400">
              Post Title
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="flow-root">
            <div
              className={`text-sm font-medium text-gray-900 dark:text-white ${
                !isExpanded ? "max-h-24 truncate" : ""
              }`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus voluptates vero officia, pariatur laboriosam minima
              assumenda deleniti voluptatum debitis qui recusandae aspernatur
              asperiores nisi non iure aliquam incidunt error tempora.
            </div>
            {isExpanded && (
              <Button
                type="submit"
                outline
                className="w-max isProcessing btn-mary"
                onClick={() => console.log("You asked a question, yo")}
              >
                Ask A Question
              </Button>
            )}
            <button
              onClick={toggleExpand}
              className="text-blue-500 mt-2 cursor-pointer hover:underline more-mary"
            >
              {isExpanded ? "less" : "more"}
            </button>{" "}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;
