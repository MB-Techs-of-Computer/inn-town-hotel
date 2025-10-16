import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Breadcrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";

export default async function RezAsp({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  // searchParams'ı await edin
  const resolvedParams = await searchParams;

  const breadcrumbItems = [
    { href: '/', label: 'Anasayfa' },
    { label: 'Hakkımızda', active: true }
  ];
  
  const params = new URLSearchParams();

  Object.entries(resolvedParams).forEach(([key, value]) => {
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