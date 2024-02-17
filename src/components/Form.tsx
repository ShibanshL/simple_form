import React from "react";
import { useNavigate } from "react-router";
function Form() {
  const [formData, setData] = React.useState<any>({
    name: "",
    mobile: "",
    email: "",
    zip: "",
  });

  const nav = useNavigate();

  const [finalData, setFinalData] = React.useState<any>([]);
  const [storageData, setStprageData] = React.useState<any>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formData.name && formData.mobile && formData.email && formData.zip) {
      if (formData.name.length < 2) {
        alert("plss use a longer name");
      } else if (
        !formData.email.includes("@") &&
        !formData.email.includes(".")
      ) {
        alert("plss use a valid email");
      } else if (formData.mobile.length < 5 || formData.zip.length < 5) {
        alert("plss use a valid mobile number/zip");
      } else setFinalData([...finalData, formData]);
    } else alert("plss fill the form properly");
  };

  React.useEffect(() => {
    if (finalData.length > 0) {
      setStprageData((val: any) => [...val, formData]);
      setData({
        name: "",
        mobile: "",
        email: "",
        zip: "",
      });
    }
  }, [finalData]);

  React.useEffect(() => {
    if (finalData.length > 0) {
      localStorage.setItem("DATA", JSON.stringify(storageData));
      localStorage.setItem("wasFilled", "true");
      nav("/sub");
    }
  }, [storageData]);

  React.useEffect(() => {
    let DataSaved: any = localStorage.getItem("DATA");
    DataSaved = JSON.parse(DataSaved);
    if (DataSaved?.length > 0) {
      setStprageData(DataSaved);
    }
  }, []);

  React.useEffect(() => {
    const checkIfFIlled = localStorage.getItem("wasFilled");
    if (checkIfFIlled == "true") {
      nav("/sub");
    }
  }, []);

  return (
    <div className="h-[80%] w-[35%] rounded-md bg-white flex items-center justify-between flex-col p-[50px]">
      <h1 className=" text-3xl font-bold">Fill UP!</h1>
      <form
        className="h-full w-full flex items-center justify-between flex-col"
        onSubmit={(e: any) => handleSubmit(e)}
      >
        <div className="h-[16%] w-full flex items-start justify-between flex-col">
          <h2>Name</h2>
          <input
            className="w-full h-[45px] outline-none rounded-3xl border-gray-600 border-[2px] pl-[10px] pr-[10px]"
            type="text"
            value={formData.name}
            placeholder="Enter Name"
            onChange={(e: any) =>
              setData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className="h-[16%] w-full flex items-start justify-between flex-col">
          <h2>Mobile Number</h2>
          <input
            className="w-full h-[45px] outline-none rounded-3xl border-gray-600 border-[2px] pl-[10px] pr-[10px]"
            type="number"
            value={formData.mobile}
            placeholder="Enter Mobile Number"
            onChange={(e: any) =>
              setData({ ...formData, mobile: e.target.value })
            }
          />
        </div>
        <div className="h-[16%] w-full flex items-start justify-between flex-col">
          <h2>Email</h2>
          <input
            className="w-full h-[45px] outline-none rounded-3xl border-gray-600 border-[2px] pl-[10px] pr-[10px]"
            type="text"
            value={formData.email}
            placeholder="Enter Email"
            onChange={(e: any) =>
              setData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="h-[16%] w-full flex items-start justify-between flex-col">
          <h2>Zip Code</h2>
          <input
            className="w-full h-[45px] outline-none rounded-3xl border-gray-600 border-[2px] pl-[10px] pr-[10px]"
            type="number"
            value={formData.zip}
            placeholder="Enter Zip Code"
            onChange={(e: any) => setData({ ...formData, zip: e.target.value })}
          />
        </div>

        <button
          className=" h-[45px] w-full bg-blue-400 hover:bg-blue-700 hover:text-white rounded-3xl mt-[20px]"
          onClick={(e) => handleSubmit(e)}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Form;
