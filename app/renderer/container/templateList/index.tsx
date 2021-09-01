import React from 'react';
import './index.less'
import Header from './Header';
import Navigation from "@src/container/templateList/Navigation";
import StaticResume from "@src/container/templateList/StaticResume";

// 👇 引入
import MyRectSize from '@common/components/RsmRectSize';


function TemplateList() {
    return (
        <div styleName="container">
            <Header/>
            <div styleName="content">
                <MyRectSize>
                    <MyRectSize.Left>
                        <Navigation />
                    </MyRectSize.Left>
                    <MyRectSize.Right>
                        <StaticResume />
                    </MyRectSize.Right>
                </MyRectSize>
            </div>
        </div>
    );
}

export default TemplateList;