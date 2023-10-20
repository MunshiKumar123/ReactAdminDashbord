import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { sygnet } from "src/assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import mini_vert_icon from "../assets/images/mini_vert_icon.png";
import vert_icon from "../assets/images/vert_icon.png";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow.sidebarShow);

  //  use for mobile app
  function getValuesBasedOnScreenSize() {
    const screenWidth = window.innerWidth;

    let values = {};

    if (screenWidth <= 768) {
      // Mobile view
      values = {
        someValue: "Value for mobile",
        anotherValue: 123
      };
    } else {
      // Desktop view
      values = {
        someValue: "Value for desktop",
        anotherValue: 456
      };
    }

    // Now, you can use the 'values' object in your React component
    return values;
  }
  // Call the function and get the values
  const screenValues = getValuesBasedOnScreenSize();

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      {/*<CSidebarBrand className="d-none d-md-flex" to="/"/>*/}
      <CSidebarBrand className="d-md-flex" to="/">
        <img src={vert_icon} className="img-fluid p-1 logo" alt="icon" />
        <img
          src={mini_vert_icon}
          className="img-fluid p-1 mini-logo"
          alt="icon"
        />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar
          onClick={() => {
            screenValues.anotherValue === 123 &&
              dispatch({ type: "set", sidebarShow: false });
          }}
        >
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-block d-lg-flex"
        onClick={() => dispatch({ type: "set", sidebarShow: true })}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);