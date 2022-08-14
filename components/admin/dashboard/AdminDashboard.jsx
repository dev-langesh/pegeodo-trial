import React from "react";
import InfoButton from "./InfoButton";
import ModifyButton from "./ModifyButton";

export default function AdminDashboard() {
  return (
    <div className="p-4">
      <section className="flex items-center justify-center flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
        <InfoButton text="5000 Users" />
        <InfoButton text="2000 Orders" />
        <InfoButton text="20 Delevered" />
        <InfoButton text="0 Issues" />
      </section>
      <section className="flex items-center justify-center flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 p-4">
        <ModifyButton text="Add Product" href="/admin/add-product" />
        <ModifyButton text="Update Product" href="/admin/update-product" />
        <ModifyButton text="Delete Product" href="/admin/delete-product" />
        <ModifyButton text="Make an Offer" href="/admin/make-offer" />
      </section>
    </div>
  );
}
