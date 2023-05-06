const  Signup = () => {
    return ( 
        
        <div className=" bg-gray-700  ">
        

        
        <div className="flex flex-col items-center justify-center px-6 py-2  md:h-screen  ">
        <div className="w-full bg-gray-300 rounded-lg shadow dark:border  sm:max-w-md  ">
            <div className="p-6">

                <form className= "space-y-3 md:space-y-4" action="#">
                    <div>
                        <label for ="email" className=" text-sm font-medium text-gray">Username</label>
                        <input type="email" name="email" id="email" className= "bg-white  border-gray-300 text-black sm:text-sm rounded-lg  w-full p-2 "/>
                    </div>
                    <div>
                        <label for ="password" className=" text-sm font-medium text-gray "> Password</label>
                        <input type="password" name-="password" id="password" className="bg-white border-gray-300 text-black sm:text-sm rounded-lg w-full p-2"/>
                    </div>
                </form>
                <div>
                    <button className="bg-pink-400 rounded-lg font-medium mt-5 w-full p-2">Sign Up</button>
                </div>
                <div>
                    <p className="font-medium mt-5 ">Already have an account?
                    <a href="#" className=" font-medium text-blue-500 hover:underline inline-flex m-2 ">Login</a>
                    </p>
                </div>
            </div>
        </div>
            


        
       </div>
       
       </div> 
      
       

        
         
     );
}
 
export default Signup ;