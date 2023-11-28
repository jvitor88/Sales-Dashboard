
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Card = ({ title, value, arrowup=true, percent }) => {
  return (
    <div className="flex flex-col justify-center bg-white w-56 p-3 rounded-xl text-lg">
      <span>{title}</span>
      <span className="text-2xl font-bold">R$ {value}</span>
      <div>
        {arrowup ? 
          <span className="flex items-center gap-2">
              <FaArrowTrendUp fill="green"/> 
              <span className="text-green-600">+{percent}%</span>
          </span> 
            :
          <span className="flex items-center gap-2">
            <FaArrowTrendDown fill="red"/>
            <span className="text-red-600">-{percent}%</span>
          </span>
        }
      </div>
    </div>
  )
}

export default Card