import React from 'react'
import { Col, Row } from 'reactstrap'
import KarimField from '../../../Components/Karimalden/KarimField'
import { useTranslation } from 'react-i18next';

const BasicInfo = () => {
  const [t] = useTranslation();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
    <KarimField
          name="translated_fields[1][product_name]"
          label={`${t("product_name")} (${t("en")})`}
          placeholder={`${t("product_name")} (${t("en")})`}
        />
 
          <KarimField
          name="translated_fields[1][product_description]"
          label={`${t("product_description")} (${t("en")})`}
          placeholder={`${t("product_description")} (${t("en")})`}
        />
   
      </Col>
      <Col>
      <KarimField
          dir="rtl"
          name="translated_fields[2][product_name]"
          label={`${t("product_name")} (${t("ar")})`}
          placeholder={`${t("product_name")} (${t("ar")})`}
        />

      <KarimField
          dir="rtl"
          name="translated_fields[2][product_description]"
          label={`${t("product_description")} (${t("ar")})`}
          placeholder={`${t("product_description")} (${t("ar")})`}
        />
        
    </Col>


    </Row>
  )
}

export default BasicInfo