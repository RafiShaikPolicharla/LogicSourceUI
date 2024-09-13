import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { drawerWidth, hasChildren } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentSidebarTab } from "../redux";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { DataPredictionIcon, DataCubeIcon } from "../utils/svgIcons"

const SideBarMenu = [
  {
    icon: <WidgetsOutlinedIcon color="blue" />,
    title: "Price Analysis",
    childLinks: ["/price-analysis/project-benchmarking", "/price-analysis/category-analysis"],
    items: [
      {
        title: "Project Benchmarking",
        to: "/price-analysis/project-benchmarking"
      },
      {
        title: "Category Analysis",
        to: "/price-analysis/category-analysis"
      },
    ]
  },
  // {
  //   icon: <DataPredictionIcon />,
  //   title: "Price Detail",
  //   to: '/price-detail',
  //   items: [],
  // },
  {
    icon: <DataCubeIcon />,
    title: "Data Steward",
    childLinks: [
      "/data-steward/import-files",
      // "/data-steward/client-maintenance",
      // "/data-steward/supplier-maintenance",
      // "/data-steward/product-service-maintenance",
      // "/data-steward/taxonomy",
      "/data-steward/category-cost-drivers"
    ],
    items: [
      {
        title: "Import Files",
        to: "/data-steward/import-files"
      },
      // {
      //   title: "Client Maintenance",
      //   to: "/data-steward/client-maintenance"
      // },
      // {
      //   title: "Supplier Maintenance",
      //   to: "/data-steward/supplier-maintenance"
      // },
      // {
      //   title: "Product Service Maintenance",
      //   to: "/data-steward/product-service-maintenance"
      // },
      // {
      //   title: "Taxonomy",
      //   to: "/data-steward/taxonomy"
      // },
      {
        title: "Category Cost Drivers",
        to: "/data-steward/category-cost-drivers"
      },
    ]
  },
]



function MultipleListItems() {
  return SideBarMenu.map((item, key) => <MenuItem key={key} item={item} />);
}

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

// eslint-disable-next-line react/prop-types
const SingleLevel = ({ item }) => {
  const currentTab = useSelector((state) => state.appValue.currentSidebarTab);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (link) => {
    // setOpen((prev) => !prev);
    dispatch(updateCurrentSidebarTab(link));
    if (link) {
      navigate(link)
    }
  };
  return (
    <ListItem className="sidebar-listItem" sx={{ backgroundColor: `${currentTab === item.to ? "#04ABD7" : "white"}`, color: `${currentTab === item.to ? "white" : 'black'}` }} button onClick={() => handleClick(item.to)}>
      <ListItemIcon className={`sidebar-icon ${currentTab === item.to ? "sidebar-icon-active" : ""}`} sx={{ minWidth: '30px', color: `${currentTab === item.to ? "white" : '#04ABD7'}` }}>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

// eslint-disable-next-line react/prop-types
const MultiLevel = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { items: children } = item;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.appValue.currentSidebarTab);
  console.log({ currentTab })
  const handleClick = (link) => {
    if (link) {
      dispatch(updateCurrentSidebarTab(link));
      navigate(link)
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (item.childLinks.includes(currentTab)) {
      setOpen(true);
    }
    else {
      setOpen(false);
    }

  }, [currentTab])

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      <ListItem className="sidebar-listItem" button onClick={() => {
        // eslint-disable-next-line react/prop-types
        handleClick(item.to)
        handleClose()

        // eslint-disable-next-line react/prop-types
      }} sx={{ backgroundColor: `${item.childLinks.includes(currentTab) ? "#04ABD7" : "white"}`, color: `${item.childLinks.includes(currentTab) ? "white" : "black"}` }}>
        <ListItemIcon className={"sidebar-icon"} sx={{ minWidth: '30px', color: `${item.childLinks.includes(currentTab) ? "white" : '#04ABD7'}` }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          {children.map((child, key) => {
            return <ListItem className="sidebar-multi-listItem" key={key} onClick={() => {
              handleClick(child.to);
            }}
              sx={{ cursor: "pointer", color: `${currentTab === child.to ? "#04ABD7" : "black"}` }}>
              <ListItemIcon className={"sidebar-icon"} sx={{ color: `${currentTab === item.to ? "white" : '#04ABD7'}` }}></ListItemIcon>
              <ListItemText primary={child.title} />
            </ListItem>
          })}
        </List>
      </Collapse>
    </React.Fragment>
  );
};



// eslint-disable-next-line react/prop-types
const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {


  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            padding: { xs: "0px", md: "0px 16px" },
            marginTop: "68px",
            width: drawerWidth
          },
        }}

      >
        <MultipleListItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          marginTop: "64px",
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            padding: { xs: "0px", md: "0px 16px" },
            marginTop: "68px",
            width: drawerWidth
          },
        }}

        open
      >
        <MultipleListItems />
      </Drawer>
    </>
  );
};

export default Sidebar;