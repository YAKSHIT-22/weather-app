import React from "react";
import Tilty from "react-tilty";
import Button from "../global/Button";
import icons from "../global/SvgExporter";

const CardContainer = ({
  name = "hyderabad",
  weather = "Rain",
  temp= "295",
  lat = "29",
  long = "30",
  windSpeed = "0.62",
  editHandler,
  deleteHandler
}) => {
  return (
    <Tilty>
      <div className="w-full bg-back noise-panel rounded-sm shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-primary">
        <div className="flex items-center justify-center p-4 gap-3 w-full h-full flex-col">
          <div className="flex items-center justify-between text-center w-full gap-2">
            <p className="text-3xl md:text-4xl text-gray-200 font-bold">{temp}* F</p>
            <div className="max-w flex flex-col items-end justify-center text-lg text-gray-300 font-normal">
              <p className="text-base text-gray-300">{name}</p>
              <div className="flex flex-row items-center justify-center w-full text-primary gap-[1.2rem]">
            <div className="flex items-center justify-center">
              <p className="text-xs">Lat: {lat}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-xs">Long: {long}</p>
            </div>
          </div>
            </div>
          </div>   
          <div className="flex items-center flex-col justify-between text-center w-full">
            <div className="flex items-center justify-between text-center w-full">
              <p className="text-base md:text-lg text-gray-200">
                Weather: <span className="text-sm md:text-base">{weather}</span>
              </p>
              <p className="tet-base md:text-lg text-gray-200">
                Wind: <span className="text-sm md:text-base">{windSpeed} kmph</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-center">
            <Button
              containerStyle=""
              buttonStyle="rounded-full p-2 bg-[#f5c54b] bg-opacity-20"
              element={
                <icons.MdEditLocationAlt className="w-4 h-4 text-[#f5c54b]" />
              }
              handleEvent={editHandler}
            />
            <Button
              containerStyle=""
              buttonStyle="rounded-full p-2 bg-[#ff5050] bg-opacity-20"
              element={
                <icons.AiFillDelete className="w-4 h-4 text-[#ff5050]" />
              }
              handleEvent={deleteHandler}
            />
          </div>
        </div>
      </div>
    </Tilty>
  );
};

export default CardContainer;
