const aboutParagraph = `
        Self-taught front-end developer with in-depth knowledge of HTML, CSS, JSX, JavaScript, React,
        and Next.js. I have built my knowledge of front-end technologies taking online
        classes and working on my own projects throughout the years.
    `
;

const artistBlog= {
    id: 'artistBlog',
    img: '/images/artist_blog_resize.png',
    gif: '/images/artist_blog_gif.gif',
    title: 'Artist Blog',
    repo: 'https://github.com/Kazman1596/artist-blog',
    link: 'https://artist-blog.vercel.app',
    description: `
        This is a JavaScript C.R.U.D. application utilizing Next.js and Google Firebase.
    `,
}

const instaConnect = {
    id: 'instaConnect',
    img: '/images/insta_clone_resize.png',
    gif: '/images/insta_clone_gif.gif',
    title: 'Insta-Connect',
    repo: 'https://github.com/Kazman1596/insta-clone',
    link: 'https://insta-connect-drab.vercel.app/',
    description: `
        Connect with your friends with Insta-Connect. A clone using Next.js, Google Firebase,
        and Google Authentication to track likes and comments with uploaded posts
    `,   
}

const videoSurf = {
    id: 'videoSurf',
    img: '/images/video_surf_resize.png',
    gif: '/images/video_surf_gif.gif',
    title: 'Video Surf',
    repo: 'https://github.com/Kazman1596/video_surf',
    link: 'https://video-surf.vercel.app',
    description: `
        React Application to search for videos using the YouTube API
    `,
}

const comingSoon = {
    id: 'comingSoon',
    img: '/images/under-construction.png',
    gif: '/images/under-construction.png',
    title: 'Twitter Clone',
    repo: null,
    link: null,
    description: `
        Next.js C.R.U.D. application to follow and keep up to date with your friends
    `,
}

const projectArray = [
    artistBlog,
    
    instaConnect,
    
    videoSurf,

    comingSoon,
]

export {aboutParagraph, artistBlog, instaConnect, videoSurf, projectArray, comingSoon}