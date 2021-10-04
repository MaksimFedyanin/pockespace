import React, { useMemo } from 'react';
import { RecoilRoot } from 'recoil';
import { initializeRecoilState } from '../src/state/state';
import Layout from '../src/components/layout/layout';

let initialRecoilState;

function PockeSpaceApp({ Component, pageProps }) {
  useMemo(() => {
    initialRecoilState = initializeRecoilState(pageProps.store);
  }, []);

  return (
    <RecoilRoot initializeState={initialRecoilState}>
      <Layout>
        <Component />
      </Layout>
    </RecoilRoot>
  );
}

export default PockeSpaceApp;
