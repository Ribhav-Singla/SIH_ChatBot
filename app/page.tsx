import Avatar_ from "./(components)/Avatar";
import Settings from "./(components)/Settings";
import Bulb from "./(components)/Bulb";
import { Input } from "@/components/ui/input";
import Send from "./(components)/Send";
import Hamburger from "./(components)/Hamburger";
import Plus from "./(components)/Plus";
import History from "./(components)/History";
import FAQ from "./(components)/FAQ";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-2 bg-[#1e1f20] flex flex-col">
          <div className="p-5">
            <Hamburger />
          </div>
          <div className="flex justify-center items-center px-5 py-3 gap-2 bg-[#131314] w-fit rounded-full cursor-pointer ml-5">
            <Plus /> New Chat
          </div>
          <div className="flex flex-col flex-grow justify-between">
            <div className="flex-grow">
              <History />
            </div>
            <div className="mb-5">
              <FAQ />
            </div>
          </div>
        </div>
        <div className="col-span-10 bg-[#131314] h-screen flex flex-col">
          <div className="flex items-center justify-end p-5 space-x-5">
            <Settings />
            <Avatar_ />
          </div>
          <div className="px-40 flex flex-col justify-between flex-grow">
            <div className="mt-10">
              <h1 className="text-6xl font-bold text-left">Hello, Ribhav</h1>
              <h1 className="text-6xl font-bold text-left text-gray-600 mt-5">
                How can I help you today?
              </h1>
              <br />
              <div className="flex justify-center items-center space-x-5 mt-5">
                <div className="bg-[#1e1f20] p-10 rounded-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, accusantium?
                  <div className="flex justify-end mt-5">
                    <Bulb />
                  </div>
                </div>
                <div className="bg-[#1e1f20] p-10 rounded-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, accusantium?
                  <div className="flex justify-end mt-5">
                    <Bulb />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1e1f20] rounded-full mt-auto mb-5">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter a prompt here"
                  className="rounded-full outline-none border-none p-6 py-10 text-lg"
                  autoFocus
                />
                <div className="absolute top-[38%] left-[94%]">
                  <Send />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
