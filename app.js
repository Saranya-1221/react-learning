import React from "react";
import ReactDOM from "react-dom/client";
import { imageGridCards, restaurants } from "./data";

const Header = () => (
  <div className="header">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmG1P8TLx-PZfBh0Jp6jBRyMFMA5PhQ6b_Duq-60qPTG-MidHrwX-_w4&s"
      alt="Brand Logo"
      className="logo"
    />
    <ul className="Nav_con">
      <li>Home</li>
      <li>About</li>
      <li>Offers</li>
      <li>Sign-In</li>
      <li>Cart</li>
    </ul>
  </div>
);

const FoodVar = ({ imgLink, action }) => {
  const { link, type } = action;
  return (
    <a className="foodVar" href={link}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imgLink}`}
        alt={type}
      />
    </a>
  );
};

const ResCard = ({ restaurant }) => {
  const {
    info: { name, cloudinaryImageId, avgRating, cuisines, areaName, sla },
    cta,
  } = restaurant;
  console.log(restaurant, "props");
  return (
    <a className="resCard" href={cta.link}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="Restaurent Image"
        className="resImg"
      />
      <div className="resName">{name}</div>
      <div className="resRating">{`${avgRating} . ${sla.slaString}`}</div>
      <div className="resCuisin">{cuisines?.join(" ,")}</div>
      <div className="resArea">{areaName}</div>
    </a>
  );
};

const Body = () => {
  const { info } = imageGridCards;
  return (
    <div className="bodyCon">
      <div className="VarConTitle"> What is in your mind?</div>
      <div className="varCon">
        {info.map((element) => (
          <FoodVar
            imgLink={element.imageId}
            action={element.action}
            key={element.id}
          />
        ))}
      </div>
      <div className="res_con">
        {restaurants.map((restaurant) => {
          console.log(restaurant, "res");
          return <ResCard restaurant={restaurant} key={restaurant.info.id} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="layout">
    <Header />
    <Body />
    {/* <Footer /> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
