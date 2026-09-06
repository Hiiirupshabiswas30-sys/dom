const reels = [
  {
    username: "arjun.dev",
    likeCount: 12450,
    isLiked: false,
    commentCount: 342,
    caption: "Building something amazing today 🚀",
    video: "/reels/1.mp4",
    userprofile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    shareCount: 128,
    isFollowed:false ,
    date: "2026-09-01"
  },
  {
    username: "riya.codes",
    likeCount: 8750,
    isLiked: true,
    commentCount: 186,
    caption: "Late night coding hits different 💻✨",
    video: "/reels/2.mp4",
    userprofile: "https://i.pravatar.cc/150?img=47",
    shareCount: 94,
    isFollowed: true,
    date: "2026-09-02"
  },
  {
    username: "rahul.travel",
    likeCount: 21300,
    isLiked: true,
    commentCount: 521,
    caption: "Lost in the beauty of nature 🌿🏔️",
    video: "/reels/3.mp4",
    userprofile: "https://i.pravatar.cc/150?img=11",
    shareCount: 340,
    isFollowed: false,
    date: "2026-09-02"
  },
  {
    username: "neha.fit",
    likeCount: 15600,
    isLiked: false,
    commentCount: 287,
    caption: "No excuses. Just progress 💪🔥",
    video: "/reels/4.mp4",
    userprofile: "https://i.pravatar.cc/150?img=32",
    shareCount: 215,
    isFollowed: true,
    date: "2026-09-03"
  },
  {
    username: "sourav.music",
    likeCount: 9820,
    isLiked: true,
    commentCount: 198,
    caption: "Music is the language of the soul 🎶❤️",
    video: "/reels/5.mp4",
    userprofile: "https://i.pravatar.cc/150?img=68",
    shareCount: 76,
    isFollowed: false,
    date: "2026-09-03"
  },
  {
    username: "ananya.foodie",
    likeCount: 18750,
    isLiked: true,
    commentCount: 403,
    caption: "Good food, good mood 🍕😋",
    video: "/reels/1.mp4",
    userprofile: "https://i.pravatar.cc/150?img=25",
    shareCount: 189,
    isFollowed: true,
    date: "2026-09-04"
  },
  {
    username: "vikas.photography",
    likeCount: 7430,
    isLiked: false,
    commentCount: 124,
    caption: "Chasing golden hour 🌅📸",
    video: "/reels/2.mp4",
    userprofile: "https://i.pravatar.cc/150?img=5",
    shareCount: 63,
    isFollowed: false,
    date: "2026-09-04"
  },
  {
    username: "megha.art",
    likeCount: 11200,
    isLiked: true,
    commentCount: 245,
    caption: "Turning imagination into reality 🎨✨",
    video: "/reels/3.mp4",
    userprofile: "https://i.pravatar.cc/150?img=44",
    shareCount: 137,
    isFollowed: true,
    date: "2026-09-05"
  },
  {
    username: "rohan.tech",
    likeCount: 19600,
    isLiked: false,
    commentCount: 376,
    caption: "Tech tips that actually make life easier 🤖💡",
    video: "/reels/4.mp4",
    userprofile: "https://i.pravatar.cc/150?img=13",
    shareCount: 267,
    isFollowed: false,
    date: "2026-09-05"
  },
  {
    username: "sneha.daily",
    likeCount: 6540,
    isLiked: true,
    commentCount: 109,
    caption: "Little moments, big memories 🌸💫",
    video: "/reels/5.mp4",
    userprofile: "https://i.pravatar.cc/150?img=49",
    shareCount: 51,
    isFollowed: true,
    date: "2026-09-05"
  }
];

var sum = ''
reels.forEach(function (elem) {
    sum = sum + ` <div class="reel">
                   <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                           <img src="${elem.userprofile}" alt="">
                           <h3>${elem.username}</h3>
                           <button>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                         <h2>${elem.caption}</h2>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>' }</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                         <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                          <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                            
                        </div>
                    </div>
                </div>`
})

var allReels = document.querySelector('.all-reels')

allReels.innerHTML = sum

