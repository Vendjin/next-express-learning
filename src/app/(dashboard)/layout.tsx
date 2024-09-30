import React from 'react';

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <nav>
                {/* Навигация или другие общие элементы */}
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
