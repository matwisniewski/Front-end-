import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

function ShopsPage() {
  return (
    <>
      <PageWrapper contentItems={<ShopsPageContent />} />
    </>
  );
}

export default ShopsPage;

const ShopsPageContent = () => {
  return (
    <>
      <input type="text" required />
      shops
      <input type="text" required />
    </>
  );
};
