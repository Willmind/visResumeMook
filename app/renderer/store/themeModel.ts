// renderer/store/themeModel.ts

export interface TStore {
    /**
     * @description 主题列表
     */
    themeList: TSTheme.Item[];
    /**
     * @description 当前选中的主题
     */
    currentTheme: TSTheme.Item;
}

const themeModel: TSRcReduxModel.Props<TStore> = {
    namespace: 'themeModel',
    openSeamlessImmutable: true,
    state: {
        themeList: [],
        currentTheme: {
            id: '',
            fontColor: '',
            backgroundColor: '',
        },
    },
};

export default themeModel;