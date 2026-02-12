import ServiceSubPage from "@/components/ServiceSubPage";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceSolution = () => {
  const { t } = useLanguage();
  return (
    <ServiceSubPage
      prefix="svc_solution"
      seoPrefix="seo.svc_solution"
      breadcrumbLabel={t("nav.services.solution")}
      heroParas={[
        "svc_solution.hero.p1",
        "svc_solution.hero.p2",
        "svc_solution.hero.p3",
        "svc_solution.hero.p4",
      ]}
    />
  );
};

export default ServiceSolution;
