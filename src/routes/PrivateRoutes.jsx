import { Navigate, Route, Routes } from "react-router-dom";
import InvoicesPage from "../pages/InvoicesPage/InvoicesPage";
import CreateInvoice from "../pages/CreateInvoicePage/CreateInvoicePage";
import Recepients from "../pages/RecepientsPage/RecepientsPage";
import SettingsPage from "../pages/SettingsPages/SettingsPage";
import Layout from "../layouts/Layout";

const PrivateRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/invoices"
          element={
            <Layout>
              <InvoicesPage />
            </Layout>
          }
        />
        <Route
          path="/createInvoices"
          element={
            <Layout>
              <CreateInvoice />
            </Layout>
          }
        />
        <Route path="/recepients" element={<Recepients />} />
        <Route
          path="/settings"
          element={
            <Layout>
              <SettingsPage />
            </Layout>
          }
        />
        {/* <Route path="/" element={<CreateInvoicePage />} /> */}
        <Route path="*" element={<Navigate to={"/invoices"} />} />
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
