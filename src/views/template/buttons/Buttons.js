import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import { DocsExample } from 'src/components'

const Buttons = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              CoreUI includes a bunch of predefined buttons components, each serving its own
              semantic purpose. Buttons show what action will happen when the user clicks or touches
              it. CoreUI buttons are used to initialize operations, both in the background or
              foreground of an experience.
            </p>
            <DocsExample href="components/buttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {[
                      'primary',
                      'secondary',
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'light',
                      'dark',
                    ].map((color, index) => (
                      <CButton
                        color={color}
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </CButton>
                    ))}
                    <CButton color="link">Link</CButton>
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default Buttons
