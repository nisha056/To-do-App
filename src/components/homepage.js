import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [user, setUser] = useState(null);
  const [mytodo, setMytodo] = useState(null);
  const [add, setAdd] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/user/verifytoken")
      .then((response) => {
        console.log(response);
        setUser(response.data.username);
        axios
          .get("http://localhost:8000/todo/viewtodo")
          .then((res) => {
            console.log(res);
            setMytodo(res.data.todoList);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        navigate("/login");
        console.log(error);
      });
  }, []);

  const handleClick = () => {
    axios.post("http://localhost:8000/todo/addtodo",{
        username:user,
        todoContent:add
    }).then((res)=>{
        setAdd("");
        console.log(res);
        
    })
    .catch(err=>{
        console.log(err);
        
    })
  };
  return (
    <section className="bg-gray-700 h-screen">
      <div className="  flex flex-col items-center justify-center px-6 py-14 ">
        <p className="text-xl text-white text-center m-5 "> Hi {user}!</p>
        <div className="w-full sm:max-w-md ">
          <div>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Add some task "
              value={add}
              onChange={(e) => {
                setAdd(e.target.value);
              }}
              className="  rounded-lg bg-white  p-2 w-3/4 inline-flex"
            />
            <button
              onClick={handleClick}
              className="bg-pink-400 rounded-lg font-medium text-white p-2   float-right"
            >
              + Add New
            </button>
          </div>
          <div>
            <p className="text-xl text-white text-center m-5">
          
              Your ToDo List
            </p>
          </div>

          <div className="w-full bg-gray-300 rounded-lg shadow dark:border  p-6">
            {mytodo ? (
              <div>
                {mytodo.map((todo, id) => {
                  return (
                    <div key={id} className="space-y-4 md:space-y-4">
                      {todo.todoContent}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4 md:space-y-4">No todo list found</div>
            )}
            <div>
              <div className="space-y-4 md:space-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
