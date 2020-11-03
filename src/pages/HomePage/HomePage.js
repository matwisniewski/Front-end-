import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <PageWrapper contentItems={<HomePageContent />} />
    </>
  );
}

export default HomePage;

const HomePageContent = () => {
  const ordersList = [
    { date: "12/1/2011", reading: 3, id: 20055 },
    { date: "13/1/2011", reading: 5, id: 20053 },
    { date: "14/1/2011", reading: 6, id: 45652 },
  ];

  return (
    <>
      <div className="content-top">
        <input
          className="searchInput"
          type="text"
          placeholder="Nazwisko klienta"
          required
        />
        <button>Szukaj</button>
      </div>
      <h3>Zamówienia</h3>
      {ordersList.map((date, id) => (
        <OrderCard name={id} />
      ))}

      <OrderCard />
      <OrderCard />
      <OrderCard />
    </>
  );
};
