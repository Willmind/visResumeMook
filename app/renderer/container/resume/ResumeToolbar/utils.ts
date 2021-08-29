/**在业务逻辑上，我们不用关心它是如何删除、如何新增，只需要调用封装好的方法，就能实现新增、删除功能，
 *
 *
 * @description 添加工具条模块
 * @param {TSResume.SliderItem[]} prevToolbarList 上一轮
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 下一轮
 */
export const onAddToolbar = (
    prevToolbarList: TSResume.SliderItem[],
    currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
    // 1. 创建一个新的数组 存进获取已添加模块的所有 key 值
    const addKeys = prevToolbarList.map((s: TSResume.SliderItem) => s.key);
    let nextToolbarList = [...Array.from(prevToolbarList)];
    // 2. 如果未包含当前要添加的模块key，则加入
    if (!addKeys.includes(currentToolbar.key)) {
        nextToolbarList.push(currentToolbar);
    }
    return nextToolbarList;
};

/**
 * @description 删除工具条模块
 * @param {TSResume.SliderItem[]} prevToolbarList 上一轮
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 下一轮
 */
export const onDeleteToolbar = (
    prevToolbarList: TSResume.SliderItem[],
    currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
    const nextToolbarList = [...Array.from(prevToolbarList)];
    const findIndex = nextToolbarList.findIndex((s: TSResume.SliderItem) => s.key === currentToolbar.key);
    // 3. 如果在未加添加模块中还存在此模块key，则删除
    if (findIndex > -1) {
        nextToolbarList.splice(findIndex, 1);
    }
    return nextToolbarList;
};

