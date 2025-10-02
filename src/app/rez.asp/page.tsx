import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Breadcrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";

export default function RezAsp({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const breadcrumbItems = [
    { href: '/', label: 'Anasayfa' },
    { label: 'Hakkımızda', active: true }
  ];
  
  const params = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      params.set(key, Array.isArray(value) ? value[0] : value);
    }
  });
  redirect(`/reservation?${params.toString()}`);

  return (
    <>
      <Header />
      <Breadcrumb
        title="Hakkımızda"
        subtitle="INN TOWN HOTEL"
        backgroundImage="/img/bg/04.jpg"
        items={breadcrumbItems}
      />
      <Footer />
    </>
  );
}
