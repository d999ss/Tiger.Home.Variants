export interface Leader {
  name: string;
  title: string;
  department: string;
  bio: string;
  image: string;
  slug: string;
  linkedin?: string;
  twitter?: string;
  featuredQuote?: string;
  achievements?: string[];
  education?: Array<{
    degree: string;
    institution: string;
    year?: string;
  }>;
  areasOfExpertise?: string[];
  publications?: {
    count?: number;
    patents?: number;
    featured?: string[];
  };
  stats?: {
    yearsWithCompany?: string;
    teamsLed?: string;
    productsLaunched?: string;
  };
  timeline?: Array<{
    year: string;
    role: string;
    company: string;
  }>;
}

export const leaders: Leader[] = [
  {
    name: "Oliver Burckhardt",
    title: "Co-Chief Executive Officer, Co-Founder & Co-Owner",
    department: "Executive Leadership",
    slug: "oliver-burckhardt",
    bio: "As Co-Founder and Co-CEO, Oliver Burckhardt is one of the key driving forces behind the vision of and growth at Tiger BioSciences. He is actively involved in all aspects of the company from product innovation and market expansion to supporting strategic business partners. His over two decades of experience in the tissue and medical device industry serves as a foundation for his corporate strategy and entrepreneurial nature. At his core he is committed to advancing patient care and providing better solutions to clinicians and advancing science.\n\nPrior to Tiger BioSciences, Oliver co-founded and served as President & CEO of Flower Orthopedics. Prior to that, he served as President of Olympus Biotech Corporation and was also a member of its Board of Directors. Prior to Olympus, Oliver served as President and CEO of Scient'x Corp in Paris. He also has served as President of the global spine business unit for Orthofix Medical, Inc. He also was President of Alphatec Holdings, Inc. and had spent almost a decade with Aesculap, Inc. as its Vice President-Sales & Marketing. He also served as President at Blackstone Medical, Inc.",
    image: "/images/leadership/oliver-burckhardt.jpg",
    linkedin: "https://www.linkedin.com/in/oliver-burckhardt",
  },
  {
    name: "Scott Madden",
    title: "Co-Chief Executive Officer, Co-Founder & Co-Owner",
    department: "Executive Leadership",
    slug: "scott-madden",
    bio: "As Co-Founder and Co-CEO, Scott Madden is the other driving force to the evolution and development of Tiger BioSciences. He is focused on shaping our strategic direction, achieving operational excellence, and expanding into multiple healthcare verticals and markets. He excels at building and managing high-performing teams while focusing on our customer satisfaction and growth. He is known for his hands-on leadership style, deep industry insight, and dedication to building transformative healthcare businesses.\n\nPrior to Tiger BioSciences, Scott held an executive role as Vice President of Sales at Xcell Orthopedics of Chicago. During this time Scott grew the business by forming strong strategic partnerships, cultivating relationships with key customers and hospital systems and establishing the organization as a trusted industry partner.",
    image: "/images/leadership/scott-madden.jpg",
    linkedin: "https://www.linkedin.com/in/scott-madden",
  },
  {
    name: "Larry \"Buzz\" Wood, Jr.",
    title: "Chief Legal Officer",
    department: "Corporate",
    slug: "larry-buzz-wood-jr",
    bio: "Buzz Wood oversees all legal, regulatory, and compliance matters for the company's global operations. With over three decades of legal experience, Buzz brings a strategic approach to navigating the complex legal landscape of the medical technology and regenerative medicine industries.\n\nBefore joining Tiger BioSciences, Buzz was a partner in several AmLaw 100 law firms. He was most recently a Partner at Blank Rome LLP and led both its Wilmington, Delaware office and its Corporate Litigation Practice Group. He focused on counseling large, sophisticated corporate clients in all aspects of their business operations and strategy, including acquisitions, compliance, and litigation. Buzz often appeared in Delaware Courts on behalf of his corporate clients. Prior to that, he served as a Partner at Pepper Hamilton LLP. Buzz earned his Juris Doctor from Penn State Dickinson Law and a Bachelor of Arts in Political Science, German, and Music from Indiana University of Pennsylvania.",
    image: "/images/leadership/larry-buzz-wood-jr.jpg",
    linkedin: "https://www.linkedin.com/in/larry-wood",
  },
  {
    name: "John \"Jay\" Webster",
    title: "Chief People Officer",
    department: "Corporate",
    slug: "john-jay-webster",
    bio: "Jay Webster leads the company's global HR strategy and operations. He oversees all facets of the HR organization, including corporate HR, regional HR teams at company locations across the U.S., and the Talent Acquisition group. He is focused on advancing the company's People and Culture initiatives by cultivating a workplace environment that promotes professional growth, innovation, and engagement, ensuring that the company's people strategies are aligned with its vision for global impact in regenerative medicine and medical technology.\n\nWith his addition to Tiger BioSciences, Jay brought over 20 years of experience in building high-performing HR organizations by way of his prior global senior leadership role at Cencora, Inc. There he led global HR teams, guided M&A integrations, and supported large-scale growth initiatives. In addition to his Bachelor of Business Administration, he has earned a Masters in Human Resources.",
    image: "/images/leadership/john-jay-webster.jpg",
    linkedin: "https://www.linkedin.com/in/john-webster",
  },
  {
    name: "Monica Garcia",
    title: "Chief Operating Officer",
    department: "Operations",
    slug: "monica-garcia",
    bio: "Monica Garcia serves as the Chief Operating Officer for Tiger BioSciences, leading the company's overall operations, focusing on quality, regulatory, and production activities.\n\nMonica brings over 10 years of experience in quality and operations in human cell and tissue products, medical devices, and pharmaceuticals. Monica joined Tiger BioSciences in 2022 and prior to serving as COO, held various leadership roles within Tiger BioSciences, in which she built robust quality systems, regulatory functions, and successful operational models that have formed the foundation for Tiger's successful operations today. Prior to joining Tiger BioSciences, Monica worked in various quality and operations focused roles at GenCure and DPT Laboratories. Monica holds a Bachelor's of Science degree in Microbiology with a Minor in Chemistry as well as a Master's of Science degree in Healthcare Administration.",
    image: "/images/leadership/monica-garcia.jpg",
    linkedin: "https://www.linkedin.com/in/monica-garcia",
  },
  {
    name: "David Fischer",
    title: "Chief Financial Officer",
    department: "Finance",
    slug: "david-fischer",
    bio: "David Fischer is the Chief Financial Officer and responsible for all financial operations across the company's global footprint. A seasoned finance executive with over 25 years of experience driving performance, profitability, and transformation across global manufacturing and industrial organizations, David is deploying his vast expertise to implement strategic solutions to Tiger in the areas of financial planning, supply chain finance, M&A integration, treasury, risk management, and global business transformation.\n\nDavid is a trusted advisor to executive leadership, with a proven ability to navigate complex matrix organizations and lead through crisis and change. Known for his strategic mindset and ability to build high-performing teams, David has held senior leadership roles at Integra LifeSciences, Steel Partners, and Tyco International (TE Connectivity & Covidien), where he consistently delivered margin expansion, operational improvements, and enterprise value creation. His international experience includes a multi-year expatriate assignment in Luxembourg. David holds an MBA in Strategic Management & Finance from the University of Florida and dual bachelor's degrees in Economics and Management Science from SUNY Cortland. He is also an alum of the Executive Leadership Program at Boston University.",
    image: "/images/leadership/david-fischer.jpg",
    linkedin: "https://www.linkedin.com/in/david-fischer",
  },
  {
    name: "Caroline Van Hove",
    title: "President, Tiger Aesthetics Medical",
    department: "Business Units",
    slug: "caroline-van-hove",
    bio: "Caroline (Caro) Van Hove is a global commercial & operational leader with 25 years of diverse experience in the pharmaceutical, consumer, and medical device industries. Her experience spans North America to Europe, Africa, the Middle East to Asia Pacific and Latin America. As President of Tiger Aesthetics, Caro leads the build out and growth of Tiger Biosciences' latest division with the goal of establishing market leadership in regenerative aesthetic medicine. Specifically, Caro oversees all aspects instrumental to the growth of Tiger Aesthetics, ranging from Operations to Finance to Commercial and R&D development. She is also leading Tiger Aesthetics' disruptive launch of a new class of structural adipose tissue products predicted to be a catalyst of new growth in the Medical Aesthetics market.\n\nCaro has served as CEO and held other Executive positions at both VC-backed start-up and large-cap publicly traded companies, leading organizations from inception to high growth or through turnaround chapters. She is also an active Board of Director member of a private equity owned medical device company and has previously served as Executive Board Chair of both public and non-profit organizations.\n\nCaro holds an Executive Masters of Business Administration from Northwestern University, Kellogg School of Management, and resides with her husband and three girls in Nashville, TN.",
    image: "/images/leadership/caroline-van-hove.jpg",
    linkedin: "https://www.linkedin.com/in/caroline-van-hove",
  },
  {
    name: "Garrett Grinsfelder",
    title: "President, Tiger Wound Care",
    department: "Business Units",
    slug: "garrett-grinsfelder",
    bio: "Garrett has more than 20 years' experience in the wound care industry and now leads Tiger Wound Care as its President. In this role, he is tasked with overseeing all aspects of the wound care market segment, driving overall growth, and supporting key partnerships. He is steeped in product knowledge, evaluating new products for the marketplace, and keeping patient care at the forefront of all of Tiger's activities.\n\nPrior to joining Tiger, Garrett served in various sales and marketing leader roles at Organogenesis for nearly 20 years where he distinguished himself as a CAMPs expert across all sites of care.",
    image: "/images/leadership/garrett-grinsfelder.jpg",
    linkedin: "https://www.linkedin.com/in/garrett-grinsfelder",
  },
];

export const departments = [
  "All",
  "Executive Leadership",
  "Corporate",
  "Operations",
  "Finance",
  "Business Units",
];
