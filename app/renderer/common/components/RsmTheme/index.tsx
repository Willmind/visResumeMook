// renderer/common/components/MyTheme/index.tsx

import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';
// 👇 引入该 hooks
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

interface IProps {
    themeList: TSTheme.Item[];
    currentTheme: TSTheme.Item;
    onChangeTheme: (theme: TSTheme.Item) => void;
}

function RsmTheme() {

    const themeList = useSelector((state: any) => state.themeModel.themeList);
    // 👇 通过这个 Hooks 得到的是一对值：当前状态和一个更新它的函数
    const [currentTheme, setCurrentTheme] = useThemeActionHooks.useGetCurrentTheme();
    return (
        <div styleName="box">
            {themeList &&
            themeList.length > 0 &&
            [...themeList].map((t: TSTheme.Item, index: number) => {
                return (
                    <span
                        key={index}
                        style={{ backgroundColor: t.backgroundColor }}
                        styleName={`${currentTheme.id === t.id ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentTheme && setCurrentTheme(t, true);
                        }}
                    />
                );
            })}
        </div>
    );
}

export default RsmTheme;