import ServiceSubPage from "@/components/ServiceSubPage";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicePrincipal = () => {
  const { t } = useLanguage();
  return (
    <ServiceSubPage
      prefix="svc_principal"
      seoPrefix="seo.svc_principal"
      breadcrumbLabel={t("nav.services.principal")}
      heroParas={[
        "svc_principal.hero.p1",
        "svc_principal.hero.p2",
        "svc_principal.hero.p3",
      ]}
    />
  );
};

export default ServicePrincipal;
