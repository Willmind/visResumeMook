// renderer/router.tsx
import React,{useState, useEffect} from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
// 👇 引入路由常量
import ROUTER from '@common/constants/router';
import TemplateList from "@src/container/templateList";
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useThemeActionHooks from './hooks/useThemeActionHooks';

function Router() {
    const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
    const initThemeConfig = useThemeActionHooks.useInitThemeConfig();
    // 👇 进行初始化工作
    useEffect(() => {
        readDirAssetsTemplateHooks();
        initThemeConfig();
    }, []);
    return (
        <HashRouter>
            <Switch>
                {/* 👇 一定要添加 exact */}
                <Route path={ROUTER.root} exact>
                    <Root />
                </Route>
                {/* 👇 添加简历模块入口路由 */}
                <Route path={ROUTER.resume} exact>
                    <Resume />
                </Route>

                <Route path={ROUTER.templateList} exact>
                    <TemplateList />
                </Route>
            </Switch>
            {/* 重定向到首页 */}
            <Redirect to={ROUTER.root} />
        </HashRouter>
    );
}
export default Router;