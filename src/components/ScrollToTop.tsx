import { HiArrowCircleUp } from "react-icons/hi";

const ScrollToTop = () => {
  return (
    <a href="#top">
      <HiArrowCircleUp
        className=" dark:text-black-wala dark:bg-green-wala hover:opacity-80 hidden md:flex rounded-full w-fit right-2  lg:right-7 bottom-7 fixed  transition duration-300"
        size={36}
      />
    </a>
  );
};

export default ScrollToTop;
