import { Navigate, Route, Routes } from "react-router-dom";
import InvoicesPage from "../pages/InvoicesPage/InvoicesPage";
import CreateInvoice from "../pages/CreateInvoicePage/CreateInvoicePage";
import Recepients from "../pages/RecepientsPage/RecepientsPage";
import SettingsPage from "../pages/SettingsPages/SettingsPage";
import Layout from "../layouts/Layout";
import TaxInvoice from "../pages/TaxInvoice/TaxInvoice";

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
          path="/taxinvoice"
          element={
            <Layout>
              <TaxInvoice />
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
        <Route
          path="/recepients"
          element={
            <Layout>
              <Recepients />
            </Layout>
          }
        />
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
