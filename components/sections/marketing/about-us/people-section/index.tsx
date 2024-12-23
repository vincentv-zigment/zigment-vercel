import Image from "next/image";

const people = [
  {
    name: "Dikshant Dave",
    role: "CEO",
    id: "linkedin-0",
    imageUrl: "https://cdn.zigment.ai/assets/dikshantdave.jpg",
    bio: `With a knack for recognizing the potential of AI in transforming human interactions, Dikshant has steered Zigment from concept to reality. His vision? To create a platform where technology doesn't overshadow humanity but enhances it.`,
    linkedinUrl: "https://www.linkedin.com/in/dikshant-dave-636990",
  },
  {
    name: "Karma Pandya",
    role: "The Architect CTO",
    imageUrl: "https://cdn.zigment.ai/assets/karmapandya.jpg",
    bio: `The wizard behind the curtain, turning complex code into seamless conversations. Karma believes in the power of technology to tell stories, share experiences, and forge bonds. He's the brain behind our AI, ensuring that it isn't just smart but also kind, responsive, and inclusive.`,
    linkedinUrl: "https://www.linkedin.com/in/karma-pandya/",
  },
  {
    name: "Larry Braitman",
    role: `The Founding Director`,
    imageUrl: "https://cdn.zigment.ai/assets/larrybaitman.png",
    bio: `As a Founding Director, Larry has been instrumental in shaping the strategic direction of Zigment. Larry's influence ensures that Zigment remains at the forefront of innovation while maintaining its core values.`,
    linkedinUrl: "https://www.linkedin.com/in/larrybraitman/",
  },
  {
    name: "Naveen Picardo",
    role: `Head of Customer Success`,
    imageUrl: "/assets/imgs/aboutus/naveenpicardo.png",
    bio: `A seasoned CXO in customer success and marketing roles. Previously at Adobe, HP, Curejoy & 1Balance. Aligned with Zigment’s core philosophy, ie., Customer first Naveen leads one of the most important functions in Zigment - Customer success. `,
    linkedinUrl: "https://www.linkedin.com/in/naveenpicardo/",
  },
  {
    name: "Caleb Peter",
    role: `Head of Growth`,
    imageUrl: "/assets/imgs/aboutus/caleb.png",
    bio: `Caleb leads the growth function for Zigment. With his vast experience as a growth leader, he is responsible for strategic partnerships and new customer acquisition. Caleb has led some of the prominent digital agencies & D2C businesses.`,
    linkedinUrl: "https://www.linkedin.com/in/caleb-peter-b1310725/",
  },
  {
    name: "Sudhar Krishnamachary",
    role: `Sales Ops (Advisor)`,
    imageUrl: "/assets/imgs/aboutus/SudharKrishnamachary.jpeg",
    bio: `Sudhar brings decades of experience in sales and sales related functions. With his strong acumen in Banking, Finance and Insurance, Sudhar powers Zigment’s core functions & business operations around these sectors.`,
    linkedinUrl: "https://www.linkedin.com/in/sudharchary",
  },
  // More people...
];

const PeopleSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 relative">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4 relative z-10">
            <h2 className="sec_title2 max-w-[565px] mx-auto has_fade_anim relative">
              The Team
            </h2>
          </div>
          <div className="lg:col-span-2 relative z-10 has_fade_anim">
            <ul
              role="list"
              className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person, index) => (
                <li key={person.name} className="sm:py-8 ">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 has_fade_anim">
                    <div className="overflow-hidden rounded-lg flex items-center">
                      <Image
                        width={500}
                        height={500}
                        className="w-[250px] h-[300px] object-cover shadow-lg"
                        src={person.imageUrl}
                        alt={person.name}
                        title={person.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-brand-orange-main">
                            {person.role}
                          </p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500 font-sans text-primary2">
                            {person.bio}
                          </p>
                        </div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a
                              href={person.linkedinUrl}
                              id={`linkedin-${index}`}
                              target="_blank"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
