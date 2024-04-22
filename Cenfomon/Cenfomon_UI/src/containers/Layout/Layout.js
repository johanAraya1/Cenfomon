import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';

const Layout = (props) => {

    return (
        <Fragment>
            <header>
                {/* <TopNav /> */}
            </header>
            <main>
                {/* <SideBar /> */}
                {props.children}
            </main>
            {/* <Footer/> */}
        </Fragment>
    );
}

export default Layout;