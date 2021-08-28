// renderer/container/root/index.tsx
import React, {useState, useEffect} from 'react';
import './index.less';
import {useSelector, useDispatch} from 'react-redux';
// @ts-ignore
import Logo from '@assets/logo.png';
import {useHistory} from 'react-router';
import {shell} from 'electron';
import {ROUTER_ENTRY, ROUTER_KEY} from '@common/constants/router';
import {isHttpOrHttpsUrl} from "@common/utils/router";

function Root() {
    const dispatch = useDispatch();
    const appName = useSelector((state: any) => state.globalModel.appName);

    // 👇 通过 history.push 进行跳转
    const history = useHistory();
    const onRouterToLink = (router: TSRouter.Item) => {
        if (router.text !== '简历') {
            shell.openExternal(router.url);
        } else {
            history.push(router.url)
        }
    };
    return (
        <div styleName="root">
            <div styleName="container">
                <img src={Logo} alt=""/>
                <div styleName="title">VisResumeMook</div>
                <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众</div>
                <div styleName="action">
                    {
                        ROUTER_ENTRY.map((router: TSRouter.Item) => {
                            return (
                                <div key={router.key}
                                     onClick={() => onRouterToLink(router)}
                                     styleName="item">{router.text}</div>
                            )
                        })
                    }
                </div>
                <div styleName="copyright">
                    <div styleName="footer">
                        <p styleName="copyright">
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Root;