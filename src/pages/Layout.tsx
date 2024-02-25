import SideNav from "@/components/SideNav";
import {
  AdminTable,
  AcademicTable,
  ClassTable,
  InvoiceTable,
} from "@/components/Table";
import { CustomButton } from "@/components/Button";
import { FaPlus } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row md:overflow-hidden">
      <div className="w-full flex-none w-24 md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <CustomButton icon={FaPlus} padding="25px 20px" borderRadius="18px">
          Add Account
        </CustomButton>
        <CustomButton
          fontSize="12px"
          color="red"
          backgroundColor="white"
          border="2px solid red"
          margin="0 10px"
        >
          Delete Account
        </CustomButton>
        <AdminTable />
        <AcademicTable />
        <ClassTable />
        <InvoiceTable />
      </div>
    </div>
  );
}
