import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

function AdminPage() {
  return (
    <>
      <PageWrapper contentItems={<AdminPageContent />} />
    </>
  );
}

export default AdminPage;

const AdminPageContent = () => {
  return (
    <>
      <input type="text" required />

      <input type="text" required />
    </>
  );
};
