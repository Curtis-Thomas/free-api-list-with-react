// https://stackoverflow.com/questions/63216730/can-you-use-material-ui-link-with-react-router-dom-link

import { Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React from "react";

/**
 * Custom Link component that combines Material-UI's Link and React Router's Link.
 *
 * @param {object} props - Props to pass to the Link component.
 * @returns {JSX.Element} - Link component.
 */
const Link = (props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"}>
      {props.children}
    </MuiLink>
  );
};

export default Link;
