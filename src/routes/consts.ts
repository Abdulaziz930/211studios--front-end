export const APP_ROUTES = {
  Home: {
    PATH: "/",
  },
  GAME: {
    PATH: "/games",
    DETAILS: {
      PATH: "/games/:id",
    },
  },
  STUDIO: {
    PATH: "/our-studios",
    TEAM_MEMBER_DETAIL: {
      PATH: "/team-member/:id",
    },
  },
  CONTACT: {
    PATH: "/contact",
  },
  BLOG: {
    PATH: "/blog",
    DETAILS: {
      PATH: "/blog/:id",
    },
    AUTHOR_BLOG: {
      PATH: "/blog/author/:id",
    },
  },
};
