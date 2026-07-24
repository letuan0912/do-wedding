"use client";

import { useEffect, useMemo, useState } from "react";

import ContactToolbar from "./ContactToolbar";
import ContactTable from "./ContactTable";
import { deleteContact } from "./DeleteContact";

import Card from "@/components/admin/ui/Card";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import type { Contact } from "@/types/contact";

export default function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const loadContacts = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/contact");

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setContacts(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        contact.name.toLowerCase().includes(keyword) ||
        contact.phone.toLowerCase().includes(keyword) ||
        contact.email.toLowerCase().includes(keyword);

      const matchStatus =
        status === "all" ||
        contact.status === status;

      return matchSearch && matchStatus;
    });
  }, [contacts, search, status]);

  const handleDelete = async (id: string) => {
    const ok = await deleteContact(id);

    if (!ok) return;

    setContacts((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Quản lý Liên hệ"
        description="Quản lý các thông tin khách hàng gửi từ website."
      />

      <Card padding="lg">
        <ContactToolbar
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />
      </Card>      {loading ? (
        <Loading text="Đang tải danh sách liên hệ..." />
      ) : (
        <ContactTable
          contacts={filteredContacts}
          onDelete={handleDelete}
          onRefresh={loadContacts}
        />
      )}
    </div>
  );
}