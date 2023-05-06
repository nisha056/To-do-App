const Homepage = () => {
    return ( 
        <section className="bg-gray-700 h-screen" >
            <div className="  flex flex-col items-center justify-center px-6 py-14 ">
                
                <p className="text-xl text-white text-center m-5 "> Hi Nishi!</p>
                <div className="w-full sm:max-w-md ">
                    <div>
                   <input type="text" name="text" id="text" placeholder=" Add some task " className= "  rounded-lg bg-white  p-2 w-3/4 inline-flex"/>
                   <button className="bg-pink-400 rounded-lg font-medium text-white p-2   float-right"> + Add New</button>
                
                </div>
                <div> 
                    <p className="text-xl text-white text-center m-5"> Your ToDo List</p>
                </div>
               
                    
                    <div className="w-full bg-gray-300 rounded-lg shadow dark:border  p-6">
                        <div>
                        <form className="space-y-4 md:space-y-4" action="#">
                            <input type="text" id="text" name="text"className=" w-full bg-gray-300 rounded-lg  shadow-lg  p-4"/>
                            <input type="text" id="text" name="text"className=" w-full bg-gray-300 rounded-lg  shadow-lg  p-4"/>
                            <input type="text" id="text" name="text"className="w-full bg-gray-300 rounded-lg  shadow-lg  p-4"/>




                        </form>
                        </div>

                        </div>
                    </div>
                    

               
                

            </div>
           

        </section>
     );
}
 
export default Homepage;