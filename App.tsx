import React, { useMemo, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { RecoilRoot } from 'recoil';
import { initializeRecoilState } from './src/state/state';
import Layout from './src/components/layout/layout';
import Router from './src/components/router/router';

export default function App() {
  const initialRecoilState = useRef({});

  useMemo(() => {
    initialRecoilState.current = initializeRecoilState();
  }, []);

  return (
    <SafeAreaView>
      <RecoilRoot initializeState={initializeRecoilState(initialRecoilState.current)}>
        <Layout>
          <Router />
        </Layout>
      </RecoilRoot>
    </SafeAreaView>
  );
}
