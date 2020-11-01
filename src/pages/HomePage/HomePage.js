import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import OrderCard from "../../components/OrderCard/OrderCard";
function HomePage() {
  return (
    <>
      <PageWrapper contentItems={<HomePageContent />} />
    </>
  );
}

export default HomePage;

const HomePageContent = () => {
  return (
    <>
      <div className="content-top">
        <div>
          This example use media queries to transform the sidebar to a top
          navigation bar when the screen size is 700px or less.
        </div>
      </div>

      <h3>Resize the browser window to see the effect.</h3>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </>
  );
};
