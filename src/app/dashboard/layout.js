import React from 'react';

export const metadata = {
    title: 'SideBar || My first Next App',
    description: 'Generated by create next app',
  }
const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>Sidebar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;