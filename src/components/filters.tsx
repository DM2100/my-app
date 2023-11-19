import React, { useEffect, useState } from "react";
import Cards from "./cards";

export interface Types {
  name: string;
  gender: string;
  price: number;
  image: string;
  brand: string;
}

const Filters = () => {
  const [Data, setData] = useState<Types[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string | null>(null); 
  const [Filtered, setFiltered] = useState<Types[]>([]);
  const dataLength = Data.length;
  const maleLength = Data.filter((item) => item.gender === "MALE").length;
  const femaleLength = Data.filter((item) => item.gender === "FEMALE").length;
  const leGrand = Data.filter((item) => item.brand === "LE GRAND BIKES").length;
  const kross = Data.filter((item) => item.brand === "KROSS").length;
  const EXPLORER = Data.filter((item) => item.brand === "EXPLORER").length;
  const VISITOR = Data.filter((item) => item.brand === "VISITOR").length;
  const PONY = Data.filter((item) => item.brand === "PONY").length;
  const FORCE = Data.filter((item) => item.brand === "FORCE").length;
  const EBIKES = Data.filter((item) => item.brand === "E-BIKES").length;
  const IDEAL = Data.filter((item) => item.brand === "IDEAL").length;

  const filtergender = (gender: string) => {
    const updateitem = Data.filter((item) => {
      return item.gender === gender;
    });
    setFiltered(updateitem);
    setIsActive(false);
    setFilterType(gender); // Set the active filter type
  };

  const handleShowAllClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    setFiltered(Data);
    setIsActive(true);
    setFilterType(null); // Clear the active filter type
  };

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setData(data.products);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (Data.length === 0) {
    return <div>Loading...</div>;
  }

  const filterbrand = (brand: string) => {
    const updateItems = Data.filter((item) => item.brand === brand);
    setFiltered(updateItems);
    setIsActive(false);
    setFilterType(brand); 
  };

  return (
    <div className="filter-container">
      <div className="container-text">
        <div className="left-side">
          <h1>Bikes</h1>
          <p>Filtered by:</p>
          <div
            className={`border-btm${isActive ? " active" : ""}`}
            onClick={handleShowAllClick}
          >
            Show All
            <span className="item-names">{dataLength}</span>
          </div>
          <p>Gender</p>
          <div
            className={`cursor${filterType === "MALE" ? " active" : ""}`}
            onClick={() => filtergender("MALE")}
          >
            Male <span className="item-names">{maleLength}</span>
          </div>
          <div
            className={`border-btm${filterType === "FEMALE" ? " active" : ""}`}
            onClick={() => filtergender("FEMALE")}
          >
            Female <span className="item-names">{femaleLength}</span>
          </div>
          <p>Brand</p>
          <div
            className={`cursor${filterType === "LE GRAND BIKES" ? " active" : ""}`}
            onClick={() => filterbrand("LE GRAND BIKES")}
          >
            LE GRAND BIKES
            <span className="item-names">{leGrand}</span>
          </div>
          <div
            className={`cursor${filterType === "KROSS" ? " active" : ""}`}
            onClick={() => filterbrand("KROSS")}
          >
            KROSS
            <span className="item-names">{kross}</span>
          </div>
          <div
            className={`cursor${filterType === "EXPLORER" ? " active" : ""}`}
            onClick={() => filterbrand("EXPLORER")}
          >
            EXPLORER
            <span className="item-names">{EXPLORER}</span>
          </div>
          <div
            className={`cursor${filterType === "VISITOR" ? " active" : ""}`}
            onClick={() => filterbrand("VISITOR")}
          >
            VISITOR
            <span className="item-names">{VISITOR}</span>
          </div>
          <div
            className={`cursor${filterType === "PONY" ? " active" : ""}`}
            onClick={() => filterbrand("PONY")}
          >
            PONY
            <span className="item-names">{PONY}</span>
          </div>
          <div
            className={`cursor${filterType === "FORCE" ? " active" : ""}`}
            onClick={() => filterbrand("FORCE")}
          >
            FORCE
            <span className="item-names">{FORCE}</span>
          </div>
          <div
            className={`cursor${filterType === "E-BIKES" ? " active" : ""}`}
            onClick={() => filterbrand("E-BIKES")}
          >
            E-BIKES
            <span className="item-names">{EBIKES}</span>
          </div>
          <div
            className={`cursor${filterType === "IDEAL" ? " active" : ""}`}
            onClick={() => filterbrand("IDEAL")}
          >
            IDEAL
            <span className="item-names">{IDEAL}</span>
          </div>
        </div>
        <div className="right-side">
          <div className="card-container">
            {Filtered.length > 0 ? (
              Filtered.map(({ name, image, price, gender }) => (
                <Cards
                  key={Math.random()}
                  image={image}
                  name={name}
                  price={price}
                  gender={gender}
                  brand={""}
                />
              ))
            ) : (
              <div className="no-matching-items">No matching items found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
