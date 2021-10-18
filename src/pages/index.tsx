import type { NextPage } from 'next'
import { DisplayText, EmptyState, Layout, Page } from "@shopify/polaris";

const HomePage: NextPage = () => {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Empty State Heading Message"
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <DisplayText size="large">Display Text</DisplayText>
        </EmptyState>
      </Layout>
    </Page>
  );
}

export default HomePage;
