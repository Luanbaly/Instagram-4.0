function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img
        className="w-16 h-16 rounded-full border p-[2px]"
         src="https://upanh.cf/6mhgeizbi4.jpg" 
         alt=""
         />

         <div className="flex-1 mx-4">
            <h2 className="font-bold">nuann1803</h2>
            <h3 className="text-sm text-gray-400">Lý Bá Luận</h3>
         </div>
        <div className="pl-2">
          <a href="https://www.instagram.com/nuann1803/">
         <button className="text-blue-400 text-sm font-semibold">Switch</button>
         </a>
         </div>
    </div>
  )
}

export default MiniProfile