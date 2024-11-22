import { Text } from "@chakra-ui/react";
import Page from "../components/Page";
import { BreadcrumbProps } from "../components/Breadcrumb";

function NotFound() {
  const breadcrumb: BreadcrumbProps = {
    titleId: "not-found",
    titleKey: "not-found.title",
  };
  return (
    <Page breadcrumb={breadcrumb}>
      <Text>placeholder</Text>
    </Page>
  );
}

export default NotFound;
