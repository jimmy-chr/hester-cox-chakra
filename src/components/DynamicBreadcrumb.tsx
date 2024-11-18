import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

// Define a mapping of routes to breadcrumb names
const breadcrumbMap: { [key: string]: string } = {
  "/": "Home",
  "/collection": "Collection",
  "/accessories": "Accessories",
  "/about-me": "About Me",
  "/contact": "Contact",
};

const DynamicBreadcrumb: React.FC = () => {
  const location = useLocation();

  // Split the pathname into segments
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Build the breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const fullPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <BreadcrumbItem key={fullPath} isCurrentPage={isLast}>
        {isLast ? (
          <BreadcrumbLink>{breadcrumbMap[fullPath] || segment}</BreadcrumbLink>
        ) : (
          <BreadcrumbLink as={Link} to={fullPath}>
            {breadcrumbMap[fullPath] || segment}
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
  });

  return <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>;
};

export default DynamicBreadcrumb;
