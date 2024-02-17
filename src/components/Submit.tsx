import React from "react";
import { useNavigate } from "react-router";
import Back from "../assets/back.svg";
import Delete from "../assets/delete.svg";

function Submit() {
  const [data, setData] = React.useState<any>([]);

  const nav = useNavigate();

  React.useEffect(() => {
    const localData: any = localStorage.getItem("DATA");
    setData(JSON.parse(localData));
  }, []);

  return (
    <>
      <div className="Details h-[90%] w-[80%] rounded-md bg-white flex items-center justify-center flex-col p-[10px]">
        <div className="TopRow h-[10%] w-full border-b-4 border-gray-400 flex items-center justify-between pl-[10px] pr-[10px]">
          <button
            className=" rounded-2xl h-[30px] w-[30px] bg-gray-300 flex items-center justify-center"
            onClick={() => {
              localStorage.removeItem("wasFilled");

              nav("/");
            }}
          >
            <img src={Back} alt="" />
          </button>
          <button
            className=" rounded-2xl h-[30px] w-[30px] bg-red-500 flex items-center justify-center"
            onClick={() => {
              const remData = localStorage.removeItem("DATA");
              setData(remData);
            }}
          >
            <img src={Delete} alt="" />
          </button>
        </div>
        <div className="DetailCards h-[90%] w-full overflow-auto">
          {data?.length > 0 ? (
            data.map((e: any) => {
              return (
                <>
                  <div className="IndividualCards h-[50px] w-full bg-gray-100 rounded-md flex items-center justify-between mt-[10px] mb-[10px] pl-[10px] pr-[10px]">
                    <h1>{e.name}</h1>
                    <div className="flex items-center justify-center">
                      <p>email : </p>
                      <h2>{e.email}</h2>
                    </div>
                    <div className="flex items-center justify-center">
                      <p>mobile : </p>
                      <h2>{e.mobile}</h2>
                    </div>
                    <div className="flex items-center justify-center">
                      <p>zip : </p>
                      <h2>{e.zip}</h2>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <h1>No data yet</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Submit;
