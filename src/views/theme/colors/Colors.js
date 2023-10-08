import { cilMobile } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CCardFooter,
} from "@coreui/react";

const Colors = () => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol lg={6}>
                {" "}
                <h6>WhatsApp</h6>{" "}
              </CCol>

              <CCol lg={6}>
                <h6 className="text-center">WhatsApp / WhatsApp</h6>{" "}
              </CCol>
            </CRow>
          </CCardHeader>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol lg={5}>
                <CCard className="p-2">
                  <CCardHeader>How To Use?</CCardHeader>
                  <CListGroup flush>
                    <CListGroupItem>
                      {" "}
                      1. Select an account on left menu
                    </CListGroupItem>
                    <CListGroupItem>
                      2. Select Whatsapp feature you want on list
                    </CListGroupItem>
                  </CListGroup>
                </CCard>
              </CCol>

              <CCol lg={7} className="text-center mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyOFP3sJj5KUdJJpWMmguE9xU5n-FEjML3Wjw21bdsMk5D8048mxJOokYQR2H6rl9R_U&usqp=CAU"
                  width={100}
                  height={100}
                  className="bg-success"
                />
                <CListGroupItem>
                  {" "}
                  <h5>Scan QR code and get started</h5>
                </CListGroupItem>
                <CListGroupItem>
                  Use the power of WhatsApp to its fullest! Make WhatsApp
                  Newsletter and automate communication through WhatsApp Chatbot
                  and Autoresponder.
                </CListGroupItem>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default Colors;
