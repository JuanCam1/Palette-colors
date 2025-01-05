import type { FC } from "react";
import type Values from "values.js";
import SingleColor from "./SingleColor";

interface Props {
  list: Values[]
}
const DisplayColors: FC<Props> = ({ list }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {
        list.map((color) => (
          <SingleColor key={color.hex} hexColor={color.hex} />
        ))
      }
    </div>
  );
}

export default DisplayColors;