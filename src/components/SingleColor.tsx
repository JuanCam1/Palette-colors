import { FaRegCopy } from "react-icons/fa6";
import { toast } from "sonner";
import { Button } from "./ui/button";

const SingleColor = ({ hexColor }: { hexColor: string }) => {

  const handleCopy = (color: string) => () => {
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
    toast.success('Copied to clipboard')
  }

  return (
    <div className="relative flex flex-col justify-center items-center rounded-md transition delay-100 group max-sm:size-[80px] max-md:size-[120px] hover:scale-90 size-[170px]" style={{ backgroundColor: `#${hexColor}` }}>
      <div className="group-hover:block group-hover:bg-slate-300 hidden px-6 py-2 rounded-md text-center group-hover:delay-100">
        <p className="m-0 font-semibold text-black">#{hexColor}</p>
        <Button className="border-0 bg-transparent mt-2 px-2 py-1 rounded-sm w-[42px] cursor-pointer" onClick={handleCopy(hexColor)} >
          <FaRegCopy />
        </Button>
      </div>
    </div>
  );
}

export default SingleColor;