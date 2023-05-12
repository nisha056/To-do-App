const Random = () => {
    return (
        
        <div className="bg-red-500 h-screen">

            <div className="flex flex-col items-center justify-center md:h-screen ">
                <div className="bg-white rounded-lg w-full p-6 sm:max-w-md">
                    <form className="space-y-3 md:space-y-4">
                        <label for ="Username" className="font-sm">Username</label>
                        <input type ="text" Name="username" id="text" className="w-full bg-gray-300 rounded-lg p-2"></input>
                        <label for ="Password " className="font-sm">Password</label>
                        <input type="password" Name="password" id="password" className="w-full bg-gray-300 rounded-lg p-2"></input>
                    </form>
                    <button onClick={handleSubmit} className="w-full bg-blue-600 rounded-lg p-2 mt-5">Login</button>
                </div>
            </div>
        </div>
      );
}
 
export default Random;