import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

function AddOrderPage() {
  return (
    <>
      <PageWrapper contentItems={<AddOrderPageContent />} />
    </>
  );
}

export default AddOrderPage;

const AddOrderPageContent = () => {
  return (
    <>
      <input type="text" required />

      <input type="text" required />
    </>
  );
};
