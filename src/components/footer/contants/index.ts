import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";

export const SocialFooter = [
    {
        key: "facebook-icon",
        url: "/",
        components: FaFacebook,
    },
    {
        key: "linkedin-icon",
        url: "/",
        components: FaLinkedin,
    },
    {
        key: "telegram-icon",
        url: "/",
        components: FaTelegram,
    },
    {
        key: "instagram-icon",
        url: "/",
        components: FaInstagram,
    },
    {
        key: "youtube-icon",
        url: "/",
        components: FaYoutube,
    },
];

export const FooterInfo = [
    {
        title: "Projects",
        url: "/",
        children: [
            {
                title: "Airbnb",
                url: "/",
            },
            {
                title: "LuxStay",
                url: "/",
            },
        ],
    },
    {
        title: "Contact",
        url: "/",
        children: [
            {
                title: "Phone: (+84) 0868.435.714",
                url: "/",
            },
            {
                title: "Email: mainhan.nm30@gmail.com",
                url: "/",
            },
        ],
    },
];
