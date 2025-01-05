import { type Dispatch, type FC, type FormEvent, type SetStateAction, useState } from "react";
import { toast } from "sonner";
import Values from "values.js";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  setList: Dispatch<SetStateAction<Values[]>>
}
const FormColor: FC<Props> = ({ setList }) => {
  const [color, setColor] = useState("#a014e0");

  const handleGenerator = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    toast.success('Copied to clipboard')
  }


  return (
    <div className="flex flex-col gap-6">
      <span className="block shadow-sm font-extrabold text-6xl text-center text-purple-500">Color Palette Generator</span>
      <form onSubmit={handleGenerator} className="flex justify-center mb-6">
        <div className="flex justify-center items-center gap-4 w-full max-w-[400px] h-[60px]">
          <Input value={color} className="h-full" type="color" onChange={e => setColor(e.target.value)} />
          <Button type="button" variant="outline" onClick={handleCopy}> {color}</Button>
          <Button variant="outline" type="submit">Generar</Button>
        </div>
      </form>
    </div>
  );
}

export default FormColor;