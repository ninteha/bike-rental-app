/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../FirebaseConfig";
import DashRentedBikesLayout from "../Content/DashRentedBikesLayout";


const RentedBikes = () => {
  const [rentedBikes, setRentedBikes] = useState([]);
  const bikesRef = collection(db, "bikes");

  useEffect(() => {
    const getBikes = async () => {
      const data = await getDocs(bikesRef);
      setRentedBikes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBikes();

    return () => {
      setRentedBikes([]);
    };
  }, []);

  return (
    <div>
      {rentedBikes.length >= 1 ? (
        rentedBikes.map((bikes) => {
          return (
            <DashRentedBikesLayout
              key={bikes.id}
              rentalDate={bikes.rentalDate}
              bikesId={bikes.id}
              title={bikes.title}
              price={bikes.price}
              location={bikes.location}
              rentedTo={bikes.rentedTo}
            />
          );
        })
      ) : (
        <h1>There is no data!</h1>
      )}
    </div>
  );
};

export default RentedBikes;
