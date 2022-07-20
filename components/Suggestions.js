const people = [
    {
    name:'nuann1803',
    companyname:'Followed by maianh_06_ + 1 more',
      imageUrl:
        'https://upanh.cf/6mhgeizbi4.jpg',
    },
    {
    name:'nuann1803',
    companyname:'Followed by ngoctuw.206_',
        imageUrl:
        'https://upanh.cf/6mhgeizbi4.jpg',
    },
    {
    name:'nuann1803',
    companyname:'Followed by milcah_nguyen19',
        imageUrl:
        'https://upanh.cf/6mhgeizbi4.jpg',
    },
    {
    name:'nuann1803',
    companyname:'New to Instagram',
        imageUrl:
        'https://upanh.cf/6mhgeizbi4.jpg',
    },
    {
    name:'nuann1803',
    companyname:'Followed by _ngynn.tyhz',
        imageUrl:
        'https://upanh.cf/6mhgeizbi4.jpg',
    },

    
    
    // More people...
  ]
  
function Suggestions() {
  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <a href="https://www.instagram.com/nuann1803/">
            <button className="text-gray-600 font-semibold">See All</button>
            </a>
        </div>
      {people.map((person) => (
        
          <div className="flex items-center justify-between mt-3">
            <img className="w-10 h-10 rounded-full border p-[2px]" src={person.imageUrl} alt="" 
            />
            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{person.name}</h2>
                <h3 className="text-xs text-gray-400">{person.companyname}</h3>
            </div>
            <a href="https://www.instagram.com/nuann1803/">
            <button className="text-blue-400 text-sm font-semibold">Follow</button>
            </a>
          </div>
          
      ))}
    </div>
  )
}

export default Suggestions