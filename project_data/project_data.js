const aboutParagraph = `
        My name is Stephen Kaczmarowski and I graduated Northern Arizona University with a
        Bachelor's in Microbiology and minoring in Chemistry. During COVID, I started
        learning HTML, CSS, and JavaScript through Udemy, and quickly enveloped my time
        learning these technologies.

        I have always been a creator at heart; woodworking, music production, and software
        development is no different. I love being able to create projects, applications, and
        work through my code like a puzzle, making sure each piece is in place.

        There is still so much to learn, and I am excited to grow my skills in tech for
        a long time.
    `
;

const travelBlog= {
    id: 'travelBlog',
    img: '/images/test_app_image.jpeg',
    title: 'Travel Blog',
    link: '/',
    description: `
        This is a C.R.U.D. application utilizing Google Firebase. Maybe
        make it a point to look at LSDream's website for reference. What
        a cool vibe.
    `,
}

const festivalFinder = {
    id: 'festivalFinder',
    img: '/images/test_app_image.jpeg',
    title: 'Festival Finder',
    link: '/',
    description: `
        This application utilizes Google Maps API to locate
        festivals near you.
    `,   
}

const barBack = {
    id: 'barBack',
    img: '/images/test_app_image.jpeg',
    title: 'Barback',
    link: '/',
    description: `
        Bartending application which uses CocktailAPI
        to match drinks to available ingredients.
    `,   
}

const projectArray = [
    travelBlog,
    
    festivalFinder,
    
    barBack,
]

export {aboutParagraph, travelBlog, festivalFinder, barBack, projectArray}