export interface TStore {
    /**
     * @description 选中工具条模块的keys
     */
    resumeToolbarKeys: string[];
    /**
     * @description 模块列表
     */
    templateList: TSTemplate.Item[];
    /**
     * @description 当前选中的模版
     */
    selectTemplate: TSTemplate.Item;
}

const templateModel: TSRcReduxModel.Props<TStore> = {
    namespace: 'templateModel',
    openSeamlessImmutable: true,
    state: {
        resumeToolbarKeys: [],
        templateList: [],
        selectTemplate: {
            templateId: '',
            templateName: '',
            templateCover: '',
        },
    },
};

export default templateModel;
