const aboutParagraph = `
        My name is Stephen Kaczmarowski.
    `
;

const travelBlog= {
    id: 'travelBlog',
    img: '/images/test_app_image.jpeg',
    title: 'Travel Blog',
    link: '/',
    description: `
        This is a C.R.U.D. application utilizing Google Firebase.
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