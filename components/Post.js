import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
        {/* Header */}
    <div className="flex items-center p-5">
        <img src={userImg} className="w-12 h-12 rounded-full mr-3 border p-[2px]" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
    </div>

    {/* img */}
    <img src={img} className="object-cover w-full" alt="" />

    {/* Buttons */}
    <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
            <a href="https://www.instagram.com/nuann1803/">
            <HeartIcon className="btn" />
            </a>
            <a href="https://www.instagram.com/nuann1803/">
            <ChatIcon className="btn"/>
            </a>
            <a href="https://www.instagram.com/nuann1803/">
            <PaperAirplaneIcon className="btn"/>
            </a>
        </div>

        <BookmarkIcon className="btn"/>
    </div>

    {/* caption */}
    <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
    </p>
    {/* comments */}

    {/* input box */}
    <form className="flex items-center p-4">
        <a href="https://www.instagram.com/nuann1803/">
        <EmojiHappyIcon className="h-7" />
        </a>
        <input 
        type="text" 
        placeholder="Add a comment..."
        className="border-none flex-1 focus:ring-0 outline-none" />
        <a href="https://www.instagram.com/nuann1803/">
        <button className="font-semibold text-blue-400">Post</button>
        </a>
    </form>
    </div>
  )
}

export default Post