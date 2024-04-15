import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import ModalContainer from "../components/global/ModalContainer";
import CardContainer from "../components/landing/CardContainer";
import MainCardContainer from "../components/landing/MainCardContainer";
import icons from "../components/global/SvgExporter";
import { useState, useEffect } from "react";
import { selectOptions } from "../utils/constants";
import DeleteModalContent from "../components/landing/DeleteModalContent";
import { ItemView } from "../utils/helper";

function App() {

  const [isActionModalOpen, setActionModal] = useState({});
  const [weatherData, setWeatherData] = useState({
    data: [
    ],
    isLoading: false
  });
  const [form, setForm] = useState({});

  // handle modal action and id for data handling
  async function handleActionsModal({ action, id = 0 }) {
    if (action === "edit") {
      setForm((prev)=>({
        locationName: weatherData.data.filter(item=>item.id===id)[0].name,
        units: "standard",
        id: id
      }))
    } else if (action === "delete") {
      setForm((prev)=>({
        locationName: weatherData.data.filter(item=>item.id===id)[0].name,
        units: "standard",
        id: id
      }))
    }
    setActionModal({
      ...isActionModalOpen,
      action: action,
      isOpen: true,
    });
  }

  // handle modal close and form reset logic
  const handleActionsModalClose = () => {
    setForm({});
    setActionModal({
      ...isActionModalOpen,
      isOpen: false,
      action: "",
    });
  };

  useEffect(() => {
    
    //Bakcbone Js Code
  }, []);

  // submit handler and backbone js code handler
  const handleSubmit = async (e) => {
    if (isActionModalOpen.action === "edit") {
      e.preventDefault();
      //Backbone js Code
      var item = new ItemView();
      const result = await item.addLocation(form.locationName,form.units)
      const res = weatherData.data.filter(item=>item.id!==form.id)
      setWeatherData((prev)=>({
        isLoading: false,
        data: [...res, result]
      }))
      setForm({});
      setActionModal({
        ...isActionModalOpen,
        isOpen: false,
        action: "",
      });
    } else if (isActionModalOpen.action === "add") {
      e.preventDefault();
      //Backbone js Code
      var item = new ItemView();
      const result = await item.addLocation(form.locationName,form.units)
      if(result.cod!==200){
        alert(result.message)
        setForm({});
      setActionModal({
        ...isActionModalOpen,
        isOpen: false,
        action: "",
      });
        return;
      }
      setWeatherData((prev)=>({
        isLoading: false,
        data: [...prev?.data, result]
      }))
      setForm({});
      setActionModal({
        ...isActionModalOpen,
        isOpen: false,
        action: "",
      });
    } else if (isActionModalOpen.action === "delete") {
      const res = weatherData.data.filter(item=>item.id!==form.id)
      setWeatherData((prev)=>({
        isLoading: false,
        data: [...res]
      }))
      setForm({});
      setActionModal({
        ...isActionModalOpen,
        isOpen: false,
        action: "",
      });
    }
  };
  // form input handler for the input and select field
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header modelOpen={() => handleActionsModal({ action: "add", id: "" })} />
      <MainCardContainer>
       {(weatherData.data && weatherData.data.length) > 0 ?  weatherData.data.map(dataItem=>(<CardContainer
          key={dataItem.id}
          name={dataItem.name}
          weather={dataItem.weather[0].main}
          temp={dataItem.main.temp}
          lat={dataItem.coord.lat}
          long={dataItem.coord.lon}
          windSpeed={dataItem.wind.speed}
          editHandler={() => handleActionsModal({ action: "edit", id: dataItem.id })}
          deleteHandler={() => handleActionsModal({ action: "delete", id: dataItem.id })}
        />)): <div className="col-span-full">No Location Added</div>}     
      </MainCardContainer>
      <Footer />
      <ModalContainer
        heading={
          isActionModalOpen.action === "edit"
            ? "Edit Location"
            : isActionModalOpen.action === "add"
            ? "Add Location"
            : "Delete Location"
        }
        isOpen={isActionModalOpen.isOpen}
        onClose={handleActionsModalClose}
        cta={
          isActionModalOpen.action === "edit"
            ? "Edit Location"
            : isActionModalOpen.action === "add"
            ? "Add Location"
            : "Delete Location"
        }
        formid={
          isActionModalOpen.action === "edit"
            ? "editlocation"
            : isActionModalOpen.action === "add"
            ? "addlocation"
            : ""
        }
        onSubmit={handleSubmit}
        ctaClass={isActionModalOpen.action === "delete" ? "danger" : "primary"}
        scrollBehavior=""
        modalClass="text-white bg-back"
        enableFooter={true}
      >
        {isActionModalOpen.action === "delete" ? (
          <DeleteModalContent/>
        ) : (
          <>
            <div className="w-full flex items-center justify-center gap-1 flex-col py-2">
              <p className="capitalize text-xs text-[#b3b3b3]">
                *All fields are required!
              </p>
            </div>
            <form
              id={
                isActionModalOpen.action === "edit"
                  ? "editlocation"
                  : isActionModalOpen.action === "add"
                  ? "addlocation"
                  : "deletelocation"
              }
              onSubmit={handleSubmit}
              className="flex items-center justify-center gap-4 flex-col"
            >
              <div className="flex items-center justify-center gap-4 w-full flex-col">
                <div className="relative flex items-center justify-center gap-2 w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <icons.CiLocationOn className="w-6 h-6 text-[#808080]" />
                  </div>
                  <input
                    type="text"
                    className="flex bg-transparent text-sm w-full pl-10 pr-3 py-3 text-white border border-[#252525] rounded-[8px] focus:outline-none"
                    placeholder="Location Name"
                    name="locationName"
                    required
                    onChange={handleInputChange}
                    value={form.locationName || ""}
                  />
                </div>
                <div className="relative flex items-center justify-center gap-2 w-full">
                  <select
                    name="units"
                    onChange={handleInputChange}
                    value={form.units || ""}
                    required
                    className="flex bg-transparent text-sm w-full py-3 text-white border border-[#252525] rounded-[8px] focus:outline-none"
                  >
                     {Object.values(selectOptions).map((value)=>{
                           return <option key={value} className="!text-black" value={value}>
                            {value}
                          </option>
                     })}
                  </select>
                </div>
              </div>
            </form>
          </>
        )}
      </ModalContainer>
    </>
  );
}

export default App;
