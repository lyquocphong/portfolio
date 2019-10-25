import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import AppRouter from './components/router';
import AppNavigator from './components/navigator';

function App() {
  return (
    <div className="App">
    {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
            <Header title="Title" scroll>
                <AppNavigator />
            </Header>
            <Drawer title="Title">
                <AppNavigator />
            </Drawer>
            <Content>
                <div className="page-content" />
                <AppRouter />
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
