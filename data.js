import product1 from './public/assets/header/cart_p01.jpg'
import product2 from './public/assets/header/cart_p02.jpg'

import sliderHome1 from './public/assets/home/slider_bg.jpg'
import sliderHome2 from './public/assets/home/slider_bg.jpg'

// Social Links
import { FaXTwitter, FaFacebookF, FaPinterestP, FaInstagram} from "react-icons/fa6";

// Service Data
import { IoGameController } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";

// Offer Products Data
import offer1 from './public/assets/home/offer_product01.jpg'
import offer2 from './public/assets/home/offer_product02.jpg'

// Popular Games Data
import popularG1 from './public/assets/home/popular_games01.jpg'
import popularG2 from './public/assets/home/popular_games02.jpg'
import popularG3 from './public/assets/home/popular_games03.jpg'
import popularG4 from './public/assets/home/popular_games04.jpg'
import popularG5 from './public/assets/home/popular_games05.jpg'
import popularG6 from './public/assets/home/popular_games06.jpg'
import popularG7 from './public/assets/home/popular_games07.jpg'
import popularG8 from './public/assets/home/popular_games08.jpg'

// Best Games Data
import bestG1 from './public/assets/home/game_thumb01.jpg'
import bestG2 from './public/assets/home/game_thumb02.jpg'
import bestG3 from './public/assets/home/game_thumb03.jpg'
import bestG4 from './public/assets/home/game_thumb04.jpg'
import bestG5 from './public/assets/home/game_thumb05.jpg'
import bestG6 from './public/assets/home/game_thumb06.jpg'
import bestG7 from './public/assets/home/game_thumb07.jpg'
import bestG8 from './public/assets/home/game_thumb08.jpg'
import bestG9 from './public/assets/home/game_thumb09.jpg'

// Blogs Img Data
import blog1 from './public/assets/blog/blog_thumb01.jpg'
import blog2 from './public/assets/blog/blog_thumb02.jpg'
import blog3 from './public/assets/blog/blog_thumb03.jpg'
import blog4 from './public/assets/blog/blog_thumb04.jpg'
// Blog Details Data
import avatar1 from './public/assets/blog-details/post_avatar_img.png'
// Blog Details Comments
import comment1Img from './public/assets/blog-details/comment_thumb01.png'
import comment2Img from './public/assets/blog-details/comment_thumb02.png'
import comment3Img from './public/assets/blog-details/comment_thumb03.png'
//sideBar Data
import imgRC1 from './public/assets/blog-sidebar/rc_post_thumb01.jpg'
import imgRC2 from './public/assets/blog-sidebar/rc_post_thumb02.jpg'
import imgRC3 from './public/assets/blog-sidebar/rc_post_thumb03.jpg'
import trend1 from './public/assets/blog-sidebar/sidebar_game01.jpg'
import trend2 from './public/assets/blog-sidebar/sidebar_game02.jpg'
import trend3 from './public/assets/blog-sidebar/sidebar_game03.jpg'
import trend4 from './public/assets/blog-sidebar/sidebar_game04.jpg'
// Contact Page Details
import { MdLocationPin } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaHeadphonesSimple } from 'react-icons/fa6';

// Product Lists 
import pro1 from './public/assets/shop/products/shop_product01.jpg'
import pro2 from './public/assets/shop/products/shop_product02.jpg'
import pro3 from './public/assets/shop/products/shop_product03.jpg'
import pro4 from './public/assets/shop/products/shop_product04.jpg'
import pro5 from './public/assets/shop/products/shop_product05.jpg'
import pro6 from './public/assets/shop/products/shop_product06.jpg'



export const socialLinks = [
    {
        icon: <FaFacebookF/>,
        link: '#'
    },
    {
        icon: <FaXTwitter/>,
        link: '#'
    },
    {
        icon: <FaPinterestP/>,
        link: '#'
    },
    {
        icon: <FaInstagram/>,
        link: '#'
    }
]
// Home Page Data
export const cartData = [
    {
        img: product1,
        name: 'Xbox One Contr -oller',
        newPrice: 229.9,
        oldPrice: 259.9
    },
    {
        img: product2,
        name: 'rtx 2030 graphic card',
        newPrice: 499.9,
        oldPrice: 599.9
    }
]
export const homeSlider = [
    {
        img: sliderHome1,
        title1: 'CREATE AND',
        italic: 'game',
        title2: 'online Matches',
        desc: 'Largest and most trusted top-up websites for games and online entertainment in Asia and beyond.'
    },
    
    {
        img: sliderHome2,
        title1: 'CREATE AND',
        italic: 'game',
        title2: 'online Matches',
        desc: 'Largest and most trusted top-up websites for games and online entertainment in Asia and beyond.'
            
    },

]
export const serviceData = [
    {
        icon: <IoGameController/>,
        title: 'Games',
        desc: 'Discover Games World'
    },
    {
        icon: <CgMediaLive/>,
        title: 'Social Media',
        desc: 'Discover Social Media World'
    },
    {
        icon: <MdOutlinePayment/>,
        title: 'Wallet CardS',
        desc: 'Discover Wallet Cards World'
    }
]
export const offerProducts = [
    {
        img: offer1,
        title1: 'limited',
        italic1: 'offer',
        title2: 'Virtual pro',
        italic2: 'vr',
        desc: 'VR headset transparent png Teddy Rawpixel.publisn graphic.',
        location: ''
    },
    {
        img: offer2,
        title1: 'limited',
        italic1: 'O5% OFF',
        title2: 'XBOX',
        italic2: 'SERIES PRO',
        desc: 'VR headset transparent png Teddy Rawpixel.publisn graphic.',
        location: ''
    }
]
export const popularGames = [
    {
        id: 'pg1',
        location: '',
        img: popularG1,
        name: 'judge destiny',
        price: 600
    },
    {
        id: 'pg2',
        location: '',
        img: popularG2,
        name: 'klck esports',
        price: 600
    },
    {
        id: 'pg3',
        location: '',
        img: popularG3,
        name: 'battle pubg',
        price: 600
    },
    {
        id: 'pg4',
        location: '',
        img: popularG4,
        name: 'judge destiny',
        price: 600
    },
    {
        id: 'pg5',
        location: '',
        img: popularG5,
        name: 'call of duty',
        price: 600
    },
    {
        id: 'pg6',
        location: '',
        img: popularG6,
        name: 'valorant ii',
        price: 600
    },
    {
        id: 'pg7',
        location: '',
        img: popularG7,
        name: 'clash of clans',
        price: 600
    },
    {
        id: 'pg8',
        location: '',
        img: popularG8,
        name: 'pubg mobile',
        price: 600
    },    
]
export const bestGames = [
    {
        img: bestG1,
        name: 'pubg mobile 600 u.c online',
        price: 12
    },
    {
        img: bestG2,
        name: 'i.g.i.is a mobile 600 u.c online',
        price: 12
    },
    {
        img: bestG3,
        name: 'zombie hunter mobile 600 u.c online',
        price: 12
    },
    {
        img: bestG4,
        name: 'sky warrior mobile 600 u.c online',
        price: 12
    },
    {
        img: bestG5,
        name: 'dota 2 is popular pro because',
        price: 12
    },
    {
        img: bestG6,
        name: 'sky warrior king shephds',
        price: 12
    }
]
export const mostPopularGames = [
    {
        img: bestG7,
        name: 'sky warrior mobile 600 u.c online',
        price: 59
    },
    {
        img: bestG8,
        name: 'pubg uc genera tor plan online',
        price: 99
    },
    {
        img: bestG9,
        name: 'dota 2 is popular pro because',
        price: 99
    }
]
export const footerTrendGames = [
    {
        game: 'The King: Judge Destiny'
    },
    {
        game: 'PUBG Mobile UC'
    },
    {
        game: 'Era of Celestials'
    },
    {
        game: 'Legacy of Discord'
    }
]
export const needHelpFooter = [
    {
        title: 'Terms & Conditions'
    },
    {
        title: 'Privacy Policy'
    },
    {
        title: 'Refund Policy'
    },
    {
        title: 'FAQ Use Cases'
    }
]
export const recentCommentsFooter = [
    {
        name: 'Elon Musk',
        comment: 'Designed for Support Our super suppor'
    },
    {
        name: 'Jonny Bairstow',
        comment: 'Wired Full Coverag Super Support Bra'
    },
    {
        name: 'Tomas Musk',
        comment: 'Top game for Support Our super suppor'
    }
]

// Blog Page Data
export const blogsData = [
    {
        img: blog1,
        badge: 'pubg',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            },
            {
                tag: 'igi2',
                link: '#'
            }
        ],
        avatar: {
            img: avatar1,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        comments: [
            {
                img: comment1Img,
                name: 'erecka malson',
                date: '10 MAR 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .' ,
                reply: [
                    {
                        img: comment2Img,
                        name: 'Jonny Bairstow',
                        date: '20 MAR 2024',
                        comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
                    },
                    {
                        img: comment3Img,
                        name: 'Rohan De Spond',
                        date: '01 APR 2024',
                        comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
                    },
                ]
            },
            {
                img: comment2Img,
                name: 'janet jackson',
                date: '20 Fab 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'
            },
            {
                img: comment3Img,
                name: 'Lara fabian',
                date: '23 jan 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
            }
        ],
        user: 'tomas alexa',
        date: ' March 04, 2024',
        
    },
    {
        img: blog2,
        badge: 'skyward',
        title: 'SKYWARD SWORD IS AN ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'pubg',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'igi2',
                link: '#'
            }
        ],
        avatar: {
            img: comment1Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        comments: [
            {
                img: avatar1,
                name: 'erecka malson',
                date: '20 MAR 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .' ,
                reply: [
                    {
                        img: comment2Img,
                        name: 'Jonny Bairstow',
                        date: '20 MAR 2024',
                        comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
                    },
                ]
            },
        ],
        user: 'vivan alexa',
        date: ' April 10, 2024',
    },
    {
        img: blog3,
        badge: 'doto 2',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            },
            {
                tag: 'igi2',
                link: '#'
            }
        ],
        avatar: {
            img: avatar1,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        comments: [
            {
                img: comment1Img,
                name: 'erecka malson',
                date: '10 MAR 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .' ,
            },
            {
                img: comment2Img,
                name: 'janet jackson',
                date: '20 Fab 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
                reply: [
                    {
                        img: comment2Img,
                        name: 'Jonny Bairstow',
                        date: '20 MAR 2024',
                        comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
                    },
                    {
                        img: comment3Img,
                        name: 'Rohan De Spond',
                        date: '01 APR 2024',
                        comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
                    },
                ]
            },
            {
                img: comment3Img,
                name: 'Lara fabian',
                date: '23 jan 2024',
                comment: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .',
            }
        ],
        user: 'alexa alexa',
        date: ' May 05, 2024',
        
    },
    {
        img: blog4,
        badge: 'skyward',
        title: 'FORZA HORIZON 4 PLAY ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog3,
        badge: 'doto 2',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
        
    },
    {
        img: blog4,
        badge: 'skyward',
        title: 'FORZA HORIZON 4 PLAY ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog1,
        badge: 'pubg',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog2,
        badge: 'skyward',
        title: 'SKYWARD SWORD IS AN ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog4,
        badge: 'skyward',
        title: 'FORZA HORIZON 4 PLAY ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog3,
        badge: 'doto 2',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog2,
        badge: 'skyward',
        title: 'SKYWARD SWORD IS AN ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog1,
        badge: 'pubg',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog2,
        badge: 'skyward',
        title: 'SKYWARD SWORD IS AN ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog3,
        badge: 'doto 2',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog1,
        badge: 'pubg',
        title: 'USING FREE ONLINE MATCH',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
    {
        img: blog4,
        badge: 'skyward',
        title: 'FORZA HORIZON 4 PLAY ADVENTURE',
        desc: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed.',
        descOne: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descTwo: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        descThree: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown .',
        descFour: 'Math by using free-online math games. Educational math games provide fun and focsed retition pract Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math games provide focsed sometimes known, is dummy text used in laying out graphics or web designs. The passage is attributed to an unknown typeseter.',
        tags: [
            {
                tag: 'igi2',
                link: '#'
            },
            {
                tag: 'DOTA 2',
                link: '#'
            },
            {
                tag: 'pubg',
                link: '#'
            }
        ],
        avatar: {
            img: comment3Img,
            name: 'bryan adams',
            desc: 'Download App Play Online. No Download Required. Highlights text of the printing and typeseng industry ducational math .'

        },
        user: 'tomas alexa',
        date: ' August 20, 2023',
        comments: [

        ]
    },
]
export const blogCategories = [
    {
        name: 'skywarrior',
        no: 12
    },
    {
        name: 'pubg mobile',
        no: 9
    },
    {
        name: 'dota 2',
        no: 3
    },
    {
        name: 'hante warrior',
        no: 8
    }
]
export const sidebarRC = [
    {
        img: imgRC1,
        title: 'using free online math adventure',
        date: 'March 04, 2024'
    },
    {
        img: imgRC2,
        title: 'Skyward Sword is an adventure',
        date: 'April 10, 2024'
    },
    {
        img: imgRC3,
        title: 'Hill Climb Racing 2 is a free to racing',
        date: 'May 15, 2023'
    }
]
export const sidebarTrendGames = [
    {
        img: trend1
    },
    {
        img: trend2
    },
    {
        img: trend3
    },
    {
        img: trend4
    }
]
export const sidebarTags = [
    {
        tag: 'doto 2'
    },
    {
        tag: 'Skyward'
    },
    {
        tag: 'Pubg'
    },
    {
        tag: 'The Legend'
    },
    {
        tag: 'killer hunt'
    },
    {
        tag: 'who'
    }
]
export const contactCrads = [
    {
        icon: <MdLocationPin/>,
        title: 'Our Location',
        content: [
            {
                desc: 'Visit us 92 Parkland St. New York, NY 7013, USA'
            }
        ]
    },
    {
        icon: <FaEnvelopeOpenText/>,
        title: 'Mail us',
        content: [
            {
                desc: 'Game.dona@mail.com'
            },
            {
                desc: 'info@mail.com'
            }
        ]
    },
    {
        icon: <FaHeadphonesSimple/>,
        title: 'Call us',
        content: [
            {
                desc: '+1 (990) 555 353 845'
            },
            {
                desc: '+1 (990) 444 353 846'
            }
        ]
    }
]
export const productList = [
    {
        id: 1,
        img: pro1,
        name: 'gaming headphone',
        price: 29,
        orders: 20,
        views: 35,
        category: 'accessories',
        createdAt: "2023-12-29"
    },
    {
        id: 2,
        img: pro2,
        name: 'monitor hd',
        price: 49,
        orders: 15,
        views: 20,
        category: 'electronics',
        createdAt: "2024-04-10"
    },
    {
        id: 3,
        img: pro3,
        name: 'gaming chair',
        price: 99,
        orders: 13,
        views: 20,
        category: 'accessories',
        createdAt: "2024-03-20"
    },
    {
        id: 4,
        img: pro4,
        name: 'gaming laptop',
        price: 599,
        orders: 15,
        views: 30,
        category: 'electronics',
        createdAt: "2024-05-10"
    },
    {
        id: 5,
        img: pro5,
        name: 'xbox controller',
        price : 159,
        orders: 10,
        views: 18,
        category: 'accessories',
        createdAt: "2024-02-18"
    },
    {
        id: 6,
        img: pro6,
        name: 'graphics card',
        price: 499,
        orders: 5,
        views: 10,
        category: 'electronics',
        createdAt: "2024-05-15"
    },
    {
        id: 7,
        img: pro3,
        name: 'Virtual pro',
        price: 49,
        orders: 8,
        views: 16,
        category: 'electronics',
        createdAt: "2024-04-10"
    },
    {
        id: 8,
        img: pro2,
        name: 'monitor hd',
        price: 89,
        orders: 12,
        views: 24,
        category: 'electronics',
        createdAt: "2024-01-31"
    },
    {
        id: 9,
        img: pro3,
        name: 'gaming chair',
        price: 69,
        orders: 4,
        views: 9,
        category: 'accessories',
        createdAt: "2024-03-10"
    },
    {
        id: 10,
        img: pro1,
        name: 'gaming headphone',
        price: 39,
        orders: 13,
        views: 28,
        category: 'accessories',
        createdAt: "2024-02-10"
    },
    {
        id: 11,
        img: pro6,
        name: 'graphics card',
        price: 399,
        orders: 12,
        views: 21,
        category: 'electronics',
        createdAt: "2023-10-15"
    },
    {
        id: 12,
        img: pro5,
        name: 'xbox controller',
        price: 189,
        orders: 7,
        views: 23,
        category: 'accessories',
        createdAt: "2024-12-12"
    },
    {
        id: 13,
        img: pro1,
        name: 'gaming headphone',
        price: 19,
        orders: 8,
        views: 33,
        category: 'accessories',
        createdAt: "2024-05-12"
    },
    {
        id: 14,
        img: pro6,
        name: 'graphics card',
        price: 359,
        orders: 11,
        views: 21,
        category: 'electronics',
        createdAt: "2024-01-13"
    },
    {
        id: 15,
        img: pro4,
        name: 'gaming laptop',
        price: 549,
        orders: 30,
        views: 41,
        category: 'electronics',
        createdAt: "2024-02-10"
    },
    {
        id: 16,
        img: pro3,
        name: 'gaming chair',
        price: 69,
        orders: 17,
        views: 29,
        category: 'accessories',
        createdAt: "2024-05-10"
    },
]
export const filterList = [
    {
        filter: 'All'
    },
    {
        filter: 'best selling'
    },
    {
        filter: 'best watch'
    },
    {
        filter: 'price high to low'
    },
    {
        filter: 'price low to high'
    }
]

export const ordersData = [
    {
        order: 1,
        date: "2024-02-10",
        total: '50 $',
        status: 'in progress'
    },
    {
        order: 2,
        date: "2024-01-30",
        total: '80 $',
        status: 'done'
    },
    {
        order: 3,
        date: "2024-01-20",
        total: '30 $',
        status: 'done'
    },
    {
        order: 4,
        date: "2023-12-19",
        total: '50 $',
        status: 'done'
    },
    {
        order: 5,
        date: "2023-11-10",
        total: '50 $',
        status: 'done'
    },
    {
        order: 6,
        date: "2023-10-15",
        total: '90 $',
        status: 'declined'
    },
    {
        order: 7,
        date: "2023-09-20",
        total: '30 $',
        status: 'done'
    },
    {
        order: 8,
        date: "2024-04-10",
        total: '100 $',
        status: 'in progress'
    },
    {
        order: 9,
        date: "2024-03-10",
        total: '50 $',
        status: 'done'
    },
    {
        order: 10,
        date: "2024-01-10",
        total: '50 $',
        status: 'done'
    },
    {
        order: 11,
        date: "2023-05-10",
        total: '50 $',
        status: 'declined'
    },
    {
        order: 12,
        date: "2024-06-20",
        total: '90 $',
        status: 'done'
    },
    {
        order: 13,
        date: "2024-02-18",
        total: '120 $',
        status: 'declined'
    },
    {
        order: 14,
        date: "2023-08-10",
        total: '60 $',
        status: 'done'
    }
]




