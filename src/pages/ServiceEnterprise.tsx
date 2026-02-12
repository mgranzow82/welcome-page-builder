import ServiceSubPage from "@/components/ServiceSubPage";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceEnterprise = () => {
  const { t } = useLanguage();
  return (
    <ServiceSubPage
      prefix="svc_enterprise"
      seoPrefix="seo.svc_enterprise"
      breadcrumbLabel={t("nav.services.enterprise")}
      heroParas={[
        "svc_enterprise.hero.p1",
        "svc_enterprise.hero.p2",
        "svc_enterprise.hero.p3",
      ]}
    />
  );
};

export default ServiceEnterprise;
