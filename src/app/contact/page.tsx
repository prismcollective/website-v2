import Button from "@/components/Button";
import Socials from "@/components/Socials";

export default function Page() {
  return (
    <div className="p-12 flex gap-12 flex-1">
      <div className="flex-1 bg-white p-8 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]">
        <h1 className="font-bold text-lg">Support us!</h1>
        <p>Lorem ipsum yada yada</p>
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <div className="bg-white p-8 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]">
          <h1 className="font-bold text-lg">Get involved!</h1>
          <Socials />
        </div>
        <div className="flex-1 bg-white p-8 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]">
          <h1 className="font-bold text-lg">Any inquiries? Ask here!</h1>
          <div>
            <h3>Full Name</h3>
            <input type="text" className="border-2 border-black w-full" />
          </div>
          <div>
            <h3>Email</h3>
            <input type="text" className="border-2 border-black w-full" />
          </div>
          <div className="flex-1">
            <h3>Message</h3>
            <input
              type="text"
              className="border-2 border-black w-full h-full"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="purple">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
