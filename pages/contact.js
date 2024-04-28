import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsInstagram, BsSpotify } from "react-icons/bs";
export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="min-w-[340px] grid place-items-center">
        <div className="font-[Montserrat] flex flex-col justify-center items-center mt-20 p-10 border-[1px] border-black max-w-fit rounded-2xl shadow-sm shadow-[#9c9c9c]  ">
          <span className="font-bold text-2xl pb-4">Contact Me</span>
          <div className="flex flex-row items-center justify-center space-x-5 ">
            <a href="mailto:pateljay51003@gmail.com">
              <HiOutlineMail href="" className="text-2xl hover:text-red-500" />{" "}
            </a>
            <a
              href="https://instagram.com/jaayyy_05/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="text-2xl  hover:text-purple-500" />
            </a>
            <a
              href="https://github.com/jay-0510"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-2xl  hover:text-gray-600" />
            </a>
            <a
              href="https://open.spotify.com/user/31ti5auwcjq6yijac67j5wxnyck4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify className="text-2xl  hover:text-green-500" />
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
