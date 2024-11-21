
interface NavbarProps {
  setCurrentPage: (page: string) => void;
  activeComponent: string;
}

const Navbar = ({ setCurrentPage, activeComponent,   }: NavbarProps) => {
  const handleItemClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="">

      <nav
        className="bg-brand-orange-main p-4  mt-10"
        style={{
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        <div
          className="overflow-x-auto"
          style={{
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS
          }}
        >
          <ul className="flex flex-nowrap justify-start items-center w-full">
            {[
              "url",
              "text",
              "email",
              "phone",
              "sms",
              "vcard",
              "mecard",
              "facebook",
              "twitter",
              "youtube",
              "wifi",
              "event",
              "bitcoin",
            ].map((item) => (
              <li
                key={item}
                className="mx-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
              >
                <button
                  className={`block text-center border-b-2 pb-2 text-sm text-white transition-all duration-300 ease-in-out ${
                    activeComponent === item ? "border-white font-bold" : "border-transparent"
                  }`}
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                  title={`Create QR Code for a ${
                    item.charAt(0).toUpperCase() + item.slice(1)
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
 
    </div>
  );
};

export default Navbar;
