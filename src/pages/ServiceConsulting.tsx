import ServiceSubPage from "@/components/ServiceSubPage";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceConsulting = () => {
  const { t } = useLanguage();
  return (
    <ServiceSubPage
      prefix="svc_consulting"
      seoPrefix="seo.svc_consulting"
      breadcrumbLabel={t("nav.services.consulting")}
      heroParas={[
        "svc_consulting.hero.p1",
        "svc_consulting.hero.p2",
        "svc_consulting.hero.p3",
        "svc_consulting.hero.p4",
      ]}
    />
  );
};

export default ServiceConsulting;
