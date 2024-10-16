import { useTranslation } from "react-i18next";

const ExampleComponent = () => {
    const { t } = useTranslation()
    return (
      <div className="p-4  text-blue-900 rounded">
        <h4>{t('yes')}</h4>
      </div>
    );
  };
  
  export default ExampleComponent;
  