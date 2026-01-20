const buildUrl = (width, height, query, sig) =>
  `https://source.unsplash.com/${width}x${height}/?${query}&sig=${sig}`;

export const heroUrl = buildUrl(2400, 1400, "interior,living-room", 11);
export const aboutUrl = buildUrl(1400, 1000, "interior,materials", 12);

export const portfolioUrls = [
  {
    img: buildUrl(1600, 1200, "interior,kitchen", 21),
    thumb: buildUrl(900, 700, "interior,kitchen", 21),
  },
  {
    img: buildUrl(1600, 1200, "interior,bedroom", 22),
    thumb: buildUrl(900, 700, "interior,bedroom", 22),
  },
  {
    img: buildUrl(1600, 1200, "interior,bathroom", 23),
    thumb: buildUrl(900, 700, "interior,bathroom", 23),
  },
  {
    img: buildUrl(1600, 1200, "interior,entryway", 24),
    thumb: buildUrl(900, 700, "interior,entryway", 24),
  },
  {
    img: buildUrl(1600, 1200, "interior,nursery", 25),
    thumb: buildUrl(900, 700, "interior,nursery", 25),
  },
  {
    img: buildUrl(1600, 1200, "interior,home-office", 26),
    thumb: buildUrl(900, 700, "interior,home-office", 26),
  },
];

export const photosUrls = [
  {
    img: buildUrl(1800, 1350, "interior,living-room", 31),
    thumb: buildUrl(900, 700, "interior,living-room", 31),
  },
  {
    img: buildUrl(1800, 1350, "interior,kitchen", 32),
    thumb: buildUrl(900, 700, "interior,kitchen", 32),
  },
  {
    img: buildUrl(1800, 1350, "interior,bedroom", 33),
    thumb: buildUrl(900, 700, "interior,bedroom", 33),
  },
  {
    img: buildUrl(1800, 1350, "interior,bathroom", 34),
    thumb: buildUrl(900, 700, "interior,bathroom", 34),
  },
  {
    img: buildUrl(1800, 1350, "interior,dining-room", 35),
    thumb: buildUrl(900, 700, "interior,dining-room", 35),
  },
  {
    img: buildUrl(1800, 1350, "interior,materials", 36),
    thumb: buildUrl(900, 700, "interior,materials", 36),
  },
];

export const avatars = [
  buildUrl(1200, 900, "interior,detail", 41),
  buildUrl(1200, 900, "interior,texture", 42),
  buildUrl(1200, 900, "interior,lighting", 43),
];

export const beforeUrl = buildUrl(1600, 1000, "interior,old", 51);
export const afterUrl = buildUrl(1600, 1000, "interior,modern", 52);
