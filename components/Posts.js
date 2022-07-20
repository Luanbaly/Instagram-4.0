import Post from "./Post"

const posts = [
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/5zsg5eceqs.jpg',
        caption: "Bố Mẹ luôn đặt lên đầu <3",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/6k10sgoj38.jpg',
        caption: "Không chê bai hay đánh giá người khác khi họ thất bại!",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/6mhgeizbi4.jpg',
        caption: "Nói ít thực hành nhiều!",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/j85ow2h34i.jpg',
        caption: "Lễ phép với người trên tuổi mình@@",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/nv690y9w50.jpg',
        caption: "Hoàn thành mục tiêu khi đặt ra!",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/je2iq9u5cc.jpg',
        caption: "Mỗi ngày là một bài học cho mình <3",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/ik99xo1zee.jpg',
        caption: "Thành công sẽ đến nếu mình có thật nhiều cố Gắng <3",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/0zwk64q6av.png',
        caption: "kiềm chế sự giận giữ trong mình!",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/jxqrff1b3u.jpg',
        caption: "Mỗi ngày học 1 từ Tiếng Anh.",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/l5wwe9sgdi.jpg',
        caption: "Yêu phải thật lòng <3",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/dzdbsrsx83.png',
        caption: "Tiết Kiệm",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/md2h3ityql.jpg',
        caption: "né tránh cái xấu học cái tốt!",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/ncifrfv95k.jpg',
        caption: "Gia Đình <3",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/o9j25gnbmr.png',
        caption: "Iphone moi nhat <3",
    },
    {
        id:123,
        username:'nuannn1803',
        userImg: 'https://upanh.cf/6mhgeizbi4.jpg',
        img:'https://upanh.cf/uk2lfnnrr0.jpg',
        caption: "oto cho Bố Mẹ đi chơi <3",
    },
];

function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post 
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts