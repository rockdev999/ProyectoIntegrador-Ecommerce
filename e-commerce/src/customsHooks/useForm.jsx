import { useState } from "react";
const useForm = ({initialState})=>{

    const [info, setInfo] = useState(initialState);

      function crearCuenta (event)  {
        const newInfo = { ...info, [event.target.name]: event.target.value };
        setInfo(newInfo);
      };
      return { info, setInfo, crearCuenta}
}

export default useForm