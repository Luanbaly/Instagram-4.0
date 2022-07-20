const people = [
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/6mhgeizbi4.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/6k10sgoj38.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/dxh4qpkp1o.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/sk6v3csp04.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/j85ow2h34i.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/nv690y9w50.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/je2iq9u5cc.jpg',
  },
  {
    name: 'nuann1803',
    imageUrl:
      'https://upanh.cf/ik99xo1zee.jpg',
  },
  
  
  
  // More people...
]

export default function Stories() {
  return (
    <ul role="list" className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {people.map((person) => (
        <li
          className=""
        >
          <div className="">
            <a href="https://www.instagram.com/nuann1803/">
            <img className="h-16 w-16 rounded-full p-[2px] border-red-500 border-2 cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src={person.imageUrl} alt="" />
            <h3 className="text-xs w-14  truncate text-center">{person.name}</h3>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
